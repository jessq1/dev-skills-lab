import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

router.get('/', skillsCtrl.index)
router.get('/new',skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.put('/:id', skillsCtrl.update)
router.post('/',skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit',skillsCtrl.edit)
router.put("/:id",skillsCtrl.update)

export {
  router
}
