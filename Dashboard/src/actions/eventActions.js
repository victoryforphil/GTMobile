import axios from "axios"

export function fetchEvents(){
  console.log("Getting Events...");
  return{
    type:"FETCH_EVENTS",
    payload: axios.get("http://127.0.0.1:7777/api/schoolevents")
  }
}


export function fetchEvent(id){
  return{
    type:"FETCH_EVENT",
    payload: axios.get("http://127.0.0.1:7777/api/schoolevents/" + id)
  }
}

export function createEvent(data){
  return{
    type:"CREATE_EVENT",
    payload: axios.post("http://127.0.0.1:7777/api/schoolevents", data)
  }
}



export function updateEvent(id,data){
  return{
    type:"UPDATE_EVENT",
    payload: axios.put("http://127.0.0.1:7777/api/schoolevents/"+id, data)
  }
}
