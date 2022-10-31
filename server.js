const express = require('express');

const app = express()

app.use( express.json() )

const PORT = 4040

app.listen( PORT, () => {
    console.log(`Server runing for PORT: ${PORT}`);
} )