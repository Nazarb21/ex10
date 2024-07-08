import { Router } from 'express';
import { FlureeService } from '../services/fluree.service';
import { Player } from '../models/player.model';

const router = Router();

router.post('/players', async (req, res) => {
    const players: Player[] = req.body;
    const transaction = players.map(player => ({
        _id: 'player',
        ...player
    }));

    try {
        const result = await FlureeService.transact(transaction);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/players/:name', async (req, res) => {
    const name = req.params.name;
    const query = {
        select: ['*', { player_awards: ['*'] }],
        from: 'player',
        where: [`=`, 'player/name', name]
    };

    try {
        const result = await FlureeService.query(query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const playerController = router;
