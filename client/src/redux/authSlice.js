import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

//Register 

export const register = createAsyncThunk('/register', () => {
    try {
        console.log('Hello');
        
    } catch (error) {
        alert('Error: ', error);
    }
});

const authSlice = createSlice ({
    name: 'auth',
});

export default authSlice.reducer;
