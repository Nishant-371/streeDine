const employee = require("../models/Employee");

exports.getEmployee = async (req, res) => {
  try {
    const id = req.params.employeeId;
    const employe = await employee.findById({ employeeId: id });

    if (!employe) {
      return res.status(404).json({
        success: false,
        message: "employee not found",
      });
    }

    res.status(200).json({
      success: true,
      data: employee,
      message: `employee ${employe} found `,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
