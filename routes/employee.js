const express = require("express");

const router = express.Router();

const { createEmployee } = require("../controllers/createEmployee");
const { deleteEmployee } = require("../controllers/deleteEmployee");
const { getEmployee } = require("../controllers/getEmployee");
const { updateEmployee } = require("../controllers/updateEmployee");

router.post("/createtodo", createEmployee);
router.get("/employees/:employeeId", getEmployee);
router.put("/employees/:employeeId", updateEmployee);
router.delete("/employees/:employeeId", deleteEmployee);

module.exports = router;
