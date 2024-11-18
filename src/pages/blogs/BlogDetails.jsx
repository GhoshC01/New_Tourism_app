import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../reduxStore/blogSlice';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blogs);
console.log(blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {Array.isArray (blogs)&& blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded shadow-md mb-6">
            {blog.image && (
              <img
                src={blog.images}
                // alt={blog.title}/
                className="w-full h-64 object-cover rounded mb-4"
              />
            )}
            {/* <h1 className="text-3xl font-bold mb-4">{blog.title}</h1> */}
            <p className="text-gray-700 mb-4">{blog.content}</p>
            {/* <p className="text-gray-500 mb-4">Author: {blog.author}</p> */}
            <Link
              to={`/blogs/${blog.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </Link>
          </div>
        ))
      ) : (
        <div className="text-center mt-10">No blogs found.</div>
      )}
    </div>
  );
};

export default BlogDetails;
