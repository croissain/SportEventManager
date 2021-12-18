const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/ScheduleController');

// router.post('/generate', ScheduleController.scheduleGenerate);
router.get('/generate', ScheduleController.scheduleGenerate);
router.get('/', ScheduleController.showSchedule);

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const storage = require("../controllers/ScheduleController");

// function callMethod(method) {
//     return async (req, res) => {
//         let result;

//         try {
//             result = await method(req, res);
//         } catch (e) {
//             result = {
//                 action: "error",
//                 message: e.message
//             }
//         }

//         res.send(result);
//     }
// };

// router.get('/', storage.getAll);
// router.post('/', storage.insert);
// router.put('/:id', storage.update);
// router.delete('/:id', storage.delete);

// module.exports = router;