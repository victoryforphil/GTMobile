import axios from "axios"

export function fetchEvents(){
  console.log("Getting Events...");
  return{
    type:"FETCH_EVENTS",
    payload: axios.get("http://127.0.0.1:7777/api/schoolevents")
  }
}
