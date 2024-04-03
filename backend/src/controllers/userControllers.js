const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const result = await tables.user.readAll();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await tables.user.read(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  try {
    const result = await tables.user.create(userInfos);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const user = {
    password: req.body.password,
    id: req.params.id,
  };
  try {
    const result = await tables.user.update(user);
    console.info(result);
    if (result.affectedRows > 0) {
      res.json({ msg: "Mdp modifié avec succès" });
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.user.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "user introuvable" });
    } else {
      res.json({ msg: "user supprimé avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  update,
  destroy,
};
