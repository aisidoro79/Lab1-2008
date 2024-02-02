import { getToDoData } from "./lib/firebase/api";

//single source of truth from the data...
let store = [];
async function appInit(){
    const todos = await getToDoData();
    // // Object.values(todos).forEach((toDo) => console.log(toDo));
    
    // //to get the values from an object we use the Object.values(), Object.keys(), Object.entries();
    // store = [...Object.values(todos)];
    // console.log(store);

    // //Create your own todo data
    // const key = "-NpB-eTM3CAL9ana07fx";
    // //gives me a list of the keys
    // const keys = Object.keys(todos);
    // const item = keys.find((item)=>{
    //     if(item === key){
    //         return item;
    //     }
    // })
    console.log(todos);
}

appInit();

//real time database returns an objeft of an object
//its usually an array of objects

