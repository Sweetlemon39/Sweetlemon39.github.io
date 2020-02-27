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

console.log("Prework started.");

var iv_buf=Buffer.alloc(16);
var rd_salt_buf=Buffer.alloc(16);
iv_buf=crypto.randomFillSync(iv_buf);
rd_salt_buf=crypto.randomFillSync(rd_salt_buf);
var iv_buf_str=iv_buf.toString("base64");
var rd_salt_str=rd_salt_buf.toString("base64");
var info_file=fs.openSync("crinfo","w");
fs.writeSync(info_file,iv_buf_str);
fs.writeSync(info_file,'\n');
fs.writeSync(info_file,rd_salt_str);
fs.writeSync(info_file,'\n');
fs.closeSync(info_file);

console.log("Prework done.");

console.log("Encrypt started.");

const algorithm="aes-192-cbc";
const token=process.argv.slice(2)[0];
const yindian_salt="sALtNacL";
const ans_salt=yindian_salt+rd_salt_str;
const key=crypto.scryptSync(token,ans_salt,24);
const cipher=crypto.createCipheriv(algorithm,key,iv_buf);

for (let i = 0; i < lst_encrypt_dirs.length; i++) {
    const encrypt_pos=lst_encrypt_dirs[i];
    const target_pos=lst_target_dirs[i];
    var dirfiles=fs.readdirSync(encrypt_pos);
    for (let j = 0; j < dirfiles.length; j++) {
        const filename=dirfiles[j];
        const rpos=path.join(encrypt_pos,filename);
        const tpos=path.join(target_pos,filename);
        //console.log(rpos);
        //console.log(tpos);
        const input_f=fs.createReadStream(rpos);
        const output_f=fs.createWriteStream(tpos);
        input_f.pipe(cipher).pipe(output_f);
        file_count++;
    }
}

console.log(`Encrypt done. ${file_count} file(s) processed.`);