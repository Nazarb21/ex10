import { Router } from 'express';
import { FlureeService } from '../services/fluree.service';
import { Award } from '../models/award.model';

const router = Router();

router.post('/awards', async (req, res) => {
    const awards: Award[] = req.body;
    const transaction = awards.map(award => ({
        _id: 'award',
        ...award
    }));

    try {
        const result = await FlureeService.transact(transaction);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const awardController = router;
