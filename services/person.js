const personDAO = require("../dao/person");

class PersonService {
  getPersons() {
    return personDAO.getPersons();
  }
  getPerson(id) {
    return personDAO.getPerson(id);
  }
   createPerson(userInput) {
    return personDAO.createPerson(userInput);
  }
  updatePerson(id, userInput) {
    return personDAO.updatePerson(id, userInput);
  }
  deletePerson(id) {
    return personDAO.deletePerson(id);
  }
}

module.exports = new PersonService();
