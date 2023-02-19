require('dotenv').config();
const {initializeApp, applicationDefault} = require('firebase-admin/app');
const {getFirestore} =require('firebase-admin/firestore');
const admin = require('firebase-admin');

initializeApp({
    credential: admin.credential.cert({
        type: "service_account",
        projectId: "clipp-platinum-cars",
        private_key_id: "bdcd99d4fe1f02d3b60ce56ffa79ddbe1253e385",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDOD8dXV/6V/jcn\nZetFq24WJg04xX2Ew1J2aqpVR3rM6Kt7Xg0QgPqK6MTa7hYA/ZeEXPq15WaflpzA\nXYxyjz4Q0ReezfXHDW24n44qzACnViiZv1wsBp3Z1HhZFuN+0IHpEx9rqxiXsyTO\nPZ+5fjADcn9mu+52WiQbxdRPwP3GpGB4pJN/1OEfrXDhDhJ7SUTjep6KM2GqAV5S\noSXOXi98JsFEjQfmw1QqYttYhgOPmBtP15fCTzE8tILv8/YqWA+CMd3zXz6aktBw\nrxNkcqJq/9igX11pJSZTd/wwqkDlWX6nOxeDON+GwOGnkcbseZ1v0TLBFz9LR9gP\nmJnTH/qfAgMBAAECggEABStIKNzAOisCXy6jVEAUpuGVe1MY7venXekXFMSSRAmi\nI5ocYcmaf1mPdp56VtQFtQBQGbgDdwVkMT8ngsgtGmbkXMt12uRvWC5IdrJfYdM7\neX/fZAtWclxuGG4GjuvUFnCwXRcRqtyHk9Tf6NtNgQiiQYV9WeKw/TFdPhLtSspR\nO+SEqZK3vrixrR5ddbiH5GenjQ77PWCGvkA387Wbz7ZYIsdGfAp95cHR81LAeOYE\n1403+Sfux04AKRF76vq4aJ1K5Nnqgno87AfVjLqup0Cr+MrSeyMMPtETq6QGdp6m\n2zGqUB5hl+Ko9WUYUYNEcszSKi7Y5JE5XJy7fDWbQQKBgQD+XzdHSVzgK6DqvLPy\nt35taWf8PhXcIgGxxAJ97Ky57wupzsS/pECZDLfV5BXnYBe1XLJo13P19Gr6boJE\nPkqD5ezcUJ2pJR52pckvBKGrbHreY0vnXpjsskQd5Er8c0dkMEK58Lv12UdEKsLZ\nV+J5DrUj8nhfEW/xLdAwAGcr6QKBgQDPYWg6clxkY3l26SxAw3t8ZFfHjv21b75A\n/acIcBZwXM8gAWWsBpAh2dGvUhIWolhDcoNPj08YhTUP0ErsZlkCDzxc3S4QGmYe\nRD14h6TWTbqqSHm5oQtjElv3uWwFH62XX9e91uVJ3qR2PPSoCSG8qSo7zxX8+By9\nfI05tyVFRwKBgBr2tuJcmXa9yTH4zM5muwUYDkjDwAd0p19TmrwEcY7IEyFt5Jc3\n7w0KNxZ6NgQvwHOeHt9UL1ucDBb9zds0CywOHFyCQyQh5ifHjRrpz8VfG2sldW9S\nLL2ya9wLThOSmLe7Eeep6BK4dIB6U+s8EKqqb3MfCblyHL6hD5d3A3i5AoGBALyL\nEvgQgW/EAOrblCBNmje+AxCsMH6E2bS86OADCGOf/bBblNSSIvij0MBVHZz2fMjV\nlA0BfigM8/EsrvG/G62DrJ3Bed+qIK3j3P94U6WDhfLLceATSwcH6hWPv2XpJyo5\nOSyf9Fb01RGq2cTsiH++TWeTH6qe6YJdewi+OmSBAoGBAI+jJl3vDNH1vtYNN2mU\nGHgw/UZ55S68ZcTzMNMpbmzJQAKK+e4xtT71aEdrxUxb2goEA0Ff/m9uM24/HVll\nCAvo3GXsAYwviaaiNyHJQZyph669eX6S+GlNsARpEIeOV+4oN4GAdtFbGpQn3ONv\nnz+lA1++g8COuxGlQ9PVniKG\n-----END PRIVATE KEY-----\n",
        clientEmail: "firebase-adminsdk-emg6p@clipp-platinum-cars.iam.gserviceaccount.com",
        client_id: "109735810062231246465",
        auth_uri:"https://accounts.google.com/o/oauth2/auth",
        token_uri:"https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-emg6p%40clipp-platinum-cars.iam.gserviceaccount.com"
    })
})


const db = getFirestore();
const collectionName = 'vehicles';

module.exports ={
    db,
    collectionName,
}