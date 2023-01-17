const express = require('express')
const router = express.Router()
const memberController = require('../controllers/memberController')

//api/members
router.post('/', memberController.createMember)
router.get('/', memberController.getMembers)
router.put('/:id', memberController.updateMember)
router.get('/:id',memberController.getMember)
router.delete('/:id', memberController.deleteMember)

module.exports = router