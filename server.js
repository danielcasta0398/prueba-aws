const express = require('express');

const app = express()

app.use( express.json() )

app.get('/', ( req,res ) => { res.status(200).json({ message: "Excelente desde amazon" }) })

const PORT = 4040

app.listen( PORT, () => {
    console.log(`Server runing for PORT: ${PORT}`);
} )