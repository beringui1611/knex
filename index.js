const database = require('./database')


//INSERT para inserir dados no knex js
/*const dados = {
    nome: "minecraft",
    preco: 60.76
}

 database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

*/

/*SELECT busco oque eu quero
database.select(["nome","preco"]).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* NESTED QUERIES implementa e mostra todos os dados que voce pedir 
database.insert({ nome: "UFC 5", preco: 300.70 }).into("games").then(data => {
database.select(["nome","preco"]).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
}).catch(err => {
console.log(err)
})
*/

/*
 database.select()
     .whereRaw(" preco < 100")
     .table("games").then(data => {
        console.log(data)
     }).catch(err => {
        console.log(err)
    })

*/

/* queries cruas
database.raw("SELECT * FROM games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* DELETE
database.where({ id: 1 }).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* UPDATE
database.where({ id: 2 }).update({ preco: 10.90 }).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/


/* ORDER BY
database.select().table("games").orderBy("preco", "desc").then(data => {
    console.log(data)
}).catch(err => {
console.log(err)
})//desc //asc
*/


/* ASSOCIATED INSERTS 1 P 1
database.insert({
    nome: "epic games",
    game_id:2
}).table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/


/*JOIN 1 p 1
database.select(["games.*","estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* JOIN COM WHERE
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 2).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/



/* RELACIONAMENTO 1 P M
database.select(["games.*","estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    const estudiosGame = data
    const game = {
        id:0,
        nome: "",
        estudios:[]
    }

    game.id = data[0].id
    game.nome = data[0].nome

    data.forEach(estudio => {
       game.estudios.push({nome: estudio.estudio_nome})
    })
    console.log(game)
    
}).catch(err => {
    console.log(err)
})
*/




/* INSERT M P M
const rel = {
    game_id: 2,
    estudio_id:1
}

database.insert(rel).into("games_estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* JOIN M P M
database.select([
    "estudios.nome as estudios_nome",
    "games.nome as games_nome",
    "games.preco"
])
    .table("games_estudios")
    .innerJoin("games", "games.id", "games_estudios.game_id")
    .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
    .where("games.id", 5).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

 async function testeTransaction() {
 
      try {
          await database.transaction(async trans => {
              await database.insert({ nome: "Blizard" }).table("estudios")
              await database.insert({nome: "Unreal"}).table("estudios")
          })
      } catch (err) {
          console.log(err)
        }

}

testeTransaction()