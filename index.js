// 1. IMPORTACIONES
const express 		= require("express")
const app	= express()

require("dotenv").config()


// 2. MIDDLEWARES
app.use(express.static('public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")


// 3. RUTAS
app.get("/", (req, res) => {
	res.render("index")
})

app.get("/biografia", (req, res) => {
	res.render("biografia")
})

app.get("/galeria", (req, res) => {
	res.render("galeria")
})

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})