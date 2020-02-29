const fs=require("fs");
const path=require("path");
const assert=require("assert");
const crypto=require("crypto");
const process=require("process");

var lst_encrypt_dirs=["source/_to_encrypt_posts"];
var lst_target_dirs=["source/_encrypted_posts"];

assert.equal(lst_encrypt_dirs.length,
    lst_target_dirs.length,
    "Array of encrypt files and targets not match.");

var file_count=0;

console.log("Encrypt started.");

const algorithm="aes-192-cbc";
const token=process.argv.slice(2)[0];
const yindian_salt="sALtNacL";

for (let i = 0; i < lst_encrypt_dirs.length; i++) {
    const encrypt_pos=lst_encrypt_dirs[i];
    const target_pos=lst_target_dirs[i];
    var dirfiles=fs.readdirSync(encrypt_pos);
    for (let j = 0; j < dirfiles.length; j++) {
        const filename=dirfiles[j];
        const rpos=path.join(encrypt_pos,filename);
        const tpos=path.join(target_pos,filename);
        const info_filename=path.join(target_pos,filename+".crf");
        var iv_buf,rd_salt_str;
        if (fs.existsSync(info_filename)){
            var file_str_list=fs.readFileSync(info_filename,"utf-8").toString().split("\n");
            //console.log(file_str_list);
            iv_buf=Buffer.from(file_str_list[0],"base64");
            rd_salt_str=file_str_list[1];
        }
        else {
            iv_buf=Buffer.alloc(16);
            rd_salt_buf=Buffer.alloc(16);
            iv_buf=crypto.randomFillSync(iv_buf);
            rd_salt_buf=crypto.randomFillSync(rd_salt_buf);
            var iv_buf_str=iv_buf.toString("base64");
            var rd_salt_str=rd_salt_buf.toString("base64");
            var info_file=fs.openSync(info_filename,"w");
            fs.writeSync(info_file,iv_buf_str,"utf-8");
            fs.writeSync(info_file,'\n',"utf-8");
            fs.writeSync(info_file,rd_salt_str,"utf-8");
            fs.writeSync(info_file,'\n',"utf-8");
            fs.closeSync(info_file);
        }
        const ans_salt=yindian_salt+rd_salt_str;
        const key=crypto.scryptSync(token,ans_salt,24);
        const cipher=crypto.createCipheriv(algorithm,key,iv_buf);
        //console.log(rpos);
        //console.log(tpos);
        const input_f=fs.createReadStream(rpos);
        const output_f=fs.createWriteStream(tpos);
        input_f.pipe(cipher).pipe(output_f);
        file_count++;
    }
}

console.log(`Encrypting. ${file_count} file(s) will be processed.`);