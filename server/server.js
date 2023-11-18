import express, {request} from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

const MOVIES = [
    {
        title: "noe",
        plot: "noe2",
        year: 199
    },
    {
        title: "noe1",
        plot: "noe3",
        year: 1222
    }
]
    app.use(bodyParser.json());

    app.get("/api/movies", (req,res) =>{
            res.json(MOVIES);
    });

    app.post("/api/movies", (req, res) => {
    const {title, year, plot} = req.body;
    MOVIES.push({title, year, plot});
    res.sendStatus(200);
    });

    app.use(express.static(path.resolve("..", "client", "dist")));

    app.use((req, res) => {
        res.sendFile(path.resolve("..","client", "dist", "index.html"))
    });

const server = app.listen(process.env.PORT||3000,()=> {
    console.log("listening on http://localhost:" + server.address().port);
})