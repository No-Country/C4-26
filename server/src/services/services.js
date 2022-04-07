const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const servicesRoutes = require('../routes/services.routes');

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(servicesRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});
