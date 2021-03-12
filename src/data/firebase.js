import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOlzfI2KFofrzdabWQGNDnnNaBd0VIE_U",
  authDomain: "pvt-h21-luberisse-ludovick.firebaseapp.com",
  databaseURL: "https://pvt-h21-luberisse-ludovick-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-luberisse-ludovick",
  storageBucket: "pvt-h21-luberisse-ludovick.appspot.com",
  messagingSenderId: "148589257484",
  appId: "1:148589257484:web:ec6b5e6c8e9e393fc7df29",
  measurementId: "G-CN62KPG0L2"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;