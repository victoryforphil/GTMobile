

var Responses = {
  SERVER_STATUS_ONLINE: {result: 1, message:"Server Online!"},
  SERVER_STATUS_ERROR: {result: 0, message:"Server Error!"},
  CREATE_EVENT_SUCCESS: {result: 0, message:"Created Event!"},
  CREATE_EVENT_FAILED: {result: 1, message:"Failed to Create Event!"},
  FETCH_EVENTS_ALL: {result: 0, message:"Fetch Events Success!"},
  FETCH_EVENTS_ERROR: {result: 1, message:"Fetch Events Failed!"}
}

module.exports = Responses
