const employee = require("../models/Employee");

exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params;
    const employe = await employee.findOneAndDelete({ employeeId: id });

    if (!employe) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
