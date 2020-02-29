const fs=require("fs");
const path=require("path");
const assert=require("assert");
const crypto=require("crypto");
const process=require("process");

var lst_decrypt_dirs=["source/_encrypted_posts"];
var lst_target_dirs=["source/_posts"];

assert.equal(lst_decrypt_dirs.length,
    lst_target_dirs.length,
    "Array of encrypt files and targets not match.");

var file_count=0;

console.log("Decrypt started.");

const algorithm="aes-192-cbc";
const token=process.argv.slice(2)[0];
const yindian_salt="sALtNacL";

for (let i = 0; i < lst_decrypt_dirs.length; i++) {
    const decrypt_pos=lst_decrypt_dirs[i];
    const target_pos=lst_target_dirs[i];
    var dirfiles=fs.readdirSync(decrypt_pos);
    for (let j = 0; j < dirfiles.length; j++) {
        const filename=dirfiles[j];
        //console.log(filename);
        if (filename.endsWith("crf"))
            continue;
        const rpos=path.join(decrypt_pos,filename);
        const tpos=path.join(target_pos,filename);
        const info_filename=path.join(decrypt_pos,filename+".crf");
        assert(fs.existsSync(info_filename));
        var file_str_list=fs.readFileSync(info_filename,"utf-8").toString().split("\n");
        //console.log(file_str_list);
        var iv_buf=Buffer.from(file_str_list[0],"base64");
        var rd_salt_str=file_str_list[1];
        const ans_salt=yindian_salt+rd_salt_str;
        const key=crypto.scryptSync(token,ans_salt,24);
        const cipher=crypto.createDecipheriv(algorithm,key,iv_buf);
        //console.log(rpos);
        //console.log(tpos);
        const input_f=fs.createReadStream(rpos);
        const output_f=fs.createWriteStream(tpos);
        input_f.pipe(cipher).pipe(output_f);
        file_count++;
    }
}

console.log(`Decrypting. ${file_count} file(s) will be processed.`);