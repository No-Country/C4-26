const { rows } = require('pg/lib/defaults');
const pool = require('../database/db');

const getAllServices = async (req, res, next) => {
    try {
        const allServices = await pool.query('SELECT * FROM service')
        res.json(allServices.rows);

    } catch (error) {
        next(error)
    }

}

const getService = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query('SELECT * FROM service WHERE id = $1', [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Service not found'
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createService = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query('INSERT INTO service (title, description) VALUES ($1, $2) RETURNING *', [
            title,
            description,
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const deleteService = async (req, res, next) => {
    try {
        const { id } = req.params
        /* Utiliza RETURNING * si queremos ver la tarea que eliminamos pero no es necesario
        Si el rowcount es 0 quiere decir que no encontro nada */
        const result = await pool.query('DELETE FROM service WHERE id = $1', [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: 'Service not found',
            });

        return res.sendStatus(204); // No devuelve ningun mensaje
    } catch (error) {
        next(error)
    }
};

const updateService = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const result = await pool.query(
            'UPDATE service SET title = $1, description = $2 WHERE id = $3 RETURNING *', [
            title, description, id
        ]);

        console.log(result);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Service not found',
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllServices,
    getService,
    createService,
    deleteService,
    updateService,
}      