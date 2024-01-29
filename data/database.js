import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendCodex",
    })
    .then((c) => console.log(`Database Connected with `))
    .catch((e) => console.log(e));
};
