const fs = require("fs");
const yaml = require("yaml");

const ignoreFileName = ["README","index"]

const getYamlFile = yaml.parse(fs.readFileSync(__dirname+"/nav.yaml",'utf-8'))


const parsedChildFile = (rootDir,parentDir,searchDir,yamlArray)=>{
    const childPath = rootDir+searchDir;
    return fs.readdirSync(childPath,{withFileTypes:true}).filter(file =>!file.isDirectory()).map(file =>{
        const fileName = file.name.split(".")[0]
        const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
        const responseObject  =  {
            text:yamlArray[fileName]?yamlArray[fileName]:fileName,
            link:parentDir+searchDir+filePath
        }
        console.log(responseObject);
        return responseObject
    })
}

const  parsedParentFile =(rootDir,searchDir,yamlArray)=>{
    const parentPath = rootDir+"/"+searchDir
    const selectedFileList = yamlArray[searchDir]
    console.log(selectedFileList);
     return fs.readdirSync(parentPath,{withFileTypes:true}).filter(file=>file.isDirectory()).map((file) =>{
        const fileName = file.name.split(".")[0]
        const parsedFileList = selectedFileList[fileName]
        const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
        return  {
                    text: parsedFileList.title?parsedFileList.title:fileName,
                    children: parsedChildFile(parentPath,searchDir,filePath,parsedFileList.children)
                }
        })

}

module.exports= parsedParentFile

const file = parsedParentFile('src','web',getYamlFile);
console.log(file)
