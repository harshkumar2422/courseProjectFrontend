import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './reducers/courseReducer';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducer';
import { adminReducer } from './reducers/adminReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = 'https://course-project-rfes.onrender.com/api/v1'             //https://course-project-rfes.onrender.com
