const fs = require("fs");
const ignoreFileName = ["README","index"]

const  parsedFile =(rootDir,searchDir)=>{
    const parentPath = rootDir+"/"+searchDir
    return fs.readdirSync(parentPath,{withFileTypes:true})
      .filter(file=>!file.isDirectory())
      .map(childDir=>{
        const fileName = childDir.name.split(".")[0];
        const filePath  = ignoreFileName.includes(fileName)?"/":`/${fileName}`
        const file = fs.readFileSync(parentPath+"/"+childDir.name,"utf-8");
        console.log(file)
        return {
            text:ignoreFileName.includes(fileName)?"はじめに":fileName,
            link: "/"+searchDir+filePath
        }
    }).sort((a,b)=>{if(a.link<b.link) return -1;if(a.link > b.link) return 1;return 0;})
}

const file= parsedFile("src","web");
console.log(file);