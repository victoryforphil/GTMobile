export default function reducer(state={
  currentEvent:{
    data: {},
    fetched: false,
    fetching: false,
    error: null
  },
  createEvent:{

    fetched: false,
    fetching: false,
    error: null
  },

  eventsList:{
    data: [],
    fetched: false,
    fetching: false,
    error: null
  }
}, action){

  switch(action.type){
    case "FETCH_EVENTS_PENDING":{
      return {...state, eventsList:{fetching: true}}
    }

    case "FETCH_EVENTS_REJECTED":{
      return {...state, eventsList:{fetching: false, error: action.payload}}
      console.log("ERROR:" + action.payload);
    }

    case "FETCH_EVENTS_FULFILLED" :{

      return {...state, eventsList:{data: action.payload, fetched: false, fetching: false, error:null}}
    }



    case "CREATE_EVENTS_PENDING":{

      return {...state,  createEvent:{fetching: true, data: null}}
    }

    case "CREATE_EVENTS_REJECTED":{
      return {...state, createEvent:{fetching: false, error: action.payload}}
    }

    case "CREATE_EVENTS_FULFILLED" :{

      return {...state, createEvent:{fetched: false ,fetching: false, error:null}}
    }



    case "FETCH_EVENT_PENDING":{

      return {...state, currentEvent:{fetching: true, data: null}}
    }

    case "FETCH_EVENT_REJECTED":{
      return {...state, currentEvent:{fetching: false, error: action.payload.data}}
      console.log("ERROR:" + action.payload);
    }

    case "FETCH_EVENT_FULFILLED" :{

      return {...state, currentEvent:{data: action.payload.data, fetched: false, fetching: false, error:null}}
    }

    case "UPDATE_EVENT_PENDING":{

      return {...state}
    }

    case "UPDATE_EVENT_REJECTED":{
      return {...state}
      console.log("ERROR:" + action.payload);
    }

    case "UPDATE_EVENT_FULFILLED" :{

      return {...state}
    }


    default:
      return state
  }
}
