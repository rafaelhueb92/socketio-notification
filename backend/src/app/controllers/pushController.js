class pushController {
  async push(req, res) {
    const { body } = req;
    req.io.emit("notification", body);
    return res.json(body);
  }
}

module.exports = new pushController();
