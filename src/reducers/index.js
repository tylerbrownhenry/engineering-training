import dataLoadedReducer from './dataLoadedReducer';
import jiraListReducer from './jiraListReducer';

const rootReducer = {
  jiraListReducer: jiraListReducer,
  dataLoaded: dataLoadedReducer,
};

export default rootReducer
