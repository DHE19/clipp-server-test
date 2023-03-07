require('dotenv').config();
const {initializeApp, applicationDefault} = require('firebase-admin/app');
const {getFirestore} =require('firebase-admin/firestore');
const admin = require('firebase-admin');

initializeApp({
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
})


const db = getFirestore();
const collectionName = 'vehicles';

module.exports ={
    db,
    collectionName,
}