const fs = require("fs");
const ignoreFileName = ["README","index"]


const parsedChildFile = (rootDir,searchDir)=>{
    const childPath = rootDir+"/"+searchDir;
    return fs.readdirSync(childPath,{withFileTypes:true}).filter(file =>!file.isDirectory()).map(file =>{
        const fileName = file.name.split(".")[0]
        const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
        const responseObject  =  {
            text:fileName,
            link:childPath+filePath
        }
        console.log(responseObject);
        return responseObject
    })
}

const  parsedParentFile =(rootDir,searchDir)=>{
    const parentPath = rootDir+"/"+searchDir
     return fs.readdirSync(parentPath,{withFileTypes:true}).filter(file=>file.isDirectory()).map((file) =>{
        const fileName = file.name.split(".")[0]
        const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
        return  {
                    text: fileName,
                    children: parsedChildFile(parentPath,filePath)
                }
        })

}

const file= parsedParentFile("src","web");
console.log(file);