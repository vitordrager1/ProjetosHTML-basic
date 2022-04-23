const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database();
        const pass = req.body.password;
        let roomId;
        let isRoom = true;

        while(isRoom){
            /* for que gera o id aleatorio*/
            for (var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }

                /*verificar se o id ja existe*/
            const roomsExistIds = await db.all(`SELECT id FROM rooms`);

            isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)//a func some retorna true a primeira condição que seja satisfeita sendo assim n verifica todas as salas
            
            
            /*inseri a sala no banco*/
            if(!isRoom){
                await db.run(`INSERT INTO rooms (id, pass)
                VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
       
        }

        await db.close();

        res.redirect(`/room/${roomId}`)
    }
}