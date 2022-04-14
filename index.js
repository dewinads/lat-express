const express = require("express")

const app = express();
const port = 3030;

const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        username,
        email,
        password,
    });
    console.log(users);
    res.redirect("/register");
});

app.get("/tampilkan-user", (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});