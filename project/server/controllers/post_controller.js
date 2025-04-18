// controllers/post_Controller.js
import bcrypt from "bcryptjs";
import Post from "../models/post.js";
import auth from "../middlewares/auth.js";

// Create post
// const createPost = async (req, res) => {
const createPost = async(req, res) => {
    // console.log(req.body)
    console.log(req.body)

    // res.status(201).json({message: "Post uploaded successfully"});
  
    try {
        const { userName, content} = req.body;
        console.log(req.user)
        const newPost = new Post({
          author: userName,
          authorID: req.user.userId,
          content,
          score:0,
        });
    
        await newPost.save();
        res.status(201).json({
          message: "Post uploaded successfully",
        });
      } catch (error) {
        console.error("Error during upload:", error);
        res.status(500).json({ message: "Error uploading post" });
      }
};

const deletePost = async(req, res) => {
  console.log(req.params)
  try {
    // Find the post by ID
    const post = await Post.findById(req.params.id);
    console.log("got here")
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    console.log("found post")

    // Check if the logged-in user is the one who created the book
    if (post.authorID.toString() !== req.user.userId.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this book" });
    }
    // If the user is authorized, delete the book
    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: "post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

const editPost = async(req, res) => {
    try {
        const {author, content, score } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { author, content, score },
          { new: true }
        );
        if (!updatedPost)
          return res.status(404).json({ message: "Post not found" });
        res.json(updatedPost);
      } catch (error) {
        res.status(500).json({ message: "Error updating post", error });
      }
};


const getTrending = async(req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.json(posts);
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
      }
};

const getPopular = async(req, res) => {
  try {
      const posts = await Post.find({}).sort({ score: -1 });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts", error });
    }
};

const likePost = async(req, res) => {
  try {
    const updatedPost = await Post.findById(req.params.id)  
    console.log(updatedPost.likeby)
    console.log("",req.body.userId)
    console.log(updatedPost.likeby.includes(req.body.userId))  
    if(!updatedPost.likeby.includes(req.body.userId)){
      const updatePost = await Post.findByIdAndUpdate(req.params.id,
        {'$push': {'likeby': req.body.userId}, '$inc': {score: 1}},
        {new: true}
      )    
      // console.log(updatePost)
      await updatePost.save()
      return res.status(200).json({ message: "Post liked" });
    } else {
      return res.status(400).json({ message: "Error while likeing post" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error liking post", error });
  }
};

const dislikePost = async(req, res) => {
  try {
    const updatedPost = await Post.findById(req.params.id)    
    console.log(updatedPost.likeby)
    console.log("",req.body.userId)
    console.log(updatedPost.likeby.includes(req.body.userId))
    if (updatedPost.likeby.includes(req.body.userId)){
      const updatePost = await Post.findByIdAndUpdate(req.params.id,
        {'$pull': {'likeby': req.body.userId}, '$inc': {score: -1}},
        {new: true}
      )    
      // console.log(updatePost)
      await updatePost.save()
      return res.status(200).json({ message: "Post liked" });
    } else {
      return res.status(400).json({ message: "Error while likeing post" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error liking post", error });
  }
};

export default {
    createPost,
    deletePost,
    editPost,
    getTrending,
    getPopular,
    likePost,
    dislikePost,
  };