import cors from 'cors'
import app from './app'

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(process.env.PORT || 3333, () => {
    console.log("Server running - Port: ", process.env.PORT || 3333)
})