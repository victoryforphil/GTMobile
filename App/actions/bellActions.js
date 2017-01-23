

export function fetchBells(){

  return function(dispath){
    dispath({
      type:"FETCH_BELLS_PENDING"
    });
    fetch("http://10.0.0.7:7777/api/bellschedule")
      .then(function(res){
        return res.json()
      })
      .then(function(data){
        dispath({
          type:"FETCH_BELLS_FULFILLED",
          payload:data
        })
        return data;
      })
      .catch(function(err){
        dispath({
          type:"FETCH_BELLS_REJECTED",
          payload:err
        })
      });
  }
}


export function fetchBell(id){
  return function(dispath){
    dispath({
      type:"FETCH_BELL_PENDING"
    });
    fetch("http://10.0.0.7:7777/api/bellschedule/"+id)
      .then(function(res){
        return res.json()
      })
      .then(function(data){
        dispath({
          type:"FETCH_BELL_FULFILLED",
          payload:data
        })
        return data;
      })
      .catch(function(err){
        dispath({
          type:"FETCH_BELL_REJECTED",
          payload:err
        })
      });
  }
}
