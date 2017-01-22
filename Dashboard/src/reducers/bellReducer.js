export default function reducer(state={
  currentBell:{
    data: {},
    fetched: false,
    fetching: false,
    error: null
  },
  createBell:{

    fetched: false,
    fetching: false,
    error: null
  },

  bellList:{
    data: [],
    fetched: false,
    fetching: false,
    error: null
  }
}, action){

  switch(action.type){
    case "FETCH_BELLS_PENDING":{

      return {...state, bellList:{fetching: true}}
    }

    case "FETCH_BELLS_REJECTED":{
      return {...state, bellList:{fetching: false, error: action.payload}}
      console.log("ERROR:" + action.payload);
    }

    case "FETCH_BELLS_FULFILLED" :{

      return {...state, bellList:{data: action.payload.data, fetched: false, fetching: false, error:null}}
    }



    case "CREATE_BELL_PENDING":{

      return {...state,  createBell:{fetching: true, data: null}}
    }

    case "CREATE_BELL_REJECTED":{
      return {...state, createBell:{fetching: false, error: action.payload}}
    }

    case "CREATE_BELL_FULFILLED" :{

      return {...state, createBell:{fetched: false ,fetching: false, error:null}}
    }



    case "FETCH_BELL_PENDING":{

      return {...state, currentBell:{fetching: true, data: null}}
    }

    case "FETCH_BELL_REJECTED":{
      return {...state, currentBell:{fetching: false, error: action.payload.data}}
      console.log("ERROR:" + action.payload);
    }

    case "FETCH_BELL_FULFILLED" :{

      return {...state, currentBell:{data: action.payload.data, fetched: false, fetching: false, error:null}}
    }

    case "UPDATE_BELL_PENDING":{

      return {...state}
    }

    case "UPDATE_BELL_REJECTED":{
      return {...state}
      console.log("ERROR:" + action.payload);
    }

    case "UPDATE_BELL_FULFILLED" :{

      return {...state}
    }


    default:
      return state
  }
}
