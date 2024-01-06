import { server } from '../stores';
import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );
      console.log(data.courses);
      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };


export const getCourseLectures = (id) => async dispatch => {
  try {
    dispatch({ type: "getCourseLecturesRequest" });
    const { data } = await axios.get(`${server}/course/${id}`,
      { withCredentials: true, });
        dispatch({ type: 'getCourseLecturesSuccess', payload: data.lectures });
    console.log(data)
  } catch (error) {
    console.log(error);
    dispatch({type:"getCourseLecturesFail", payload:error.response.data.message})
  }
}
