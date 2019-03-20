const passport = require("../passport");

const Router = require('express').Router;
const providersRouter = Router();

const Provider = require('../models/Provider');

const handlePassportResponse = (req, res, next) => (err, user, info) => {
  if (err instanceof Error) {
    return next(err);
  }

  if (user) {
    return res.redirect('http://localhost:3000');
    // return res.json({
    //   message: "successfully logged in",
    //   token: user.token
    // });
  }

  if (!!info && info.message) {
    return res.json({
      error: {
        message: info.message
      }
    });
  }

  return next(new Error("unknown auth error"));
};

providersRouter.post("/login", async (req, res, next) => {
  passport.authenticate("local", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

providersRouter.post("/new", async (req, res, next) => {
  passport.authenticate("register", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

providersRouter.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "openid"],
  })
);

providersRouter.get("/login/google/callback", async (req, res, next) => {
  passport.authenticate("google", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

providersRouter.get('/:providerId', (req,res,next) => {
  
  const id = req.body.params.providerId;
  
  Provider.findById(id)
    .then(provider => {
      res.status(200).json({provider});
    })
    .catch(err => console.log(err));


});

module.exports = providersRouter;