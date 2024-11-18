// src/redux/blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for your API
const API_URL = 'http://localhost:5000/api/blog';

// Async thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk to fetch a single blog by ID
// export const fetchBlogById = createAsyncThunk(
//   'blogs/fetchBlogById',
//   async (blogId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/blogs/${blogId}`);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// Async thunk to create a new blog
// export const createBlog = createAsyncThunk(
//   'blogs/createBlog',
//   async (blogData, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const response = await axios.post(`${API_URL}/blogs`, blogData, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// // Async thunk to update a blog
// export const updateBlog = createAsyncThunk(
//   'blogs/updateBlog',
//   async ({ blogId, updatedData }, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const response = await axios.put(`${API_URL}/blogs/${blogId}`, updatedData, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// // Async thunk to delete a blog
// export const deleteBlog = createAsyncThunk(
//   'blogs/deleteBlog',
//   async (blogId, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       await axios.delete(`${API_URL}/blogs/${blogId}`, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`,
//         },
//       });
//       return blogId;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    currentBlog: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    // clearCurrentBlog(state) {
    //   state.currentBlog = null;
//  }
  },
  extraReducers: (builder) => {
    // Fetch all blogs
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
        console.log(state.blogs);
        
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message || action.error.message;
      });

    // // Fetch blog by ID
    // builder
    //   .addCase(fetchBlogById.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(fetchBlogById.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.currentBlog = action.payload;
    //   })
    //   .addCase(fetchBlogById.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload.message || action.error.message;
    //   });

    // Create blog
    // builder
    //   .addCase(createBlog.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(createBlog.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.blogs.push(action.payload);
    //   })
    //   .addCase(createBlog.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload.message || action.error.message;
    //   });

    // // Update blog
    // builder
    //   .addCase(updateBlog.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(updateBlog.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
    //     if (index !== -1) {
    //       state.blogs[index] = action.payload;
    //     }
    //     state.currentBlog = action.payload;
    //   })
    //   .addCase(updateBlog.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload.message || action.error.message;
    //   });

    // // Delete blog
    // builder
    //   .addCase(deleteBlog.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(deleteBlog.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    //   })
    //   .addCase(deleteBlog.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload.message || action.error.message;
    //   });
  },
});

// export const { clearCurrentBlog } = blogSlice.actions;

export default blogSlice.reducer;

