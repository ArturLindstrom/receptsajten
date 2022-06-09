import express, { Request, Response, json } from "express";
import { connect } from "mongoose";
import cors from "cors";

import recipeRouter from "./routes/recipe";
import categoryRouter from "./routes/category";

const path = require("path");
const app = express();
app.use(cors());
app.use(json());
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/recipes", recipeRouter);
app.use("/category", categoryRouter);

connect(
    "mongodb+srv://gasparo:TNpm718XJr80R2JL@receptsajten.fvbxs.mongodb.net/receptsajten?retryWrites=true&w=majority"
).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});
