const employee = require("../models/Employee");

exports.updateEmployee = async (req, res) => {
  try {
    const id = req.params.employeeId;
    const employe = await employee.findOneAndUpdate(
      { employeeId: id },
      { firstName, lastName, email, dateOfBirth, department, position }
    );
    res.status(200).json({
      success: true,
      data: employe,
      message: "data updated",
    });
  } catch (err) {
    console.error(err);
    // console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
