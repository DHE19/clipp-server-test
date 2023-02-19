require('dotenv').config();
const {initializeApp, applicationDefault} = require('firebase-admin/app');
const {getFirestore} =require('firebase-admin/firestore');
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS)
initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


const db = getFirestore();
const collectionName = 'vehicles';

module.exports ={
    db,
    collectionName,
}