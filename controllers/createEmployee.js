const employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, position, department, dateOfBirth } =
      req.body;

    const response = await employee.create({
      firstName,
      lastName,
      email,
      position,
      department,
      dateOfBirth,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal error",
      message: err.message,
    });
  }
};
