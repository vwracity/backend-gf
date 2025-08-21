import 'dotenv/config'
import express from 'express'
import investimentoRoutes from './routes/investimento.Routes.js'
import cors from 'cors'


const app = express();
const port = 3000; 

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5174' 
}));

app.use('/investimentos', investimentoRoutes);


app.listen(port, '0.0.0.0', () => {
    console.log(`Nossa Api está rodando na porta ${port}`) 

})
