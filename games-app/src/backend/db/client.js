const { Pool } = require("pg");
const fs = require('fs');
const path = require('path');
const pool = new Pool({ host, port, user, password, database });

class ClientDb {
  #client = null;

  constructor() {}

  getInstance(config) {
    if (!this.#client) {
      this.#client = new Pool({
        host: config.db_host,
        port: config.db_port,
        user: config.db_user,
        password: config.db_password
      });
      this.#initialize();
    }
    return this.#client;  
  }

  async #initialize() {
    dbClient = await this.#client.connect();
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), "utf8");
    await dbClient.query(sql);
  }

}

module.exports = new ClientDb();