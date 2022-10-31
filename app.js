const express = require('express')

const app = express()

app.use(express.json())

app.get('/home', ( req,res ) => {
    res.status(200).json({ message : 'Vamos bien amazon' })
})

const PORT = process.env.PORT || 4040

app.listen( PORT, () => {
    console.log(`Escuchando por el puerto: ${PORT}`);
    
} )