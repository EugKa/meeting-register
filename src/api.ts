import { db } from "./firebase";

export function getData() {
    return db.collection("specialists").get().then((snapshot:any) => {
        try {
            const items = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
              }));
        
              return items;
        } catch (error) {
            console.log(error);
        }
    });
}


export function updateDocApi(dayOfMonth:string, month: string, time: string, id: string) {
  return db.collection('specialists').doc(id).update({
    meetings: {
      date: {
        dayOfMonth:dayOfMonth,
        month:month
      },
      time: time 
    }
  }).then(() => {
    console.log("Document successfully updated!");
})
}