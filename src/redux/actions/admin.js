import { server } from '../stores';
import axios from 'axios';

export const createCourse = formData => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });
    const { data } = await axios.post(`${server}/createcourse`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'createCourseSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });
    const { data } = await axios.delete(`${server}/course/${id}`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'deleteCourseSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, formdata) => async dispatch => {
  try {
    dispatch({ type: 'addLectureCourseRequest' });
    const { data } = await axios.post(`${server}/course/${id}`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'addLectureCourseSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'addLectureCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteLecture = (courseId, lecturesId) => async dispatch => {
  try {
    dispatch({ type: 'deleteLectureCourseRequest' });
    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lecturesId=${lecturesId}`,
      {
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: 'deleteLectureCourseSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'deleteLectureCourseFail',
      payload: error.response.data.message,
    });
  }
};
export const getAllUsers = () => async dispatch => {
  try {
    dispatch({ type: 'getAllUserRequest' });
    const { data } = await axios.get(`${server}/admin/Users`, {
      withCredentials: true,
    });
    dispatch({ type: 'getAllUserSuccess', payload: data.users });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'getAllUserFail',
      payload: error.response.data.message,
    });
  }
};
export const upadteUserRole = (id) => async dispatch => {
  try {
    dispatch({ type: 'updateUserRoleRequest' });
    const { data } = await axios.put(`${server}/admin/User/${id}`,{}, {
      withCredentials: true,
    });
    dispatch({ type: 'updateUserRoleSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'updateUserRoleFail',
      payload: error.response.data.message,
    });
  }
};
export const deleteUSer = (id) => async dispatch => {
  try {
    dispatch({ type: 'deleteUserRequest' });
    const { data } = await axios.delete(`${server}/admin/User/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'deleteUserSuccess', payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'deleteUserFail',
      payload: error.response.data.message,
    });
  }
};
