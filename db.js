const {Client} = require("pg")

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


const connectDB = async() =>{
    client
    .connect()
    .then(()=>{
        console.log('a conexão funcionou');
    }).catch((err) =>{
        console.error('erro ao conectar ao db')
});
};
module.exports = connectDB