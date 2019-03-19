const passport = require("../passport");
const Router = require("express").Router;
const authRouter = Router();

// radio boolean text textarea date

// {id type question answer},

//Partial list of questions from form can be found in the QUESTIONS_LIST constant

const QUESTIONS_LIST = [
  {
    id: '',
    type: TYPE.TEXT,
    question: 'NOMBRE',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'APELLIDO',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'DOMICILIO',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'LOCALIDAD',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'TELEFONO',
    answer: ''
  },{
    id: '',
    type: TYPE.DATE,
    question: 'FECHA DE NACIMIENTO',
    answer: ''
  },{
    id: '',
    type: TYPE.RADIO,
    question: 'ETNIA',
    answer: ['BLANCA, INDIGENA, MESTIZA, NEGRA, OTRA']
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'ALFA BETA',
    answer: ''
  },{
    id: '',
    type: TYPE.RADIO,
    question: 'ESTUDIOS',
    answer: ['NINGUNO, PRIMARIA, SECUNDA, UNIVERSIDAD']
  },{
    id: '',
    type: TYPE.RADIO,
    question: 'ESTADO CIVIL',
    answer: ['CASADA', 'UNION ESTABLE', 'SOLTERA', 'OTRO']
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'VIVE SOLA',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'LUGAR DEL CONTROL PRENATAL',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'LUGAR DEL PARTO',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'NOMBRE IDENTIDAD',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'FAMILIARES - TBC',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'FAMILIARES - DIABETES',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'FAMILIARES - HIPERTENSION',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'FAMILIARES - PREECLAMPSIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'FAMILIARES - ECLAMPSIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    type: 'BOOLEAN',
    question: 'FAMILIARES - OTRA CONDICION MEDICA GRAVE',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    type: 'BOOLEAN',
    question: 'PERSONALES - TBC',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - DIABETES',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - HIPERTENSION',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - PREECLAMPSIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - ECLAMPSIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - OTRA CONDICION MEDICA GRAVE',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - CIRUGIA GENITO-URINARIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - INFERTILIDAD',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - CARDIOPEL.',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - NEFROPATIA',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'PERSONALES - VIOLENCIA',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - GESTAS PREVIAS',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - ABORTOS',
    answer: ''
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'OBSTETRICOS - ABORTOS - 3 ESPONT. CONSECUTIVOS',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - PARTOS',
    answer: ''
  },{
    id: '',
    type: TYPE.RADIO,
    question: 'OBSTETRICOS - PARTOS - ULTIMO PREVIO',
    answer: ['n/c', 'normal', '<2500g', '>4000g']
  },{
    id: '',
    type: TYPE.BOOLEAN,
    question: 'OBSTETRICOS - PARTOS - ANTECEDENTE DE GEMELARES',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - PARTOS - VAGINALES',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - PARTOS - CESAREAS',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - NACIDOS MUERTOS',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - NACIDOS VIVOS',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - MUERTOS PRIMERA SEMANA',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - MUERTOS DESPUES PRIMERA SEMANA',
    answer: ''
  },{
    id: '',
    type: TYPE.TEXT,
    question: 'OBSTETRICOS - VIVEN',
    answer: ''
  }
];

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
