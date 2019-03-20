const Router = require("express").Router;
const clientsRouter = Router();
const {
  TYPES
} = require("../../../client/src/components/clients/question_types");
const { isLoggedIn } = require("../helpers");


/**
 *
 * Sends list of registration questions
 * that will populate the form on the
 * client.
 *
 */
clientsRouter.get("/new", isLoggedIn, (req, res, next) => {
  res.json({ questions: QUESTIONS_LIST });
  res.end();
});

module.exports = clientsRouter;
