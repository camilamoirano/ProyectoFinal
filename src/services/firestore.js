
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPxeUgP1szuKtYpnG0UeRvJSbjH9OV568",
  authDomain: "mudart-45638.firebaseapp.com",
  projectId: "mudart-45638",
  storageBucket: "mudart-45638.appspot.com",
  messagingSenderId: "233190419564",
  appId: "1:233190419564:web:533fce3dd1e932ff723c49"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const miColeccion = collection(firestore, "productos");
    let snapshotDB = await getDocs(miColeccion);
    let dataDocs = snapshotDB.docs.map((documento) => {
         let docFormateado = {...documento.data(), id: documento.id};
         return docFormateado
    });
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef =  doc (firestore, "productos", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id}    
}

export async function getItemsByCategory(catParams){
    const miColeccion = collection(firestore, "productos");
    const queryCategory = query(miColeccion, where("category", "==", catParams));
    const respuesta = await getDocs(queryCategory);
    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = {...documento.data(), id: documento.id};
        return docFormateado
   });
   return dataDocs
}

export default app;
export { firestore };