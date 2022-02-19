var express = require('express');
var router = express.Router();
const personController = require('../controllers/person')

router.route('/')
.get(personController.getPersons)
.post(personController.createPerson);

router.route('/:id')
.get(personController.getPerson)
.put(personController.updatePerson)
.delete(personController.deletePerson);

module.exports = router;
