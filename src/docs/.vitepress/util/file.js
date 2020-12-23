const fs = require('fs');

const changeTitle = (dirName) =>{
    const nameList = {
        "seminar":"勉強会",
        "how-to":"使い方",
        "web":"Web開発"
    }
    return nameList[dirName]?nameList[dirName]:dirName;
}


const parsedSearch =(parentPath,searchDir)=>{
    return fs.readdirSync(parentPath+"/"+searchDir).map(file =>{
        const fileName =file.split(".")[0]

        return fileName==="README"|| fileName==="index"? "":fileName;
    })
}

exports.searchFile = parsedSearch;
