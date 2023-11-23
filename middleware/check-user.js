const { User, Role } = require("../models");

exports.checkRole = async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findOne({
    attributes: ["id", "name"],
    include: [{ model: Role, as: "role", attributes: ["name"] }],
    where: { id: id },
  });

  switch (user.role.name) {
    case "User":
      req.type = {
        role: "User",
      };
      break;
    case "Admin":
      req.type = {
        role: "Admin",
      };
      break;
  }
  next();
};
