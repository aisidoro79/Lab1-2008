import {ref, child, get} from "firebase/database";

import {db} from "./../../config/firebase/firebaseInit";

async function getToDoData(){
    //PART 1: connect using a refernece
    const toDoListRef = ref(db, "/todos");

    //PART 2: Grab all the data
    const dataSnapshot = await get(toDoListRef);

    //PART 3: Data
    return await dataSnapshot.val();
}

export{getToDoData}
