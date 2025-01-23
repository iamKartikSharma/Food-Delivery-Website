import blogModel from '../models/blogModel.js';
import fs from 'fs';

// Add blog
const addBlog = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const blog = new blogModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await blog.save();
        res.json({ success: true, message: 'Blog Added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// List all blogs
const listBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.json({ success: true, data: blogs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// Remove blog
const removeBlog = async (req, res) => {
    try {
        let { id } = req.params;
        const blog = await blogModel.findById(id);

        // Remove image file from uploads folder
        fs.unlink(`uploads/${blog.image}`, () => {});

        const response = await blogModel.findByIdAndDelete(id);
        if (!response) {
            return res.json({ success: false, message: 'Blog not removed' });
        }

        res.json({ success: true, message: 'Blog Removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export { addBlog, listBlogs, removeBlog };
