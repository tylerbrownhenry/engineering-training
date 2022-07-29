const INITIAL_STATE = {
    jiras: [],
};
  
function jiraListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "JIRAS_LOADED":
        return {
          ...state,
          jiras: action.jiras,
        };
      default:
        return state.jiras
  }
}

export default jiraListReducer;
