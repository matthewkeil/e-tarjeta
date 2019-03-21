const Router = require("express").Router;
const clientsRouter = Router();
const {
  TYPES
} = require("../../../client/src/components/clients/question_types");
const { isLoggedIn } = require("../helpers");
const Client = require('../models/Client');

const QUESTIONS_LIST = [
  {
    id: 1,
    type: TYPES.TEXT,
    name: "nomber",
    label: "Nobre"
  },
  {
    id: 2,
    type: TYPES.TEXT,
    name: "apellido",
    label: "Apellido"
  },
  {
    id: 3,
    type: TYPES.TEXT,
    name: "domicilio",
    label: "Domicilio"
  },
  {
    id: 4,
    type: TYPES.TEXT,
    name: "localidad",
    label: "Localidad"
  },
  {
    id: 5,
    type: TYPES.TEXT,
    name: "telefono",
    label: "Telefono"
  },
  {
    id: 6,
    type: TYPES.DATE,
    name: "fechaNacimiento",
    label: "Fecha de Nacimiento"
  },
  {
    id: 7,
    type: TYPES.RADIO,
    name: "etnia",
    label: "Etnia",
    answers: [
      {
        label: "Blanca",
        value: "BLANCA"
      },
      {
        label: "Indigena",
        value: "INDIGENA"
      },
      {
        label: "Mestiza",
        value: "MESTIZA"
      },
      {
        label: "Negra",
        value: "NEGRA"
      },
      {
        label: "Otra",
        value: "OTRA"
      }
    ]
  },
  {
    id: 8,
    type: TYPES.BOOLEAN,
    name: "alfaBeta",
    label: "Alfa Beta"
  },
  {
    id: 9,
    type: TYPES.RADIO,
    name: "estudios",
    label: "Estudios",
    answers: [
      {
        label: "Ninguno",
        value: "NINGUNO"
      },
      {
        label: "Primaria",
        value: "PRIMARIA"
      },
      {
        label: "Segunda",
        value: "SEGUNDA"
      },
      {
        label: "Universidad",
        value: "UNIVERSIDAD"
      }
    ]
  },
  {
    id: 10,
    type: TYPES.RADIO,
    name: "estadoCivil",
    label: "Estado Civil",
    answers: [
      {
        value: "CASADA",
        label: "Casada"
      },
      {
        value: "UNION_ESTABLE",
        label: "Union Estable"
      },
      {
        value: "SOLTERA",
        label: "Soltera"
      },
      {
        value: "OTRO",
        label: "Otro"
      }
    ]
  },
  {
    id: 11,
    type: TYPES.BOOLEAN,
    name: "viveSola",
    label: "Vive Sola"
  },
  {
    id: 12,
    type: TYPES.TEXT,
    name: "lugarDelControlPrenatal",
    label: "Lugar del Control Prenatal"
  },
  {
    id: 13,
    type: TYPES.TEXT,
    name: "lugarDelParto",
    label: "Lugar del Parto"
  },
  {
    id: 14,
    type: TYPES.TEXT,
    name: "nombreIdentidad",
    label: "Nombre Identidad"
  },
  {
    id: 15,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "tbc",
    label: "TBC"
  },
  {
    id: 16,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "diabetes",
    label: "Diabetes"
  },
  {
    id: 17,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "hipertension",
    label: "Hipertension"
  },
  {
    id: 18,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "preeclampsia",
    label: "Preeclampsia"
  },
  {
    id: 19,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "eclampsia",
    label: "Eclampsia"
  },
  {
    id: 20,
    type: TYPES.BOOLEAN,
    category: "FAMILIARES",
    name: "otraCondicionMedicaGrave",
    label: "Otra Condicion Medica Grave"
  },
  {
    id: 21,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "tbc",
    label: "TBC"
  },

  {
    id: 22,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "diabetes",
    label: "Diabetes"
  },
  {
    id: 23,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "hipertension",
    label: "Hipertension"
  },
  {
    id: 24,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "preeclampsia",
    label: "Preeclampsia"
  },
  {
    id: 25,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "eclampsia",
    label: "Eclampsia"
  },
  {
    id: 26,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "otraCondicionMedicaGrave",
    label: "Otra Condicion Medica Grave"
  },
  {
    id: 27,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "cirugiaGenitoUrinaria",
    label: "Cirugia Genito-Urinaria"
  },
  {
    id: 28,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "infertilidad",
    label: "Infertilidad"
  },
  {
    id: 29,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "cardiopel",
    label: "Cardiopel"
  },
  {
    id: 30,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "nefropatia",
    label: "Nefropatia"
  },
  {
    id: 31,
    type: TYPES.BOOLEAN,
    category: "PERSONALES",
    name: "violencia",
    label: "Violencia"
  },
  {
    id: 32,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "gestaasPrevias",
    label: "Gestas Previas"
  },
  {
    id: 33,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "abortos",
    label: "Abortos"
  },
  {
    id: 34,
    type: TYPES.BOOLEAN,
    category: "OBSTETRICOS",
    name: "tresConsecutivosAbortos",
    label: "Tres Espont. Consecutivos"
  },
  {
    id: 35,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "partos",
    label: "Partos"
  },
  {
    id: 36,
    type: TYPES.RADIO,
    category: "OBSTETRICOS",
    name: "ultimoPrevio",
    label: "Ultima Previo",
    answers: [
      {
        label: "n/c",
        value: "NC"
      },
      {
        label: "normal",
        value: "NORMAL"
      },
      {
        label: "<2500g",
        value: "LT2500g"
      },
      {
        label: ">4000g",
        value: "LT4000g"
      }
    ]
  },
  {
    id: 37,
    type: TYPES.BOOLEAN,
    category: "OBSTETRICOS",
    name: "antecedenteDeGemelares",
    label: "Antecedente de Gemelares"
  },
  {
    id: 38,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "vaginales",
    label: "Vaginales"
  },
  {
    id: 39,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "cesareas",
    label: "Cesareas"
  },
  {
    id: 40,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "nacidosMuertos",
    label: "Nacido Muertos"
  },
  {
    id: 41,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "nacidosVivos",
    label: "Nacidos Vivos"
  },
  {
    id: 42,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "muertosPrimeraSemana",
    label: "Muertos Primera Semana"
  },
  {
    id: 43,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "muertosDespuesPrimeraSemana",
    label: "Muertos Despues Primera Semana"
  },
  {
    id: 44,
    type: TYPES.TEXT,
    category: "OBSTETRICOS",
    name: "viven",
    label: "Viven"
  }
];

/**
 *
 * Sends list of registration questions
 * that will populate the form on the
 * client.
 *
 */

clientsRouter.get("/new", (req, res, next) => {
  res.json({ questions: QUESTIONS_LIST });
  res.end();
});

clientsRouter.post('/new', async (req,res,next) => {
  try{
    let client, existing;

    if(req.body && req.body.email && req.body.password){
      existing = await Client.findOne({email: req.body.email});
    } else return res.status(400).json({error: {message: 'Email and password required'}})

    if(!!existing){
      return res.status(400).json({ error: {message: 'Client already exists'}})
    }

    client = new Client({
      email: req.body.email,
      password: req.body.password,
    });

    await client.updateToken();

    client.save();
    
    return res.status(201).json({
      token: client.token,
      _id: client._id
    });

  } catch(err) {
    next(err);
  }
});

clientsRouter.post('/login', async (req, res, next) => {
  try {
      let client;

      if (req.body && req.body.email) {
          client = await Client.findOne( {email: req.body.email} );
      } else return res.status(403).send({error: {message: 'Invalid email or password'}});

      if (!client || (client && !(await client.validatePassword(req.body.password || '')))) {
          return res.status(403).send({error: {message: 'Invalid email or password'}});
      }

      await client.updateToken();

      client.save();

      if (client.password) delete client.password;
      // if (user._id) delete user._id;

      return res.status(201).json({
        token: client.token,
        _id: client._id
      });

  } catch (err) {
      next(err);
  }
});

clientsRouter.get("/:id", isLoggedIn, (req, res, next) => {
  const { id, email, name } = req.user;
  const USER = { id, email, name };

  res.json(USER);
  res.end();
});

module.exports = clientsRouter;
