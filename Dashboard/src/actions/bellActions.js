import axios from "axios"

export function fetchBells(){
  console.log("Getting Events...");
  return{
    type:"FETCH_BELLS",
    payload: axios.get("http://127.0.0.1:7777/api/bellschedule")
  }
}


export function fetchBell(id){
  return{
    type:"FETCH_BELL",
    payload: axios.get("http://127.0.0.1:7777/api/bellschedule/" + id)
  }
}


export function createBell(data){
  return{
    type:"CREATE_BELL",
    payload: axios.post("http://127.0.0.1:7777/api/bellschedule", data)
  }
}



export function updateBell(id,data){
  return{
    type:"UPDATE_BELL",
    payload: axios.put("http://127.0.0.1:7777/api/bellschedule/"+id, data)
  }
}


export function deleteBell(id){
  return{
    type:"DELETE_BELL",
    payload: axios.delete("http://127.0.0.1:7777/api/bellschedule/"+id)
  }
}
