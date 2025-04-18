// routes/userRouter.js
import express from 'express';
import postController from '../controllers/post_controller.js'; // Import the postController
import auth from "../middlewares/auth.js";
const router = express.Router();

// Create route
router.post('/create',auth.verifyToken, postController.createPost);

// Delete route
router.delete('/delete/:id',auth.verifyToken, postController.deletePost);

// Edit route
router.post('/edit',auth.verifyToken, postController.editPost);

// Trending route
router.get('/trending', postController.getTrending)

// Popular route
router.get('/popular', postController.getPopular)

// Like route
router.put('/like/:id', postController.likePost)

// Dislike route
router.put('/dislike/:id', postController.dislikePost)

export default router;
