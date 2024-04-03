const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async create(user) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, password, firstname, lastname) VALUES (?, ?, ?, ?)`,
      [user.email, user.password, user.firstname, user.lastname]
    );
    return rows;
  }

  async update(user) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET password=? WHERE id=?`,
      [user.password, user.id]
    );
    return rows;
  }

  async destroy(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = UserManager;
