// models/post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"],
      unique: false,
    },
    author: {
        type: String,
    },
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    score: { 
      type: Number, default: 0 
    },
    likeby: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
    
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;