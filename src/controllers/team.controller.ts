import { Router } from 'express';
import { FlureeService } from '../services/fluree.service';
import { Team } from '../models/team.model';

const router = Router();

router.post('/teams', async (req, res) => {
    const team: Team = req.body;
    const transaction = [{
        _id: 'team',
        ...team
    }];

    try {
        const result = await FlureeService.transact(transaction);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const teamController = router;
