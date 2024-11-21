import express from 'express';
import { readdirSync, statSync, existsSync, readFile } from 'fs';
import { join } from 'path';
const app = express();

function getFilesInDirectory(dirPath){
        let allFilesArr = [];
       const items = readdirSync(dirPath);

       items.forEach(item => {
        const itemPath = join(dirPath,item);
        if(statSync(itemPath).isFile()){
                allFilesArr.push(item);
        }
        
       });

       return allFilesArr;
}


app.get("/files", function (req,res) {
        res.json( getFilesInDirectory("C:/Users/ASUS/OneDrive/Desktop/week2Assignments"))
})

app.get("/files/:filename" ,function (req,res) {
        const filename = req.params.filename;
        if (existsSync(join(__dirname,filename))) {
                readFile(filename, "utf-8",function (err,data) {
                        res.json(data);
                        
                })
                
        }else{
                res.status(404).json({msg : "file Not Found" })
        }
       
        
})

app.listen(3000);




