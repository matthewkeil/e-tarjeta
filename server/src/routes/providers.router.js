const passport = require("../passport");

const Router = require('express').Router;
const providersRouter = Router();

const Provider = require('../models/Provider');



// const handlePassportResponse = (req, res, next) => (err, user, info) => {
//   if (err instanceof Error) {
//     return next(err);
//   }

//   if (user) {
//     return res.redirect('http://localhost:3000');
//     // return res.json({
//     //   message: "successfully logged in",
//     //   token: user.token
//     // });
//   }

//   if (!!info && info.message) {
//     return res.json({
//       error: {
//         message: info.message
//       }
//     });
//   }

//   return next(new Error("unknown auth error"));
// };


providersRouter.post('/login', async (req, res, next) => {
  try {
      let provider;

      if (req.body && req.body.email) {
          provider = await Provider.findOne( {email: req.body.email} );
      } else return res.status(403).send({error: {message: 'Invalid email or password'}});


      if (!provider || (provider && !(await provider.validatePassword(req.body.password || '')))) {
          return res.status(403).send({error: {message: 'Invalid email or password'}});
      }

      await provider.updateToken();

      //Is provider.save() needed?
      provider.save();

      if (provider.password) delete provider.password;
      // if (user._id) delete user._id;

      return res.status(201).json({
        token: provider.token,
        _id: provider._id
      });

  } catch (err) {
      next(err);
  }
});

providersRouter.post('/new', async (req,res,next) => {
  try{
    let provider, existing;
    console.log(req.body);

    if(req.body && req.body.email && req.body.password){
      existing = await Provider.findOne({email: req.body.email});
    } else return res.status(400).json({error: {message: 'Email and password required'}})

    if(!!existing){
      return res.status(400).json({ error: {message: 'Provider already exists'}})
    }

    provider = new Provider({
      email: req.body.email,
      password: req.body.password,
      license: req.body.license
    });

    await provider.updateToken();

    provider.save();
    
    return res.status(201).json({
      token: provider.token,
      _id: provider._id
    });

  } catch(err) {
    next(err);
  }
});


// providersRouter.post("/login", async (req, res, next) => {
//   passport.authenticate("local", handlePassportResponse(req, res, next))(
//     req,
//     res,
//     next
//   );
// });

// providersRouter.post("/new", async (req, res, next) => {
//   passport.authenticate("register", handlePassportResponse(req, res, next))(
//     req,
//     res,
//     next
//   );
// });

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
  
  const id = req.params.providerId;
  Provider.findById(id)
    .then(provider => {
      res.status(200).json({provider});
    })
    .catch(err => console.log(err));


});

module.exports = providersRouter;