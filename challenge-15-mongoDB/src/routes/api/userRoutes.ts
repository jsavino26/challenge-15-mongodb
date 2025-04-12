import { Router } from 'express';
import { getUsers } from '../../controllers/userController';

const router = Router();

router.route('/').get(getUsers);
// Add other routes (POST, PUT, DELETE)

export default router;