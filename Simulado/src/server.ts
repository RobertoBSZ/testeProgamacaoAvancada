import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import pacienteRouter from './routes/pacienteRouters';
import secretariaRouter from './routes/secretariaRouters';
import consultaRouter from './routes/consultaRoutes';
import agendaRouter from './routes/agendaRoutes';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/paciente', pacienteRouter);
app.use('/api/secretaria', secretariaRouter);
app.use('/api/consulta', consultaRouter);
app.use('/api/agenda', agendaRouter);

app.get('/', (req, res) => {
  res.send('Seu servidor está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
