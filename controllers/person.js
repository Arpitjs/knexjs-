const personService = require('../services/person');

class PersonController {
    async getPersons(req, res, next) {
        try {
            const persons = await personService.getPersons();
            res.status(201).json(persons);
        } catch (e) {
            next(e);
        }
    }
    async getPerson(req, res, next) {
        try {
            const person = await personService.getPerson(req.params.id);
            if(!person.length) return res.status(400).json({ msg: 'No such person found in our db. '});
            res.status(201).json(person);
        } catch (e) {
            next(e);
        }
    }
    async createPerson(req, res, next) {
        try {
            const person = await personService.createPerson(req.body);
            res.status(201).json(person);
        } catch (e) {
            next(e);
        }
    }
    async updatePerson(req, res, next) {
        try {
            const person = await personService.updatePerson(req.params.id, req.body);
            res.status(200).json(person);
        } catch (e) {
            next(e);
        }
    }
    async deletePerson(req, res, next) {
        try {
            await personService.deletePerson(req.params.id);
            res.status(200).json({ msg: 'person deleted.' });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PersonController();