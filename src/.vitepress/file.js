const fs = require("fs");
const yaml = require("yaml");
const getYamlFile = yaml.parse(fs.readFileSync(__dirname+"/nav.yaml",'utf-8'))

const ignoreFileName = ["README","index"]

const parsedChildrenLink= (file,childPath,yamlArray)=>{
    const fileName = file.name.split(".")[0]
    const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
    
    const responseObject  =  {
        text:yamlArray[fileName]?yamlArray[fileName]:fileName,
        link:childPath+filePath
    }
    
    return responseObject

}


const parsedChildFile = (rootDir,parentDir,searchDir,yamlArray)=>{
    const searchFilePath = rootDir+searchDir;
    const childPath = parentDir+searchDir
    return fs.readdirSync(searchFilePath,{withFileTypes:true}).filter(file =>!file.isDirectory()).map(file =>{
        return parsedChildrenLink(file,childPath,yamlArray)
    }).sort((left,right)=>{
        const leftText = left.text;
        const rightText = right.text;
        return leftText<rightText?-1:leftText>rightText?1:0
    })
}

const  parsedParentFile =(rootDir,searchDir,yamlArray)=>{
    const parentPath = rootDir+"/"+searchDir
    const selectedFileList = yamlArray[searchDir]
    // 2 階層までならこの部分で実装する必要がある
    const parentDirList = fs.readdirSync(parentPath,{withFileTypes:true}).filter(file=>file.isDirectory())
    if(parentDirList.length){
        const parsedDirList =parentDirList.map((file) =>{
        const fileName = file.name.split(".")[0]
        const parsedFileList = selectedFileList[fileName]
        const filePath = ignoreFileName.includes(fileName)?"/":"/"+fileName
        return  {
                    text: parsedFileList.title?parsedFileList.title:fileName,
                    children: parsedChildFile(parentPath,searchDir,filePath,parsedFileList.children).sort((left,right)=>{
                        const leftText = left.text;
                        const rightText = right.text;
                        return leftText<rightText?-1:leftText>rightText?1:0
                    })
                }
        })
        return [{text:"はじめに",link:searchDir+"/"}].concat(parsedDirList.sort((left,right)=>{
            const leftText = left.text;
            const rightText = right.text;
            return leftText<rightText?-1:leftText>rightText?1:0
        }))
    } else {
        const DirList = fs.readdirSync(parentPath,{withFileTypes:true}).filter(file=>!file.isDirectory())
        return [{
            text: selectedFileList.title,
            children:DirList.map(file=>parsedChildrenLink(file,"/"+searchDir,selectedFileList.children)).sort((left,right)=>{
                const leftText = left.text;
                const rightText = right.text;
                return leftText<rightText?-1:leftText>rightText?1:0
            })
        
        }]
    }

}

const navLists  = (yamlFlie)=>{
    const FileKeys = Object.keys(yamlFlie)
    return FileKeys.map(file=>{
        return {
            text: yamlFlie[file].title,
            link: file+"/"
        }
    })
}

exports.parsedParentFile= parsedParentFile
exports.navLists = navLists
