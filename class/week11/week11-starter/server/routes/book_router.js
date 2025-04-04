import express from 'express';
import bookController from '../controllers/book_controller.js';
const router = express.Router();

// Fetch all books for the logged-in user
router.get("/", bookController.getUserBooks);

// Fetch all books
router.get("/all", bookController.getAllBooks);

// Add a new book
router.post("/add", bookController.addBook);

// Fetch detailed book information
router.get("/details/:id", bookController.getBookDetails);

// Edit an existing book
router.put("/edit/:id", bookController.editBook);

// Delete a book
router.delete("/delete/:id", bookController.deleteBook);

export default router;
