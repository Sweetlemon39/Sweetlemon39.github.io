const fs=require("fs");
const path=require("path");
const assert=require("assert");

var lst_decrypt_dirs=["source/_encrypted_posts"];
var lst_target_dirs=["source/_posts"];

assert.equal(lst_decrypt_dirs.length,
    lst_target_dirs.length,
    "Array of encrypt files and targets not match.");

var file_count=0;

console.log("Clean up started.");

for (let i = 0; i < lst_decrypt_dirs.length; i++) {
    const decrypt_pos=lst_decrypt_dirs[i];
    const target_pos=lst_target_dirs[i];
    var dirfiles=fs.readdirSync(decrypt_pos);
    for (let j = 0; j < dirfiles.length; j++) {
        const filename=dirfiles[j];
        if (filename.endsWith("crf"))
            continue;
        const tpos=path.join(target_pos,filename);
        //console.log(tpos);
        try {
            fs.unlinkSync(tpos);
        }
        catch(err) {
            if (!(err.code=="ENOENT"))
                throw err;
        }
        file_count++;
    }
}

console.log(`Cleaning up. ${file_count} file(s) will be processed.`);