import express from "express";
import globalRouter from "./routers/globalRouter.js";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const app = express();

const handleListening = () =>console.log(`Listening!`)

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

// Codesanbox does not need PORT :)
app.listen(4000 , handleListening);
