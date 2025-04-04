import express from "express";
import recipeController from "../controllers/recipeController.js";
const router = express.Router();

router.get("/recipe", recipeController.getAllRecipes);

router.post("/recipe", recipeController.addRecipe)

router.get("/recipe/:id", recipeController.findRecipe);

router.put("/recipe:id", recipeController.editRecipe);

router.delete("/recipe/:id", recipeController.deleteRecipe)

export default router;