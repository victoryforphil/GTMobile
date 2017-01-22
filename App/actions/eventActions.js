

export function fetchEvents(){
  console.log("Getting Events...");
  return function(dispath){
    dispath({
      type:"FETCH_EVENTS_PENDING"
    });
    fetch("http://10.0.0.7:7777/api/schoolevents")
      .then(function(res){
        return res.json()
      })
      .then(function(data){
        dispath({
          type:"FETCH_EVENTS_FULFILLED",
          payload:data
        })
        return data;
      })
      .catch(function(err){
        dispath({
          type:"FETCH_EVENTS_REJECTED",
          payload:err
        })
      });
  }
}


export function fetchEvent(id){
  return{
    type:"FETCH_EVENT",
    payload: axios.get("http://127.0.0.1:7777/api/schoolevents/" + id)
  }
}
