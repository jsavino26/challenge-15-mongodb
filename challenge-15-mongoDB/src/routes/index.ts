import { Router } from 'express';
import userRoutes from './api/userRoutes';

const router = Router();

router.use('/users', userRoutes);
// Add thoughtRoutes

export default router;