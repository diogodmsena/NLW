//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto do banco para as operações
/* db.serialize(() => {
  //criar uma tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  //inserir dados na tabela
  const query = `
    INSERT INTO places (
      name,
      image, 
      address, 
      address2, 
      state, 
      city,       
      items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `
  const values = [
    "Paperside",
    "https://images.unsplash.com/photo-1568576645504-b972284ee53f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    "Rua do ..., Natal",
    "Lagoa Azul, Pajuçara",
    "RN",
    "Natal",
    "Resíduos Eletrônicos, Lâmpadas"
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  db.run(query, values, afterInsertData)

  //consultar dados na tabela
  db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log("aqui estão seus registros")
    console.log(rows)
  })

  //deletar dados 
  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Registro deletado com sucesso")
  })

}) */