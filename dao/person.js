const db = require("../db/db");

class PersonDAO {
  async createPerson(data) {
    const result = await db("person")
      .insert({
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
      })
      return result;
  }
  async getPersons() {
    const result = await db("person")
    .select().from('person');
    return result;
  }
  async getPerson(id) {
    return await db('person')
    .select().from('person').where({ id });
  }
  async updatePerson(id, body) {
    const result = await db('person')
    .where({ id })
    .update(body);
    return result;
  }
  async deletePerson(id) {
    await db('person')
    .where({ id })
    .delete();
  }
 }

module.exports = new PersonDAO();