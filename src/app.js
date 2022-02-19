const fs = require("fs");
const path = require("path");
const { writeJSON, accounts, users } = require("./data");
const accountRoutes = require("./routes/accounts.js");
const servicesRoutes = require("./routes/services.js");

const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index", { title: "Account Summary", accounts: accounts });
});

app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);

app.get("/profile", (req, res) => {
	res.render("profile", { user: users[0] });
});

app.listen(port, () => {
	console.log(`PS Project Running on port ${port}`);
});
