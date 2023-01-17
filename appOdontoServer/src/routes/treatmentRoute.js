const express = require('express')
const router = express.Router()
const treatmentController = require('../controllers/treatmentController')

//api/users
router.post('/', treatmentController.createTreatment)
router.get('/', treatmentController.getTreatments)
router.put('/:id', treatmentController.updateTreatment)
router.get('/:id',treatmentController.getTreatment)
router.delete('/:id', treatmentController.deleteTreatment)

module.exports = router