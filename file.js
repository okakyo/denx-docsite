const fs = require('fs');
const dirpath = "src/docs"
let addPathDir = {}

fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
}).map(dir=>{

    if(dir!=='.vuepress'){
         addPathDir[`/${dir}/`]=
            [{title: dir,
            collapsable: true,
            children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
                return  childDir==="README.md"|| childDir==="index.md" ? "":childDir.split(".")[0]
            })}]
        }
    })
console.log(addPathDir);