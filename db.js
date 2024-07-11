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

const setup = async(req,res)=>{
    try{
        const data = await client.query('CREATE TABLE usuarios (nome VARCHAR (100), email VARCHAR(50), id SERIAL PRIMARY KEY, senha VARCHAR(20))')
        res.status(200).json({msg: 'A TABELA FOI CRIADA'})
    }catch(err){
      console.log('ok')
      res.status(500)
    }
}


module.exports = {connectDB,setup,client}