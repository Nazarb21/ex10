import express from 'express';
import { teamController } from './controllers/team.controller';
import { playerController } from './controllers/player.controller';
import { awardController } from './controllers/award.controller';

const app = express();

app.use(express.json());

app.use('/api', teamController);
app.use('/api', playerController);
app.use('/api', awardController);

export default app;
