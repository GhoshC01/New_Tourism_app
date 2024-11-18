import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    isLogedin: false,
    loading: false,
    error: null
}

// register api using async thunk••••••••••••••••••••••

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/role/register', userData)

            console.log(userData);
            
            return response.data
        } catch (error) {
            return rejectWithValue(response.error.data)
        }
    }
)
// Normal user login with asyc thunk
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Asynchronous thunk for admin login
export const loginAdmin = createAsyncThunk(
    'auth/loginAdmin',
    async (adminData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/role/admin/login', adminData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.isLogedin = false
            return state
        }
    },
    // registration
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = true
                state.error = action.payload
            })

        // Handling login
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isLogedin = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isLogedin = false;
                state.error = action.payload;
            });

      // Handling admin login
        builder
        .addCase(loginAdmin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLogedin = true;
        })
        .addCase(loginAdmin.rejected, (state, action) => {
            state.loading = false;
            state.isLogedin = false;
            state.error = action.payload;
        });
    },


})

export const {logout } = authSlice.actions

export default authSlice.reducer
