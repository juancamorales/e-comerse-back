const { User } = require("../../db");

module.exports = deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const use = await User.destroy({ where: { id: id } });
      if (use === 0) {
        return res.status(400).send({ message: "User not found" });
      }
      return res.status(200).send({ message: "Successfully removed" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
