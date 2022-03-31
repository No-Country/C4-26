const { Router } = require('express');
const {
    getAllServices, 
    getService, 
    createService, 
    deleteService, 
    updateService
} = require('../controllers/services.controllers');

const router = Router();

router.get('/tasks', getAllServices);

router.get('/tasks/:id', getService);

router.post('/tasks', createService);

router.delete('/tasks/:id', deleteService);

router.put('/tasks/:id', updateService);


module.exports = router;