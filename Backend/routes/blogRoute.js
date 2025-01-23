import express from 'express';
import multer from 'multer';
import { addBlog, listBlogs, removeBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// API Endpoints for Blogs
blogRouter.post('/addblog', upload.single('image'), addBlog);
blogRouter.get('/listblogs', listBlogs);
blogRouter.delete('/remove/:id', removeBlog);

export default blogRouter;
