const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const postControllers = require("./controllers/postControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

const authMiddlewares = require("./services/auth");

/* Routes pour les posts */
router.get("/posts", postControllers.browse);
router.get("/posts/:id", postControllers.read);

router.post("/posts", postControllers.add);

router.put("/posts/:id", postControllers.update);
router.delete("/posts/:id", postControllers.destroy);

/* Routes pour les users */
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);

router.post("/users", authMiddlewares.hashPassword, userControllers.add);

router.put("/users/:id", userControllers.update);
router.delete("/users/:id", userControllers.destroy);

/* Routes pour me log */
router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
