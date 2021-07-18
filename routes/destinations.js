import { Router } from 'express'
const router = Router()
import * as destinationsCtrl from '../controllers/destinations.js'


router.get('/new', destinationsCtrl.new)
router.post('/', destinationsCtrl.create);

export {
  router
}