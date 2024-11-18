// // src/components/Blogs/BlogForm.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     addBlog,
//     updateBlog,
//     fetchBlogById,
//     clearCurrentBlog,
// } from '../../reduxStore/blogSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// // import { PhotoIcon } from '@heroicons/react/24/solid'; // Ensure you have Heroicons installed
// import { Container, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

// const BlogForm = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { blogId } = useParams();
//     const { currentBlog, status, error } = useSelector((state) => state.blogs);
//     const { user } = useSelector((state) => state.auth);

//     const [formData, setFormData] = useState({
//         content: '',
//         image: [],
//     });

//     const [previews, setPreviews] = useState([]);

//     // Fetch blog details if editing
//     useEffect(() => {
//         if (blogId) {
//             dispatch(fetchBlogById(blogId));
//         }
//         return () => {
//             dispatch(clearCurrentBlog());
//         };
//     }, [blogId, dispatch]);

//     // Populate form when blog data is fetched
//     useEffect(() => {
//         if (currentBlog && blogId) {
//             setFormData({
//                 content: currentBlog.content,
//                 image: null, // Reset image; user can upload a new one if editing
//             });
//             setPreviews(currentBlog.image || null); // Assuming currentBlog.image is a URL
//         }
//     }, [currentBlog, blogId]);

//     // Cleanup preview URL to prevent memory leaks
//     useEffect(() => {
//         return () => {
//             if (previews) {
//                 URL.revokeObjectURL(previews);
//             }
//         };
//     }, [previews]);

//     const { content, image } = formData;

//     // Handle text input changes
//     const onChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // Handle image file selection
//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         if (files) {
//             // Validate file type and size
//             const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
//             const maxSize = 10 * 1024 * 1024; // 10MB

//             if (!validTypes.includes(files.type)) {
//                 alert('Please upload an image (jpg, png, gif)');
//                 return;
//             }

//             if (files.size > maxSize) {
//                 alert('Image size should be less than 10MB');
//                 return;
//             }

//             setFormData((prev) => ({
//                 ...prev,
//                 image: files,
//             }));
//             const imagePreviews = files.map((file) => URL.createObjectURL(file));
//             setPreviews(imagePreviews);
//         }
//     };

//     // Handle form submission
//     const onSubmit = (e) => {
//         e.preventDefault();
      
//         // Create FormData to handle file uploads
//         const blogData = new FormData();
//         blogData.append('content', content);
//         formData.image.forEach((images, index) => {
//           blogData.append(`images_${index}`, images); // Append each image separately
//         });
//         blogData.append('author', user.name);
//         blogData.append('authorEmail', user.email);
      
//         if (blogId) {
//           dispatch(updateBlog({ id: blogId, data: blogData }));
//           navigate(`/blogs/${blogId}`);
//         } else {
//           dispatch(addBlog(blogData));
//           navigate('/blogs');
//         }
//       };
      


//     return (
//         <Container className="d-flex justify-content-center align-items-center min-vh-100">
//             <Card className="w-100" style={{ maxWidth: '600px' }}>
//                 <Card.Header className="bg-primary text-center text-white">
//                     <h3 className="my-2">{blogId ? 'Edit Blog' : 'Create Blog'}</h3>
//                 </Card.Header>
//                 <Card.Body>
//                     <Form onSubmit={onSubmit}>
//                         {/* Content Field */}
//                         <Form.Group controlId="formBlogContent" className="mb-4">
//                             <Form.Label className="fw-bold">Content</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 name="content"
//                                 placeholder="Write your blog content here..."
//                                 rows={6}
//                                 onChange={onChange}
//                                 value={content}
//                                 required
//                                 className="shadow-sm"
//                             />
//                         </Form.Group>

//                         {/* Image Upload Field */}
//                         <Form.Group controlId="formImageUpload">
//                             <Form.Label>Upload Images</Form.Label>
//                             <div className="d-flex align-items-center flex-wrap">
//                                 <Form.Control
//                                     type="file"
//                                     accept="image/*"
//                                     multiple
//                                     onChange={handleImageChange}
//                                     className="input-field me-3"
//                                 />

//                                 {/* Display multiple image previews */}
//                                 {previews.length > 0 && previews.map((preview, index) => (
//                                     <img
//                                         key={index}
//                                         src={preview}
//                                         alt={`Preview ${index}`}
//                                         className="w-24 h-24 object-cover rounded me-3 mb-2"
//                                         style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'cover' }}
//                                     />
//                                 ))}
//                             </div>
//                         </Form.Group>


//                         {/* Submit Button */}
//                         <Button
//                             variant="primary"
//                             type="submit"
//                             className="w-100"
//                             disabled={status === 'loading'}
//                         >
//                             {status === 'loading' ? (
//                                 <>
//                                     <Spinner
//                                         as="span"
//                                         animation="border"
//                                         size="sm"
//                                         role="status"
//                                         aria-hidden="true"
//                                     />{' '}
//                                     Submitting...
//                                 </>
//                             ) : blogId ? (
//                                 'Update Blog'
//                             ) : (
//                                 'Create Blog'
//                             )}
//                         </Button>

//                         {/* Display Error Message */}
//                         {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default BlogForm;
