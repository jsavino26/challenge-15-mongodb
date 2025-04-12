import { Router } from 'express';
import { getThoughts } from '../../controllers/thoughtController';

const router = Router();

router.route('/').get(getThoughts);
// Add other routes (POST, PUT, DELETE)

export default router;