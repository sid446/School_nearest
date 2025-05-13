
import { Router } from 'express';
import { addSchool, listSchools} from '../controllers/school.controller.js';

const router = Router()

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);
router.get('/test', (req, res) => {
  res.send('School routes are working!');
});
export default router;
