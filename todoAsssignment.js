const  express = require('express');
const app = express();
app.use(express.json());

let allTodoArr = [{id : 1, title : "morning", desc : "2 hours study"}];

app.get("/todos",function (req,res) {
 res.json(allTodoArr);
    
})



app.get("/todos/:ID",function (req,res) {
    const id = req.params.ID;
    allTodoArr.forEach(todo =>{
        if(todo.id == id){
            res.json(todo);
        }else{
            res.status(404).json({msg :"No Todo found with this "+ id});
        }

    })
})


app.post("/todos", function (req,res) {
    let newTodo = req.body;
    console.log(newTodo);
    allTodoArr.push(newTodo)
    res.status(201).json({id: newTodo.id });
    
})


app.put("/todos/:ID" ,function (req,res) {
    const id = req.params.ID;
  
    
    allTodoArr.forEach(todo =>{
    if(todo.id == id){
            todo.completed = !todo.completed;
            return res.json({msg :"Todo was found and updated"});
        }
    })
   return res.status(404).json({msg :"Not found"});

})

app.delete("/todos/:ID", function (req,res) {
    const id =parseInt(req.params.ID);

const todoIndex = allTodoArr.findIndex(todo => todo.id === id);
if(todoIndex !== -1) {
    allTodoArr.splice(todoIndex,1);
    return res.json({ msg: "Todo deleted successfully" });
}

 return res.status(404).json({ msg: "No todo found" });
  

})

app.listen(3001);