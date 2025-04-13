import { Router } from 'express';
import userRoutes from './api/userRoutes';
import thoughtRoutes from './api/thoughtRoutes';

const router = Router();

router.use('/users', userRoutes); // This maps /api/users to userRoutes
router.use('/thoughts', thoughtRoutes);

console.log('User routes registered');
console.log('Thought routes registered');

export default router;