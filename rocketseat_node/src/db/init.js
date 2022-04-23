const Database = require ('./config')

const initDb = {
    async init(){ //async é o conceito de nao esperar o comando terminar de processar para seguir em frente, com async ele apenas vai lançando os comandos sem esperar um retorno
        const db = await Database() // o await serve para forçar os comandos em js esperar um retorno do DB para assim seguir a frente.

        await db.exec(`CREATE TABLE rooms(
            id INTEGER PRIMARY KEY,
            pass TEXT 
        )`);//dentro do exec é onde vai o codigo sql para o db

        await db.exec(`
        CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();


