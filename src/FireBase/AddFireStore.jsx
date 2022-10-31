// import {doc,getDoc, addDoc, collection} from "firebase/firestore";
// import {db} from "./firebase"
// import guitars from "../hiendguitar-68be4-default-rtdb-export.json"


// export const addData = async () => {
//   console.log(guitars)
//   console.log(typeof guitars)
//
//   try {
//     console.log('added data')
//     const docRef = await addDoc(collection(db, "guitar"), guitars)
//     console.log("Document written with ID: ", docRef);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   } finally {
//     console.log("done")
//   }
// }
//
// export const getData = async () => {
//
//   const docRef = doc(db, "guitar","pDeMSLxxO7PXv0yrDRPP");
//   const docSnap = await getDoc(docRef);
//
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data().guitar);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }