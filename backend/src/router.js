const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const postControllers = require("./controllers/postControllers");

router.get("/posts", postControllers.browse);
router.get("/posts/:id/", postControllers.read);
router.post("/posts", postControllers.add);

/* ************************************************************************* */

module.exports = router;
