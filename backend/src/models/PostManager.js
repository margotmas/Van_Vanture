const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
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

  async create(post) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (content, user_id) VALUES (?, ?)`,
      [post.content, post.userId]
    );
    return rows;
  }

  async update(post) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET content=? WHERE id=?`,
      [post.content, post.id]
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

module.exports = PostManager;
