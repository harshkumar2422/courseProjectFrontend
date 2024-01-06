import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer ({}, {
   
    getAllUserRequest: (state) => {
        state.loading= true;
    },
    getAllUserSuccess: (state,action) => {
        state.loading= false;
        state.users = action.payload;
    },
    getAllUserFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    updateUserRoleRequest: (state) => {
        state.loading= true;
    },
    updateUserRoleSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    updateUserRoleFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    deleteUserRequest: (state) => {
        state.loading= true;
    },
    deleteUserSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    deleteUserFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    createCourseRequest: (state) => {
        state.loading= true;
    },
    createCourseSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    createCourseFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    deleteCourseRequest: (state) => {
        state.loading= true;
    },
    deleteCourseSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    deleteCourseFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    addLectureCourseRequest: (state) => {
        state.loading= true;
    },
    addLectureCourseSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    addLectureCourseFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    deleteLectureCourseRequest: (state) => {
        state.loading= true;
    },
    deleteLectureCourseSuccess: (state,action) => {
        state.loading= false;
        state.message = action.payload;
    },
    deleteLectureCourseFail: (state,action) => {
        state.loading = true;
        state.message = action.payload;

    },
    clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },
})