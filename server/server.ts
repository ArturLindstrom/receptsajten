import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';

import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';

const path = require("path");



const app = express()
app.use(cors())
app.use(json());
// const port = 4000
const port = process.env.PORT || 4000

// app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') 
})

app.use('/recipes', recipeRouter)
app.use('/category', categoryRouter)

connect('mongodb+srv://gasparo:mosvaredlima30@receptsajten.fvbxs.mongodb.net/receptsajten?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
    console.log (`Listening on port ${port}`)
    });
})