var express = require("express");
var logger = require("morgan");
const knex = require("./db/db");
var personRouter = require("./routes/person");
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env'
})
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/person", personRouter);

app.get("/todos", (req, res) => {
  knex
    .select()
    .from("todos")
    .then((todos) => {
      res.json(todos);
    });
});

app.get("/users", async (req, res) => {
  const result = await knex.select().from("users");
  res.status(201).json(result);
});

app.post("/users", async (req, res) => {
  await knex("users").insert(req.body);
  const result = await knex.select().from("users");
  res.status(201).json(result);
});

app.post("/todos", async (req, res) => {
  await knex("todos").insert(req.body);
  const result = await knex.select().from("todos");
  res.status(201).json(result);
});

//inner join
app.get("/todos-of-users", async (req, res) => {
  const result = await knex
    .from("todos")
    .innerJoin("users", "todos.user_id", "users.id");
  res.status(200).json({ result });
});

app.get("/todos-of-user/:id", async (req, res) => {
  const result = await knex
    .from("todos")
    .innerJoin("users", "todos.user_id", "users.id")
    .where("user_id", req.params.id);
  res.status(200).json({ result });
});

app.use(function (err, req, res, next) {
  console.log("errr is", err);
  res.status(400).json({ err });
});

app.listen(8000, () => console.log("server listening at 8080"));

module.exports = app;
