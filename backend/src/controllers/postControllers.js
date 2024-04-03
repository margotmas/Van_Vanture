const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const posts = await tables.post.readAll();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await tables.post.read(id);
    res.json(post);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const postInfos = {
    content: req.body.content,
    userId: req.body.user_id,
  };

  try {
    const result = await tables.post.create(postInfos);
    console.info(result);
    res.status(200).json({
      msg: "post enregistré avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
