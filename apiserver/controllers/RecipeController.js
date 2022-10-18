const Recipe = require("../models/Recipe")


const createRecipe = async (req,res) => {
    const newRecipe = new Recipe(req.body);

    try {
      const savedRecipe = await newRecipe.save();
      res.status(200).json(savedRecipe);
    } catch (err) {
      res.status(500).json(err);
    }
}

const deleteRecipe = async (req,res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id)
        res.status(200).json("Recipe has been deleted.")
      } catch (err) {
        res.status(500).json(err)
      }
}

const updateRecipe = async () => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedRecipe);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getRecipe = async (req,res) => {
    try {
        const Recipe = await Recipe.findById(req.params.id)
        res.status(200).json(Recipe)
      } catch (err) {
        res.status(500).json(err)
      }
}

const getAllRecipe = async (req,res) => {
    try {
        const Recipes = await Recipe.find().limit(100)
        res.status(200).json(Recipes)
      } catch (err) {
        res.status(500).json(err)
      }
}

module.exports = {
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getRecipe,
    getAllRecipe
}