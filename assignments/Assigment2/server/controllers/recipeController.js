import Recipe from "../models/recipe.js";

//fetch all recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find({});
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error });
    }
};

const addRecipe = async (req, res) => {
    try {
        const { name, description, difficulty, ingredients, steps } = req.body;
        const newRecipe = new Recipe({
            name,
            description,
            difficulty,
            ingredients,
            steps,
        });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: "Error adding recipe", error });
    }   
};

const findRecipe = async (req, res) => {
    try {    
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (error) {
    res.status(500).json({ message: "Error fetching recipe", error });   
    }    
}

const editRecipe = async (req, res) => {
    try {
        const { name, description, difficulty, ingredients, steps } = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            {name, description, difficulty, ingredients, steps},
            {new: true}
        );
        if(!updatedRecipe)
            return res.status(404).json({message:"Recipe not found"});
    } catch (error) {
        res.status(400).json({ message: "Error updating recipe", error });
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if(!recipe){
            return res.status(404).json({message: "recipe not found"});
        }
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({message:"recipe Deleted"});

    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe", error });
    }
};

export default {
    getAllRecipes,
    addRecipe,
    findRecipe,
    editRecipe,
    deleteRecipe,
}