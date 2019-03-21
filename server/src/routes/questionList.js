module.exports = [
    {
      general: [
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
        }
      ],
    }, {
      familiares: [
        {
          id: 15,
          type: TYPES.BOOLEAN,
          name: "FAMILIARES - TBC",
          label: "Estudios"
        },
        {
          id: 16,
          type: TYPES.BOOLEAN,
          question: "FAMILIARES - DIABETES",
          answer: ""
        },
        {
          id: 17,
          type: TYPES.BOOLEAN,
          question: "FAMILIARES - HIPERTENSION",
          answer: ""
        },
        {
          id: 18,
          type: TYPES.BOOLEAN,
          question: "FAMILIARES - PREECLAMPSIA",
          answer: ""
        },
        {
          id: 19,
          type: TYPES.BOOLEAN,
          question: "FAMILIARES - ECLAMPSIA",
          answer: ""
        },
        {
          id: 20,
          type: TYPES.BOOLEAN,
          type: "BOOLEAN",
          question: "FAMILIARES - OTRA CONDICION MEDICA GRAVE",
          answer: ""
        }
      ],
    }, {
      personales: [
        {
          id: 21,
          type: TYPES.BOOLEAN,
          type: "BOOLEAN",
          question: "PERSONALES - TBC",
          answer: ""
        },
        {
          id: 22,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - DIABETES",
          answer: ""
        },
        {
          id: 23,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - HIPERTENSION",
          answer: ""
        },
        {
          id: 24,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - PREECLAMPSIA",
          answer: ""
        },
        {
          id: 25,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - ECLAMPSIA",
          answer: ""
        },
        {
          id: 26,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - OTRA CONDICION MEDICA GRAVE",
          answer: ""
        },
        {
          id: 27,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - CIRUGIA GENITO-URINARIA",
          answer: ""
        },
        {
          id: 28,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - INFERTILIDAD",
          answer: ""
        },
        {
          id: 29,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - CARDIOPEL.",
          answer: ""
        },
        {
          id: 30,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - NEFROPATIA",
          answer: ""
        },
        {
          id: 31,
          type: TYPES.BOOLEAN,
          question: "PERSONALES - VIOLENCIA",
          answer: ""
        }
      ],
    }, {
      obstetricos: [
        {
          id: 32,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - GESTAS PREVIAS",
          answer: ""
        },
        {
          id: 33,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - ABORTOS",
          answer: ""
        },
        {
          id: 34,
          type: TYPES.BOOLEAN,
          question: "OBSTETRICOS - ABORTOS - 3 ESPONT. CONSECUTIVOS",
          answer: ""
        },
        {
          id: 35,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - PARTOS",
          answer: ""
        },
        {
          id: 36,
          type: TYPES.RADIO,
          question: "OBSTETRICOS - PARTOS - ULTIMO PREVIO",
          answer: ["n/c", "normal", "<2500g", ">4000g"]
        },
        {
          id: 37,
          type: TYPES.BOOLEAN,
          question: "OBSTETRICOS - PARTOS - ANTECEDENTE DE GEMELARES",
          answer: ""
        },
        {
          id: 38,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - PARTOS - VAGINALES",
          answer: ""
        },
        {
          id: 39,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - PARTOS - CESAREAS",
          answer: ""
        },
        {
          id: 40,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - NACIDOS MUERTOS",
          answer: ""
        },
        {
          id: 41,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - NACIDOS VIVOS",
          answer: ""
        },
        {
          id: 42,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - MUERTOS PRIMERA SEMANA",
          answer: ""
        },
        {
          id: 43,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - MUERTOS DESPUES PRIMERA SEMANA",
          answer: ""
        },
        {
          id: 44,
          type: TYPES.TEXT,
          question: "OBSTETRICOS - VIVEN",
          answer: ""
        }
      ]
    }
  ];