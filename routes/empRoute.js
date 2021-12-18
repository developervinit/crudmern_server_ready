const express = require("express");
const empController = require("../controllers/empController.js")



const router = express.Router();

router.route("/allemp").get(empController.getEmp);
router.route("/newemp").post(empController.addEmp);
router.route("/edit/:id").get(empController.getEmpById);
router.route("/edit/:id").put(empController.updateEmpData);
router.route("/:id").delete(empController.deleteEmp);
router.route("/:departmant").get(empController.getEmpByDepartment);


module.exports = router;