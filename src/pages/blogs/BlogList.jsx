// src/components/Blogs/BlogList.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const { blogs } = useSelector((state) => state.blogs)
    const { isLogedin } = useSelector((state) => state.auth)

    return (
        <div className="container mx-auto px-4 py-8" style={{ paddingTop: '100px' }}>
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blogs</h1>
        {isLogedin && (
            <Link
                to="/blogs/create"
                className="bg-blue-500 text-green px-4 py-2 rounded hover:bg-blue-600"
            >
                Create New Blog
            </Link>
        )}
    </div>
    {blogs.length === 0 ? (
        <div className="text-center text-gray-500">No blogs available.</div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    {blog.image && (
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-700 mb-4">
                            {blog.content.length > 100
                                ? `${blog.content.substring(0, 100)}...`
                                : blog.content}
                        </p>
                        <Link
                            to={`/blogs/${blog.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )}
</div>

    )
}

export default BlogList
