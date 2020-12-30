const fs = require("fs");
const ignoreFileName = ["README","index"]

const sortList =(list)=>{
    if (Array.isArray(list)){
        return list.sort((left,right)=>{
        const leftText = Number(left.text.split(".")[0]);
        const rightText = Number(right.text.split(".")[0]);
        return leftText<rightText?-1:leftText>rightText?1:0
    })
    } else {
        throw Error("input invalid list type")
    }
    
}


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
    const responseFileList = fs.readdirSync(searchFilePath,{withFileTypes:true}).filter(file =>!file.isDirectory()).map(file =>{
        return parsedChildrenLink(file,childPath,yamlArray)
    })
    return sortList(responseFileList)
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
             const inputChildrenList= parsedChildFile(parentPath,searchDir,filePath,parsedFileList.children)
            return  {
                        text: parsedFileList.title?parsedFileList.title:fileName,
                        children: sortList(inputChildrenList)
                }
        })

        return [{text:"はじめに",link:searchDir+"/"}].concat((sortList(parsedDirList)))
    } else {
        const DirList = fs.readdirSync(parentPath,{withFileTypes:true}).filter(file=>!file.isDirectory())
        const inputChildrenList =DirList.map(file=>parsedChildrenLink(file,"/"+searchDir,selectedFileList.children))
        return [{
            text: selectedFileList.title,
            children:sortList(inputChildrenList)
        
        }]
    }

}

const navLists  = (yamlFlie)=>{
    const FileKeys = Object.keys(yamlFlie)
    return FileKeys.map(file=>{
        const fileTitle = yamlFlie[file].title
        return {
            text: fileTitle?fileTitle:file,
            link: file+"/"
        }
    })
}
const sidebarLists =(docDir,yamlFile)=>{
    const responseList ={}
    Object.keys(yamlFile).map(file=>{
        responseList[`/${file}/`]=parsedParentFile(docDir,file,yamlFile)
    })
    return responseList
}
exports.sidebarLists= sidebarLists
exports.navLists = navLists