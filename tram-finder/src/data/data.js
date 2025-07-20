export const roimaData = [
  {
    name: "Ohjaamo",
    children: [
      {
        name: "Ajolaitteet",
        children: [
          {
            name: "Kuljettaja istuin", // <-- пересекается
            code: "RO-OHJ-001"
          },
          {
            name: "Ohjauspaneeli",
            children: [
              {
                name: "Kosketusnäyttö",
                code: "RO-OHJ-002"
              },
              {
                name: "Painikepaneeli",
                code: "RO-OHJ-003"
              }
            ]
          }
        ]
      },
      {
        name: "Ohjaussauvat ja vivut",
        children: [
          {
            name: "Ajopoljin",
            code: "RO-OHJ-010"
          },
          {
            name: "Jarruvipu",
            code: "RO-OHJ-011"
          }
        ]
      }
    ]
  },
  {
    name: "Jarrujärjestelmä",
    children: [
      {
        name: "Mekaaniset jarrut",
        children: [
          {
            name: "Jarrupalat",
            children: [
              { name: "Etujarrupalat", code: "RO-JAR-001" },
              { name: "Takajarrupalat", code: "RO-JAR-002" }
            ]
          },
          {
            name: "Käsijarru",
            code: "RO-JAR-003"
          }
        ]
      },
      {
        name: "Kiskojarru", // <-- пересекается
        children: [
          {
            name: "Hydraulinen ohjaus",
            children: [
              { name: "Ohjausventtiili", code: "RO-JAR-010" },
              { name: "Painesäiliö", code: "RO-JAR-011" }
            ]
          },
          {
            name: "Anturiyksikkö",
            code: "RO-JAR-012"
          }
        ]
      }
    ]
  },
  {
    name: "Ilmastointi ja lämmitys",
    children: [
      {
        name: "Ilmastointilaite", // <-- пересекается
        children: [
          { name: "Ilmastointikompressori", code: "RO-ILM-001" },
          { name: "Kylmäaineputkisto", code: "RO-ILM-002" },
          { name: "Lämpötila-anturi", code: "RO-ILM-003" }
        ]
      },
      {
        name: "Lämmitysjärjestelmä",
        children: [
          { name: "Etulämmitin", code: "RO-ILM-010" },
          { name: "Takalämmitin", code: "RO-ILM-011" }
        ]
      }
    ]
  },
  {
    name: "Sähköjärjestelmä",
    children: [
      {
        name: "Akkumoduulit",
        children: [
          { name: "Pääakku", code: "RO-EL-001" },
          { name: "Varavoima-akku", code: "RO-EL-002" }
        ]
      },
      {
        name: "Kaapelointi",
        children: [
          { name: "Maadoituskaapeli", code: "RO-EL-010" },
          { name: "Valaistuskaapeli", code: "RO-EL-011" },
          { name: "CAN-kaapeli", code: "RO-EL-012" }
        ]
      }
    ]
  },
  {
    name: "Moottoriyksikkö",
    children: [
      {
        name: "Voimansiirto",
        children: [
          {
            name: "Sähkömoottori",
            code: "RO-MO-001"
          },
          {
            name: "Vaihdelaatikko",
            code: "RO-MO-002"
          }
        ]
      },
      {
        name: "Jäähdytys",
        children: [
          { name: "Jäähdyttimen tuuletin", code: "RO-MO-010" },
          { name: "Jäähdytysnesteanturi", code: "RO-MO-011" }
        ]
      }
    ]
  },
  {
    name: "Sisäjärjestelmät",
    children: [
      {
        name: "Valaistus",
        children: [
          { name: "Kattoledit", code: "RO-IN-001" },
          { name: "Matkustajavalaistus", code: "RO-IN-002" },
          { name: "Kuljettajan lukuvalo", code: "RO-IN-003" }
        ]
      },
      {
        name: "Istuinjärjestelmä",
        children: [
          { name: "Matkustajaistuin", code: "RO-IN-010" } // <-- пересекается
        ]
      }
    ]
  },
  {
    name: "Viihde- ja infonäytöt",
    children: [
      {
        name: "Näyttömoduulit",
        children: [
          { name: "Etunäyttö", code: "RO-DIS-001" },
          { name: "Sivunäyttö", code: "RO-DIS-002" },
          { name: "Peränäyttö", code: "RO-DIS-003" }
        ]
      },
      {
        name: "Ohjausyksiköt",
        children: [
          { name: "Multimedialaite", code: "RO-DIS-010" },
          { name: "Äänentoistokortti", code: "RO-DIS-011" }
        ]
      }
    ]
  },
  {
    name: "Yhteyslaitteet",
    children: [
      {
        name: "Verkkoyhteydet",
        children: [
          { name: "WiFi-moduuli", code: "RO-COM-001" },
          { name: "LTE-modeemi", code: "RO-COM-002" },
          { name: "Bluetooth-lähetin", code: "RO-COM-003" }
        ]
      },
      {
        name: "Navigointi",
        children: [
          { name: "GPS-anturi", code: "RO-COM-010" },
          { name: "Navigointiyksikkö", code: "RO-COM-011" }
        ]
      }
    ]
  }
];

export const winbusData = [
  {
    name: "Ohjaamo",
    children: [
      {
        name: "Istuinmoduulit",
        children: [
          {
            name: "Kuljettaja istuin", // <-- пересекается
            code: "WB-OHJ-001"
          },
          {
            name: "Säädettävä selkätuki",
            code: "WB-OHJ-002"
          }
        ]
      },
      {
        name: "Ohjausjärjestelmä",
        children: [
          { name: "Ajopoljin", code: "WB-OHJ-010" },
          { name: "Jarruvipu", code: "WB-OHJ-011" }
        ]
      }
    ]
  },
  {
    name: "Jarrujärjestelmä",
    children: [
      {
        name: "Kiskojarru", // <-- пересекается
        children: [
          {
            name: "Kiskojarrun ohjausyksikkö",
            code: "WB-JAR-001"
          },
          {
            name: "Kiskon vastelevy",
            code: "WB-JAR-002"
          }
        ]
      },
      {
        name: "Hydrauliset jarrut",
        children: [
          { name: "Jarrunestesäiliö", code: "WB-JAR-010" },
          { name: "Pääsylinteri", code: "WB-JAR-011" }
        ]
      }
    ]
  },
  {
    name: "Ilmastointi ja lämmitys",
    children: [
      {
        name: "Ilmastointilaite", // <-- пересекается
        children: [
          { name: "Ilmastointiyksikkö A", code: "WB-AC-001" },
          { name: "Lämpötila-anturi", code: "WB-AC-002" }
        ]
      },
      {
        name: "Lämmitysyksikkö",
        children: [
          { name: "Etulämmitin", code: "WB-AC-010" },
          { name: "Takalämmitin", code: "WB-AC-011" }
        ]
      }
    ]
  },
  {
    name: "Sähköjärjestelmä",
    children: [
      {
        name: "Virtalähteet",
        children: [
          { name: "Akku 24V", code: "WB-EL-001" },
          { name: "Invertteri", code: "WB-EL-002" }
        ]
      },
      {
        name: "Johdotus",
        children: [
          { name: "Ohjausjohto", code: "WB-EL-010" },
          { name: "Maadoituskaapeli", code: "WB-EL-011" }
        ]
      }
    ]
  },
  {
    name: "Moottori ja voimansiirto",
    children: [
      {
        name: "Sähkömoottori",
        children: [
          { name: "Päämoottori", code: "WB-MO-001" },
          { name: "Apuvaihde", code: "WB-MO-002" }
        ]
      },
      {
        name: "Jäähdytys",
        children: [
          { name: "Puhallin", code: "WB-MO-010" },
          { name: "Lämmönvaihdin", code: "WB-MO-011" }
        ]
      }
    ]
  },
  {
    name: "Runko ja alusta",
    children: [
      {
        name: "Runkorakenteet",
        children: [
          { name: "Eturunko", code: "WB-RUN-001" },
          { name: "Takarunko", code: "WB-RUN-002" }
        ]
      },
      {
        name: "Iskunvaimennus",
        children: [
          { name: "Hydraulinen vaimennin", code: "WB-RUN-010" },
          { name: "Kierrejousi", code: "WB-RUN-011" }
        ]
      }
    ]
  },
  {
    name: "Tiedonsiirto ja viestintä",
    children: [
      {
        name: "Navigointi",
        children: [
          { name: "GPS-moduuli", code: "WB-COM-001" },
          { name: "Reititysyksikkö", code: "WB-COM-002" }
        ]
      },
      {
        name: "Viihde",
        children: [
          { name: "Multimedianäyttö", code: "WB-COM-010" },
          { name: "Äänikaiutin", code: "WB-COM-011" }
        ]
      }
    ]
  }
];

export const soveliaData = [
  {
    name: "Ajoneuvon rakenne",
    children: [
      {
        name: "Ohjaamo",
        children: [
          {
            name: "Kuljettaja istuin",
            url: "https://docs.sovelia.com/ohjaamo/Kuljettaja-istuin"
          },
          {
            name: "Ohjauspaneeli",
            children: [
              {
                name: "Kosketusnäyttö",
                url: "https://docs.sovelia.com/ohjaamo/kosketusnaytto"
              },
              {
                name: "Ajopoljin",
                url: "https://docs.sovelia.com/ohjaamo/ajopoljin"
              }
            ]
          }
        ]
      },
      {
        name: "Runko",
        children: [
          {
            name: "Pääkehys",
            url: "https://docs.sovelia.com/runko/paakehys"
          },
          {
            name: "Vaimentimet",
            url: "https://docs.sovelia.com/runko/vaimentimet"
          }
        ]
      }
    ]
  },
  {
    name: "Ovien hallinta",
    children: [
      {
        name: "Etuovi",
        url: "https://docs.sovelia.com/ovet/etuovi"
      },
      {
        name: "Takaovi",
        url: "https://docs.sovelia.com/ovet/takaovi"
      },
      {
        name: "Kiskojarru",
        url: "https://docs.sovelia.com/ovet/kiskojarru"
      }
    ]
  },
  {
    name: "Sähkö ja tiedonsiirto",
    children: [
      {
        name: "Virtalähteet",
        children: [
          {
            name: "24V akku",
            url: "https://docs.sovelia.com/sahko/akku-24v"
          },
          {
            name: "Invertteri",
            url: "https://docs.sovelia.com/sahko/invertteri"
          }
        ]
      },
      {
        name: "CAN-väylä",
        url: "https://docs.sovelia.com/sahko/can-vayla"
      }
    ]
  },
  {
    name: "Ilmastointi",
    children: [
      {
        name: "Ilmastointilaite",
        url: "https://docs.sovelia.com/ilmastointi/ilmastointilaite"
      },
      {
        name: "Lämmityselementti",
        url: "https://docs.sovelia.com/ilmastointi/lammityselementti"
      }
    ]
  },
  {
    name: "Turvajärjestelmät",
    children: [
      {
        name: "Kameravalvonta",
        url: "https://docs.sovelia.com/turva/kamera"
      },
      {
        name: "Palohälytin",
        url: "https://docs.sovelia.com/turva/palohalytys"
      }
    ]
  },
  {
    name: "Dokumentaatio ja arkistot",
    children: [
      {
        name: "Yleiskatsaus",
        url: "https://docs.sovelia.com/info/yleiskatsaus"
      },
      {
        name: "Käyttöohjeet",
        url: "https://docs.sovelia.com/info/kayttoohjeet"
      },
      {
        name: "Huoltohistoria",
        url: "https://docs.sovelia.com/info/huoltohistoria"
      }
    ]
  }
];
