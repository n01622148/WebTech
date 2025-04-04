import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // firstName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trin: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  // { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;



//lab code recipe
// import mongoose from "mongoose";

// const recipeSchema = new mongoose.Schema(
//    {
//        
//    }
// );

// const Recipe = mongoose.model("recipe", recipeSchema);

// export default Recipe;
