import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchControle';




const router = Router();
//pages
router.get('/',PageController.home);
router.get('/dogs',PageController.dogs);
router.get('/cats',PageController.cats);
router.get('/fishes',PageController.fishes);

//search
router.get('./search',SearchController.search);





export default router;