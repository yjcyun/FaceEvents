const { combineReducers } = require("redux");
const { eventReducer } = require("./events/eventReducer");

const rootReducer = combineReducers({
  event: eventReducer
});

export default rootReducer;