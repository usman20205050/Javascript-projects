import userModel from "../models/usermodel.js"

export const create = async (req, res)=>{
    try{
const userdata =  await userModel.create(req.body);
if(!userdata){
    return res.status(404).json({message:"userData not found"})
}
const saveddata = await userdata.save();
    res.status(200).json(saveddata)
}
catch(error){
    res.status(500).json({message: "userdata not found"})
}
}
export const  getalluser =async (req, res)=>{
try{
    const allusers= await userModel.find();
    if(!allusers && allusers.length === 0){
        return res.status(404).json({message:"all users are not found"})
    }
    res.status(200).json(allusers)
}
catch(error){
    res.status(500).json({message:"your route is not running"})
}
}
export const getonlyuser = async(req, res)=>{
    try{
        const id = req.params.id;
        const onlyuser = await userModel.findById(id)
        if(!onlyuser){
            res.status(404).json({message:"user not found"})
        }
        res.status(200).json(onlyuser)
    }
    catch(error){
        res.status(500).json({message:"your route is not running"})
    }
}
export const update =async (req, res)=>{
    try {
        const id = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
}
catch(error){
    res.status(500).json({message:"your route is not running"})
}
}
export const deleteuser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userexist = await userModel.findById(id)
        if(!userexist){
            return res.status(404).json({ message: "User not found" });
        }
        const deleteduser= await userModel.findByIdAndDelete(id);
        res.status(200).json({me:"user deleted"});
    }
    catch(error){
        res.status(500).json({message:"your route is not running"})
    }
   
}
