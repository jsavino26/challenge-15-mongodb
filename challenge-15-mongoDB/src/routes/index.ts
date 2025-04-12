import { Router } from 'express';
import userRoutes from './api/userRoutes';

const router = Router();

router.use('/users', userRoutes); // This maps /api/users to userRoutes
console.log('User routes registered');
console.log('Routes registered: /api/users');

export default router;