const fs = require('fs');
const dirpath = "src/docs"
let addPathDir = {}



const changeTitle = (dirName) =>{
    const nameList = {
        "seminar":"勉強会",
        "how-to":"使い方",
        "web":"Web開発"
    }
    return nameList[dirName];
}

const searchFiles(fileName){
    
}


fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
}).map(dir=>{
  if(dir!=='.vuepress'){
        const directory = fs.readdirSync(dirpath+"/"+dir)
        
         setData = fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
                    return  childDir==="README.md"|| childDir==="index.md" ? "":childDir.split(".")[0]
                })
        console.log(setData)
        addPathDir[`/${dir}/`]=[
             {  title: changeTitle(dir),
                collapsable: true,
                children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
                    // 頑張れば再帰で実装できそう
                    return  childDir==="README.md"|| childDir==="index.md" ? "":childDir.split(".")[0]
                })
            }]
        }
    })
