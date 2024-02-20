import express from "express"
import {create, deleteuser, getalluser, getonlyuser, update} from "../controllers/constrollers.js";
const route = express.Router();
route.post('/create', create);
route.get('/getallusers', getalluser);
route.get('/getonlyuser/:id', getonlyuser)
route.put('/updatauser/:id', update)
route.delete('/deleteduser/:id', deleteuser)
export default route;
