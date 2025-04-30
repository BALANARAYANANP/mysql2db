const connection = require('../models/db')

const postmethod = async (req,res)=>{
    const {name,email} = req.body
    try{
        const [result] = await connection.execute(" INSERT INTO users (name,email) VALUES (?,?) ", [name,email])
        res.status(200).json({message :"user added", id : result.insertId})
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

// Fetch Users

const get =  async (req,res)=>{
    try{
        const [result ] = await connection.execute("SELECT * FROM  users");
        res.status(200).json(result)
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

// Fetch users by id

const getid =   async(req,res)=>{
    const {id} = req.params
    try{
        const [result] = await connection.execute("SELECT * FROM users WHERE id = ?", [id])
        if(result.length > 0)
            res.status(200).json(result[0])
        else{
            res.status(404).json({ message : "User Not Found"}) 
        }

    }catch(err){
        res.status(500).json({message : err.message})
    }

}

const putmethod =  async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
       const data = await connection.execute("UPDATE users SET name = ? ,email = ? WHERE id = ?",
        [name, email, id]
      );
      res.status(200).json({ message: "User updated" , data});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


const deletemethod =  async(req,res)=>{
    const {id} = req.params
    try{
         await connection.execute('DELETE FROM users WHERE id=?', [id])
         res.status(200).json({message: " User Deleted Sucessfully"})
    }catch(err){
        res.status(500).json({err : err.message})
    }
}

module.exports = {postmethod,putmethod,getid, deletemethod, get}