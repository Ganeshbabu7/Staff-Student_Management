import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import StaffReducer from './StaffReducer';

const rootReducer = combineReducers({
	student: UserReducer,
	staff: StaffReducer
})

export default rootReducer;