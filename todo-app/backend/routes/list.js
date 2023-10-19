const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');

//addTask
router.post('/addTask', async (req, res) => {
    try{
        const {title, body, id}  = req.body;
        const existingUser = await User.findById({_id:id});
        if(existingUser){
        const list = new List({title, body, user:existingUser});
            await list.save();
                res.status(200).json({list});
            existingUser.list.push(list);
            existingUser.save();        
        }
    }
    catch(err){
        console.log(err)
    }
});

//updateTask
router.put('/updateTask/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const {title, body}  = req.body;
        
        const list = await List.findByIdAndUpdate(id, {title, body});
        list.save().then(()=>{
            res.status(200).json({message: "Task updated successfully"});
        })        
    
    }
    catch(err){
        console.log(err)
    }
});


//deletedTask
router.delete('/deleteTask/:id', async (req, res) => {
    try{
        
        const { id}  = req.body;
        const existingUser = await User.findByIdAndUpdate(id,{$pull:{list:id}});
         if(existingUser){
            const list = await List.findByIdAndDelete(req.params.id).then(()=>{
                res.status(200).json({message: "Task deleted successfully"});
            })        
        }
    }
    catch(err){
        console.log(err)
    }
});
//getTasks

router.get('/getTasks/:id', async (req, res) => {

    const list = await List.find({user:req.params.id}).sort({createdAt: -1})
    if(list.length!==0){
        res.status(200).json({list});
    }
    else{
        res.status(200).json({message: "No Tasks"});

    }
});

module.exports = router;