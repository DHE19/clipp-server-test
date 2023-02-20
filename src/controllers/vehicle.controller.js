const {db, collectionName} = require('../services/firebase.js');
import { serverTimestamp } from "firebase/firestore";

const getVehicles = async (_req,res) =>{
    try {    
        const result = await db.collection(collectionName).get();
        res.send(result.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })));
    } 
    catch (error) {
        res.status(400).send(error);
    }
}

const getVehicle = async (req, res) =>{
    try{
        const {id} = req.params;
        const doc = await db.collection(collectionName).doc(id).get();
        res.send(doc.data());
    }catch(error){
        res.status(400).send(error);
    }
}

const setNewVechicle = async (req, res) => {
    try{
        const {brand, model, year} = req.body;
        const timestamp = serverTimestamp();
        await db.collection(collectionName).add({
            brand,
            model,
            year: parseInt(year),
            timestamp,
            deleted: false,
        })
        res.send(req.body);
    }catch(error){
        res.status(400).send(error);
    }
}

const deleteVehicle = async (req, res) => {
    try {    
        const {id} = req.params;
        await db.collection(collectionName).doc(id).update({
            deleted: true,
        });
        res.send('vehiculo borrado');
    } 
    catch (error) {
        res.status(400).send(error);
    }
}


module.exports ={
    getVehicles,
    getVehicle,
    setNewVechicle,
    deleteVehicle,
}