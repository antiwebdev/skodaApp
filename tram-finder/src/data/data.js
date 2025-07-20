const data = {
    roima: [
        {
            name: "Jarrujärjestelmä",
            children: [
                {
                    name: "Jarrupalat",
                    children: [
                        { name: "Etupalat", code: "RO-JAR-001" },
                        { name: "Takapalat", code: "RO-JAR-002" },
                        { name: "Käsijarrupalat", code: "RO-JAR-003" }
                    ]
                },
                {
                    name: "Kiskojarru",
                    children: [
                        { name: "Jarrumoduuli A", code: "RO-JAR-010" },
                        { name: "Jarrumoduuli B", code: "RO-JAR-011" },
                        { name: "Ohjausventtiili", code: "RO-JAR-012" }
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
                        { name: "Akkupaketti 24V", code: "RO-EL-001" },
                        { name: "Invertteri 400V", code: "RO-EL-002" },
                        { name: "DC/DC-muunnin", code: "RO-EL-003" }
                    ]
                },
                {
                    name: "Johdotus",
                    children: [
                        { name: "Pääkytkinkaapeli", code: "RO-EL-010" },
                        { name: "Ohjauskaapeli", code: "RO-EL-011" },
                        { name: "Maadoitusjohto", code: "RO-EL-012" }
                    ]
                },
                {
                    name: "Anturit",
                    children: [
                        { name: "Nopeusanturi", code: "RO-EL-101" },
                        { name: "Lämpötila-anturi", code: "RO-EL-102" },
                        { name: "Paikka-anturi", code: "RO-EL-103" }
                    ]
                }
            ]
        },
        {
            name: "Ovenhallinta",
            children: [
                {
                    name: "Oven moottorit",
                    children: [
                        { name: "Etuoven moottori", code: "RO-DO-001" },
                        { name: "Takaoven moottori", code: "RO-DO-002" }
                    ]
                },
                {
                    name: "Tunnistimet",
                    children: [
                        { name: "Kynnyksen tunnistin", code: "RO-DO-010" },
                        { name: "Lukitustunnistin", code: "RO-DO-011" }
                    ]
                }
            ]
        },
        {
            name: "Ohjaamo",
            children: [
                {
                    name: "Ohjauslaitteet",
                    children: [
                        { name: "Ajopoljin", code: "RO-OH-001" },
                        { name: "Jarrupoljin", code: "RO-OH-002" },
                        { name: "Ohjausvipu", code: "RO-OH-003" }
                    ]
                },
                {
                    name: "Näyttöjärjestelmä",
                    children: [
                        { name: "Päänäyttö", code: "RO-OH-010" },
                        { name: "Sivunäyttö", code: "RO-OH-011" }
                    ]
                }
            ]
        },
        {
            name: "Ilmastointi",
            children: [
                {
                    name: "Lämmitys",
                    children: [
                        { name: "Lämmitysyksikkö etu", code: "RO-AC-001" },
                        { name: "Lämmitysyksikkö taka", code: "RO-AC-002" }
                    ]
                },
                {
                    name: "Jäähdytys",
                    children: [
                        { name: "Kattolaite A", code: "RO-AC-010" },
                        { name: "Kattolaite B", code: "RO-AC-011" }
                    ]
                }
            ]
        },
        {
            name: "Tiedonsiirto",
            children: [
                {
                    name: "Moduulit",
                    children: [
                        { name: "CAN-moduuli", code: "RO-COM-001" },
                        { name: "Ethernet-kytkin", code: "RO-COM-002" }
                    ]
                },
                {
                    name: "Antennit",
                    children: [
                        { name: "GPS-antenni", code: "RO-COM-010" },
                        { name: "WiFi-antenni", code: "RO-COM-011" },
                        { name: "LTE-antenni", code: "RO-COM-012" }
                    ]
                }
            ]
        },
        {
            name: "Runko",
            children: [
                {
                    name: "Kiinnitykset",
                    children: [
                        { name: "Rungon pultti", code: "RO-RUN-001" },
                        { name: "Rungon kiinnike", code: "RO-RUN-002" },
                        { name: "Tärinänvaimennin", code: "RO-RUN-003" }
                    ]
                }
            ]
        },
        {
            name: "Alusta",
            children: [
                {
                    name: "Pyörät",
                    children: [
                        { name: "Etupyörä", code: "RO-ALU-001" },
                        { name: "Takapyörä", code: "RO-ALU-002" }
                    ]
                },
                {
                    name: "Ripustus",
                    children: [
                        { name: "Jousielementti", code: "RO-ALU-010" },
                        { name: "Vaimentaja", code: "RO-ALU-011" }
                    ]
                }
            ]
        },
        {
            name: "Valojärjestelmä",
            children: [
                {
                    name: "Ulkovalot",
                    children: [
                        { name: "Ajovalo", code: "RO-VAL-001" },
                        { name: "Jarruvalo", code: "RO-VAL-002" },
                        { name: "Vilkkuyksikkö", code: "RO-VAL-003" }
                    ]
                },
                {
                    name: "Sisävalot",
                    children: [
                        { name: "Kattoledit", code: "RO-VAL-010" },
                        { name: "Lukulamppu", code: "RO-VAL-011" }
                    ]
                }
            ]
        },
        {
            name: "Turvajärjestelmät",
            children: [
                {
                    name: "Kamera- ja tallennus",
                    children: [
                        { name: "Etukamera", code: "RO-SEC-001" },
                        { name: "Sivukamera", code: "RO-SEC-002" },
                        { name: "Tallennusyksikkö", code: "RO-SEC-003" }
                    ]
                },
                {
                    name: "Hätäjärjestelmät",
                    children: [
                        { name: "Hätävalo", code: "RO-SEC-010" },
                        { name: "Hätäjarrukahva", code: "RO-SEC-011" }
                    ]
                }
            ]
        }
    ],
    winbus: [
        {
            name: "Moottorijärjestelmä",
            children: [
                {
                    name: "Polttoainejärjestelmä",
                    children: [
                        { name: "Polttoainesuodatin", code: "WB-MO-001" },
                        { name: "Polttoainepumppu", code: "WB-MO-002" },
                        { name: "Ruiskutusjärjestelmä", code: "WB-MO-003" }
                    ]
                },
                {
                    name: "Pakokaasujärjestelmä",
                    children: [
                        { name: "Pakoputki", code: "WB-MO-010" },
                        { name: "Hiukkassuodatin", code: "WB-MO-011" },
                        { name: "Katalysaattori", code: "WB-MO-012" }
                    ]
                }
            ]
        },
        {
            name: "Jäähdytysjärjestelmä",
            children: [
                {
                    name: "Säiliöt ja letkut",
                    children: [
                        { name: "Jäähdytysnesteen säiliö", code: "WB-JAA-001" },
                        { name: "Jäähdytysnesteen letku", code: "WB-JAA-002" }
                    ]
                },
                {
                    name: "Puhaltimet",
                    children: [
                        { name: "Sähköpuhallin", code: "WB-JAA-010" },
                        { name: "Moottoripuhallin", code: "WB-JAA-011" }
                    ]
                }
            ]
        },
        {
            name: "Sähköjärjestelmä",
            children: [
                {
                    name: "Akut",
                    children: [
                        { name: "Pääakku 24V", code: "WB-EL-001" },
                        { name: "Lisäakku 12V", code: "WB-EL-002" }
                    ]
                },
                {
                    name: "Valaistus",
                    children: [
                        { name: "Ajovalot", code: "WB-EL-010" },
                        { name: "Sumuvalot", code: "WB-EL-011" },
                        { name: "Sisävalot", code: "WB-EL-012" }
                    ]
                },
                {
                    name: "Elektroniikkayksiköt",
                    children: [
                        { name: "Ohjausyksikkö", code: "WB-EL-100" },
                        { name: "Diagnostiikkayksikkö", code: "WB-EL-101" }
                    ]
                }
            ]
        },
        {
            name: "Ohjausjärjestelmä",
            children: [
                {
                    name: "Ohjauspyörä",
                    children: [
                        { name: "Ohjauspyörä, vakio", code: "WB-OH-001" },
                        { name: "Ohjauspyörä, ergonominen", code: "WB-OH-002" }
                    ]
                },
                {
                    name: "Polkimet",
                    children: [
                        { name: "Kaasupoljin", code: "WB-OH-010" },
                        { name: "Jarrupoljin", code: "WB-OH-011" }
                    ]
                },
                {
                    name: "Näytöt",
                    children: [
                        { name: "Kuljettajan näyttö", code: "WB-OH-100" },
                        { name: "Matkustajan näyttö", code: "WB-OH-101" }
                    ]
                }
            ]
        },
        {
            name: "Alusta ja jousitus",
            children: [
                {
                    name: "Pyörät",
                    children: [
                        { name: "Etupyörät", code: "WB-ALU-001" },
                        { name: "Takapyörät", code: "WB-ALU-002" }
                    ]
                },
                {
                    name: "Jousitusjärjestelmä",
                    children: [
                        { name: "Ilmajousitus", code: "WB-ALU-010" },
                        { name: "Vakaajatangot", code: "WB-ALU-011" }
                    ]
                }
            ]
        },
        {
            name: "Turvajärjestelmät",
            children: [
                {
                    name: "Hätäjärjestelmät",
                    children: [
                        { name: "Hätäjarrutusjärjestelmä", code: "WB-SEC-001" },
                        { name: "Palohälytin", code: "WB-SEC-002" }
                    ]
                },
                {
                    name: "Valvontajärjestelmät",
                    children: [
                        { name: "Kameravalvonta", code: "WB-SEC-010" },
                        { name: "Liiketunnistin", code: "WB-SEC-011" }
                    ]
                }
            ]
        },
        {
            name: "Ovet ja portit",
            children: [
                {
                    name: "Ovien mekanismit",
                    children: [
                        { name: "Liukuovi", code: "WB-DO-001" },
                        { name: "Kääntöovi", code: "WB-DO-002" }
                    ]
                },
                {
                    name: "Turvalukot",
                    children: [
                        { name: "Sähkölukko", code: "WB-DO-010" },
                        { name: "Manuaalinen lukko", code: "WB-DO-011" }
                    ]
                }
            ]
        },
        {
            name: "Ilmastointi ja lämmitys",
            children: [
                {
                    name: "Lämmitysjärjestelmä",
                    children: [
                        { name: "Lämmityselementti", code: "WB-AC-001" },
                        { name: "Lämmityspuhallin", code: "WB-AC-002" }
                    ]
                },
                {
                    name: "Jäähdytysjärjestelmä",
                    children: [
                        { name: "Ilmastointilaite", code: "WB-AC-010" },
                        { name: "Kylmäainejärjestelmä", code: "WB-AC-011" }
                    ]
                }
            ]
        },
        {
            name: "Runko ja kiinnitykset",
            children: [
                {
                    name: "Runkorakenteet",
                    children: [
                        { name: "Runkopalkki", code: "WB-RUN-001" },
                        { name: "Kiinnityspultit", code: "WB-RUN-002" }
                    ]
                },
                {
                    name: "Iskunvaimentimet",
                    children: [
                        { name: "Etujousitus", code: "WB-RUN-010" },
                        { name: "Takajousitus", code: "WB-RUN-011" }
                    ]
                }
            ]
        },
        {
            name: "Kommunikaatiojärjestelmät",
            children: [
                {
                    name: "Radio ja signaalit",
                    children: [
                        { name: "VHF-radio", code: "WB-COM-001" },
                        { name: "LED-merkkivalot", code: "WB-COM-002" }
                    ]
                },
                {
                    name: "Verkkolaitteet",
                    children: [
                        { name: "WiFi-reititin", code: "WB-COM-010" },
                        { name: "Bluetooth-moduuli", code: "WB-COM-011" }
                    ]
                }
            ]
        }
    ]
};

export default data;