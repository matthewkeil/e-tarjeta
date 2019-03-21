const passport = require("../passport");
const Router = require("express").Router;
const authRouter = Router();

// radio boolean text textarea date

// {id type question answer},

//Partial list of questions from form can be found in the QUESTIONS_LIST constant

// authRouter.post('/auth/login', async (req, res, next) => {
//   try {
//       let user;

//       if (req.body && req.body.email && ValidEmail.test(req.body.email)) {
//           user = await User.find.by.email(req.body.email);
//       } else return res.status(400).send({error: {message: 'Invalid email address'}});


//       if (!user || (user && !User.password.verify(req.body.password || '', user.password))) {
//           return res.status(401).send({error: {message: 'Invalid email or password'}});
//       }

//       const token = await User.jwt.encode({email: user.email, id: user.id});

//       await User.update(user.id, {$set: {token}});

//       if (user.password) delete user.password;
//       if (user._id) delete user._id;

//       return res.status(201).send(<User>user);

//   } catch (err) {
//       next(err);
//   }
// });



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

authRouter.post("/login", async (req, res, next) => {
  passport.authenticate("local", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

authRouter.post("/register", async (req, res, next) => {
  passport.authenticate("register", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

authRouter.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "openid"],
  })
);

authRouter.get("/login/google/callback", async (req, res, next) => {
  passport.authenticate("google", handlePassportResponse(req, res, next))(
    req,
    res,
    next
  );
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = authRouter;
