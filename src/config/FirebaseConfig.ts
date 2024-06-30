import admin from 'firebase-admin';

const serviceAccount = require('../../ebuddy-assignment-firebase-adminsdk-38d0i-e828c6372b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export default admin;
