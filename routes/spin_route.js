const express = require("express");
const router = express.Router();
const spinController = require("../controllers/spin_controller");

router.get("/", spinController.getStart);
router.get('/name/all', spinController.getAllName);
router.get('/prize/list', spinController.getPrizelist);
router.get('/prize/:id', spinController.getPrizeById);
router.post('/upload/list', spinController.uploadList, spinController.processUpload);
router.put('/prize/remove/:id', spinController.removePrize);
router.post('/name/remove', spinController.removeName);
router.get('/winners', spinController.getWinners)


module.exports = router;