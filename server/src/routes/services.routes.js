const { Router } = require('express');
const {
    getAllServices, 
    getService, 
    createService, 
    deleteService, 
    updateService
} = require('../controllers/services.controllers');

const router = Router();

router.get('/servicesAllGet', getAllServices);

router.get('/serviceGet/:id', getService);

router.post('/servicePost', createService);

router.delete('/serviceDelete/:id', deleteService);

router.put('/serviceUpdate/:id', updateService);


module.exports = router;