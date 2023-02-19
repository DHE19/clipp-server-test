require('dotenv').config();
const {initializeApp, applicationDefault} = require('firebase-admin/app');
const {getFirestore} =require('firebase-admin/firestore');
const admin = require('firebase-admin');

initializeApp({
    credential: admin.credential.cert({
        type: process.env.TYPE,
        projectId: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        privateKey: process.env.PRIVATE_KEY,
        clientEmail:process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
        client_x509_cert_url: process.env.CLIENT_CERT
    })
})


const db = getFirestore();
const collectionName = 'vehicles';

module.exports ={
    db,
    collectionName,
}