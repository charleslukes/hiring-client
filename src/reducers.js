import { combineReducers } from 'redux';
import user from './components/authentication/user.reducer';
import authentication from './components/authentication/authentication.reducer';
import decadevs from './components/dashboard/decadevs.reducer';
import interviewDetails from './components/dashboard/scheduleInterview.reducer';

import shortlisted from './components/selected/selected.reducer';
import inactiveHirer from './components/activateHirer/activateHirer.reducer';
import interviews from './components/interviewActivities/interviews.reducer';

export default combineReducers({
  user,
  decadevs,
  shortlisted,
  authentication,
  interviewDetails,
  inactiveHirer,
  interviews
});
