import cors from 'cors'
import app from './app'

const allowOrigins = [
    '*'
]

const optionCors: cors.CorsOptions = {
    origin: allowOrigins
}

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(process.env.PORT || 3333, () => {
    console.log("App running...")
})