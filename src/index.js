import express from 'express'
import investimentoRoutes from './routes/investimento.Routes.js';


const app = express();
const port = '3000'; 

app.use(express.json());

app.use('/investimentos', investimentoRoutes);


app.listen(port, () => {
    console.log(`Nossa Api está rodando na porta ${port}`) 

})
