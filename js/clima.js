window.addEventListener("DOMContentLoaded", () => {
  const imagenesCiudades = {
    "amazonas": "../img/Tormenta.gif",
    "armenia": "../img/nublado.gif",
    "barranquilla": "../img/Soleado.gif",
    "bogota": "../img/Llovizna.gif",
    "cali": "../img/Soleado.gif",
    "cartagena": "../img/Soleado.gif",
    "manizales": "../img/Niebla.gif",
    "medellin": "../img/Soleado.gif",
    "pereira": "../img/parcialmente.gif",
    "riohacha": "../img/Soleado.gif",
    "neiva": "../img/Despejado.gif"
  };

  document.getElementById("buscar").addEventListener("click", function () {
    let ciudad = document.getElementById("ciudad").value;
    ciudad = ciudad.toLowerCase().replace(/\s+/g, ''); 
});

  const dataRecomendaciones = {
    Cartagena: {
      alojamiento: {
        texto: "Cartagena de Indias ofrece una gran variedad de hoteles que van desde lujosos resorts en el centro histórico y frente a la playa, hasta opciones más económicas en zonas como Bocagrande y Getsemaní. Muchos hoteles están ubicados en casas coloniales restauradas, ofreciendo una mezcla única de historia y confort moderno.",
        imagen: "../img/alojamientoCartagena.jpg",
        precios: {
          economicos: "COP $80,000 - $180,000 por noche (~USD $20 - $45)",
          gamaMedia: "COP $200,000 - $450,000 por noche (~USD $50 - $115)",
          lujo: "COP $500,000 - $1,500,000+ por noche (~USD $125 - $380+)"
        },
        enlacesReserva: [
          { nombre: "Booking.com", url: "https://www.booking.com/city/co/cartagena.es.html" },
          { nombre: "Airbnb", url: "https://www.airbnb.com/s/Cartagena--Colombia" },
          { nombre: "Expedia", url: "https://www.expedia.com/Cartagena-Hotels.d926.Travel-Guide-Hotels" },
          { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/6209/i1/hoteles-en-cartagena" },
          { nombre: "Hoteles.com", url: "https://co.hoteles.com/de1641909/hoteles-cartagena-colombia/" }
        ]
      },
          restaurante: {
        texto: "Cartagena ofrece una vibrante escena gastronómica con opciones que van desde la tradicional cocina caribeña hasta propuestas internacionales. Podrás encontrar restaurantes con encanto en el centro histórico, lugares modernos en Bocagrande y opciones más informales en Getsemaní.",
        imagen: "../img/restauranteCartagena.jpg",
        precios: {
            economicos: "COP $30,000 - $60,000 por persona (~USD $8 - $15)",
            gamaMedia: "COP $70,000 - $150,000 por persona (~USD $18 - $38)",
            lujo: "COP $160,000+ por persona (~USD $40+)"
        },
        enlacesReserva: [
            { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297476-Cartagena_Cartagena_Province_Bolivar_Department.html" },
            { nombre: "El Universal - Mejores restaurantes", url: "https://www.eluniversal.com.co/cartagena/mejores-restaurantes-en-cartagena-H5788800" },
            { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Cartagena-Bolivar" },
            { nombre: "OpenTable-Restaurantes", url: "https://www.opentable.com/s/restaurants-near-cartagena" }
        ]
    }
},
    
Bogotá: {
  alojamiento: {
      texto: "Bogotá, la capital de Colombia, ofrece una amplia gama de alojamientos, desde hoteles de lujo en zonas como Usaquén y la Zona Rosa, hasta opciones más económicas y hostales en La Candelaria y Chapinero. Hay hoteles para todos los gustos y presupuestos.",
      imagen: "../img/alojamientoBogota.jpg",
      precios: {
          economicos: "COP $60,000 - $150,000 por noche (~USD $15 - $38)",
          gamaMedia: "COP $180,000 - $400,000 por noche (~USD $45 - $100)",
          lujo: "COP $450,000 - $1,500,000+ por noche (~USD $113 - $380+)"
      },
      enlacesReserva: [
          { nombre: "Booking.com", url: "https://www.booking.com/city/co/bogota.es.html" },
          { nombre: "Airbnb", url: "https://www.airbnb.com/s/Bogot%C3%A1--Colombia" },
          { nombre: "Expedia", url: "https://www.expedia.com/Bogota-Hotels.d178237.Travel-Guide-Hotels" },
          { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/6206/i1/hoteles-en-bogota" },
          { nombre: "Hoteles.com", url: "https://co.hoteles.com/de1641906/hoteles-bogota-colombia/" }
      ]
  },
  restaurante: {
      texto: "La escena gastronómica de Bogotá es vibrante y diversa, con opciones que van desde la cocina tradicional colombiana (como el ajiaco y el tamal) hasta restaurantes de alta cocina internacional. Barrios como La Candelaria, Usaquén, Chapinero y la Zona G son centros gastronómicos importantes.",
      imagen: "../img/restauranteBogota.jpg",
      precios: {
          economicos: "COP $20,000 - $50,000 por persona (~USD $5 - $13)",
          gamaMedia: "COP $60,000 - $150,000 por persona (~USD $15 - $38)",
          lujo: "COP $160,000+ por persona (~USD $40+)"
      },
      enlacesReserva: [
          { nombre: "TripAdvisor - Restaurantes en Bogotá", url: "https://www.tripadvisor.co/Restaurants-g294074-Bogota.html" },
          { nombre: "Restaurant Guru - Bogotá", url: "https://restaurantguru.com/best-restaurants-in-Bogota" },
          { nombre: "OpenTable - Restaurantes cerca de Bogotá", url: "https://www.opentable.com/s/restaurants-near-bogota" },
          { nombre: "La Barra - Mejores Restaurantes Bogotá", url: "https://www.revista-la-barra.com/los-mejores-restaurantes-de-bogota/" }
      ]
  }
},
    Medellín: {
      alojamiento: {
          texto: "Medellín cuenta con una amplia gama de alojamientos, desde hoteles boutique en El Poblado hasta hostales económicos en Laureles y el centro. Muchos ofrecen vistas panorámicas de la ciudad y fácil acceso al sistema de transporte público.",
          imagen: "../img/alojamientoMedellin.avif",
          precios: {
              economicos: "COP $50,000 - $120,000 por noche (~USD $13 - $30)",
              gamaMedia: "COP $150,000 - $350,000 por noche (~USD $38 - $90)",
              lujo: "COP $400,000 - $1,200,000+ por noche (~USD $100 - $300+)"
          },
          enlacesReserva: [
              { nombre: "Booking.com", url: "https://www.booking.com/city/co/medellin.es.html" },
              { nombre: "Airbnb", url: "https://www.airbnb.com/s/Medell%C3%ADn--Colombia" },
              { nombre: "Expedia", url: "https://www.expedia.com/Medellin-Hotels.d178243.Travel-Guide-Hotels" },
              { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/6210/i1/hoteles-en-medellin" },
              { nombre: "Hoteles.com", url: "https://co.hoteles.com/de1641910/hoteles-medellin-colombia/" }
          ]
      },
      restaurante: {
          texto: "La escena gastronómica de Medellín es diversa, con restaurantes que sirven desde la tradicional bandeja paisa hasta cocina internacional de alta calidad. Barrios como El Poblado y Laureles son conocidos por su gran oferta de restaurantes y cafés.",
          imagen: "../img/restauranteMedellin.jpg",
          precios: {
              economicos: "COP $20,000 - $45,000 por persona (~USD $5 - $11)",
              gamaMedia: "COP $50,000 - $120,000 por persona (~USD $13 - $30)",
              lujo: "COP $130,000+ por persona (~USD $33+)"
          },
          enlacesReserva: [
              { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297478-Medellin_Antioquia_Department.html" },
              { nombre: "La República - Mejores restaurantes en Medellín", url: "https://www.larepublica.co/especiales/mejores-restaurantes-2023/medellin" },
              { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Medellin" },
              { nombre: "OpenTable-Restaurantes", url: "https://www.opentable.com/s/restaurants-near-medellin" }
          ]
      }
  },
  Manizales: {
    alojamiento: {
        texto: "Manizales ofrece una variedad de alojamientos que van desde hoteles de montaña con vistas al paisaje cafetero hasta cómodos hoteles en el centro de la ciudad. Muchos destacan por su hospitalidad y conexión con la cultura cafetera.",
        imagen: "../img/alojamientoManizales.jpg",
        precios: {
            economicos: "COP $40,000 - $90,000 por noche (~USD $10 - $23)",
            gamaMedia: "COP $100,000 - $250,000 por noche (~USD $25 - $63)",
            lujo: "COP $280,000 - $700,000+ por noche (~USD $70 - $175+)"
        },
        enlacesReserva: [
            { nombre: "Booking.com", url: "https://www.booking.com/city/co/manizales.es.html" },
            { nombre: "Airbnb", url: "https://www.airbnb.com/s/Manizales--Colombia" },
            { nombre: "Expedia", url: "https://www.expedia.com/Manizales-Hotels.d6053246.Travel-Guide-Hotels" },
            { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/30786/i1/hoteles-en-manizales" },
            { nombre: "Hoteles.com", url: "https://co.hoteles.com/de6053246/hoteles-manizales-colombia/" }
        ]
    },
    restaurante: {
        texto: "La gastronomía de Manizales está influenciada por la región cafetera, con platos tradicionales como el sancocho de res, la bandeja paisa y una creciente oferta de cafés especiales y restaurantes con propuestas innovadoras.",
        imagen: "../img/restauranteManizales.webp",
        precios: {
            economicos: "COP $15,000 - $30,000 por persona (~USD $4 - $8)",
            gamaMedia: "COP $35,000 - $70,000 por persona (~USD $9 - $18)",
            lujo: "COP $80,000+ por persona (~USD $20+)"
        },
        enlacesReserva: [
            { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297481-Manizales_Caldas_Department.html" },
            { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Manizales" },
        ]
    }
},
    
Neiva: {
  alojamiento: {
      texto: "Neiva ofrece principalmente hoteles funcionales para viajeros de negocios y turismo regional. También se pueden encontrar fincas y hostales en las afueras, ideales para quienes buscan una conexión con la naturaleza del Huila.",
      imagen: "../img/alojamientoNeiva.jpg",
      precios: {
          economicos: "COP $30,000 - $70,000 por noche (~USD $8 - $18)",
          gamaMedia: "COP $80,000 - $180,000 por noche (~USD $20 - $45)",
          lujo: "COP $200,000+ por noche (~USD $50+)"
      },
      enlacesReserva: [
          { nombre: "Booking.com", url: "https://www.booking.com/city/co/neiva.es.html" },
          { nombre: "Airbnb", url: "https://www.airbnb.com/s/Neiva--Colombia" },
          { nombre: "Expedia", url: "https://www.expedia.com/Neiva-Hotels.d6052957.Travel-Guide-Hotels" },
          { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/30788/i1/hoteles-en-neiva" },
          { nombre: "Hoteles.com", url: "https://co.hoteles.com/de6052957/hoteles-neiva-colombia/" }
      ]
  },
  restaurante: {
      texto: "La gastronomía de Neiva y el Huila se caracteriza por platos fuertes como el asado huilense, la mojarra frita y la chicha de maíz. Los restaurantes locales ofrecen una experiencia auténtica de la cocina regional.",
      imagen: "../img/restauranteNeiva.jpg",
      precios: {
          economicos: "COP $10,000 - $25,000 por persona (~USD $3 - $6)",
          gamaMedia: "COP $30,000 - $60,000 por persona (~USD $8 - $15)",
          lujo: "COP $70,000+ por persona (~USD $18+)"
      },
      enlacesReserva: [
          { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297482-Neiva_Huila_Department.html" },
          { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Neiva" },
      ]
  }
},
    
Amazonas: {
  alojamiento: {
      texto: "El Amazonas ofrece una variedad de eco-lodges, cabañas en la selva y algunos hoteles sencillos en Leticia. El alojamiento se centra en la conexión con la naturaleza y la experiencia de la selva.",
      imagen: "../img/alojamientoAmazonas.jpg",
      precios: {
          economicos: "COP $50,000 - $120,000 por noche (~USD $13 - $30)",
          gamaMedia: "COP $130,000 - $300,000 por noche (~USD $33 - $75)",
          lujo: "COP $350,000+ por noche (~USD $88+)"
      },
      enlacesReserva: [
          { nombre: "Booking.com - Amazonas", url: "https://www.booking.com/region/co/amazonas.es.html" },
          { nombre: "Airbnb - Amazonas", url: "https://www.airbnb.com/s/Amazonas--Colombia" },
          { nombre: "Expedia - Amazonas", url: "https://www.expedia.com/Amazonas-Departments-Hotels.d6064629.Travel-Guide-Hotels" },
          { nombre: "Despegar - Amazonas", url: "https://www.despegar.com.co/hoteles/hl/30784/i1/hoteles-en-amazonas" },
          { nombre: "Hoteles.com - Amazonas", url: "https://co.hoteles.com/de6064629/hoteles-amazonas-colombia/" }
      ]
  },
  restaurante: {
      texto: "La gastronomía del Amazonas se basa en ingredientes locales como pescados de río (pirarucú, gamitana), frutas exóticas como el copoazú y preparaciones tradicionales indígenas. Los restaurantes suelen ofrecer una experiencia culinaria única y natural.",
      imagen: "../img/restauranteAmazonas.jpg",
      precios: {
          economicos: "COP $15,000 - $35,000 por persona (~USD $4 - $9)",
          gamaMedia: "COP $40,000 - $80,000 por persona (~USD $10 - $20)",
          lujo: "COP $90,000+ por persona (~USD $23+)"
      },
      enlacesReserva: [
          { nombre: "TripAdvisor - Amazonas", url: "https://www.tripadvisor.co/Restaurants-g297491-Amazonas_Department.html" },
          { nombre: "Restaurant Guru - Leticia", url: "https://restaurantguru.com/best-restaurants-in-Leticia" },
          // OpenTable puede tener opciones limitadas
      ]
  }
},
    
    Riohacha: {
      alojamiento: {
          texto: "Riohacha, puerta de entrada a La Guajira, ofrece principalmente hoteles sencillos y cómodos, así como algunas posadas y alojamientos cerca de la playa. Es un buen punto de partida para explorar la región.",
          imagen: "../img/alojamientoRiohacha.webp",
          precios: {
              economicos: "COP $35,000 - $80,000 por noche (~USD $9 - $20)",
              gamaMedia: "COP $90,000 - $200,000 por noche (~USD $23 - $50)",
              lujo: "COP $220,000+ por noche (~USD $55+)"
          },
          enlacesReserva: [
              { nombre: "Booking.com", url: "https://www.booking.com/city/co/riohacha.es.html" },
              { nombre: "Airbnb", url: "https://www.airbnb.com/s/Riohacha--Colombia" },
              { nombre: "Expedia", url: "https://www.expedia.com/Riohacha-Hotels.d6052791.Travel-Guide-Hotels" },
              { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/30787/i1/hoteles-en-riohacha" },
              { nombre: "Hoteles.com", url: "https://co.hoteles.com/de6052791/hoteles-riohacha-colombia/" }
          ]
      },
      restaurante: {
          texto: "En Riohacha, la gastronomía se centra en pescados y mariscos frescos, así como en platos tradicionales de la cultura wayuu. Los restaurantes suelen ser sencillos pero ofrecen sabores auténticos de la región caribeña.",
          imagen: "../img/restauranteRiohacha.jpg",
          precios: {
              economicos: "COP $15,000 - $30,000 por persona (~USD $4 - $8)",
              gamaMedia: "COP $35,000 - $70,000 por persona (~USD $9 - $18)",
              lujo: "COP $80,000+ por persona (~USD $20+)"
          },
          enlacesReserva: [
              { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g679288-Riohacha_La_Guajira_Department.html" },
              { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Riohacha" },
          
          ]
      }
  },
        
    Cali: {
      alojamiento: {
          texto: "Cali ofrece una variedad de opciones de alojamiento, desde hoteles modernos en el norte hasta hoteles boutique y hostales con ambiente salsero en el centro y el barrio de San Antonio. Muchos reflejan la rica cultura y el espíritu alegre de la ciudad.",
          imagen: "../img/alojamientoCali.jpg",
          precios: {
              economicos: "COP $40,000 - $100,000 por noche (~USD $10 - $25)",
              gamaMedia: "COP $120,000 - $280,000 por noche (~USD $30 - $70)",
              lujo: "COP $300,000 - $900,000+ por noche (~USD $75 - $225+)"
          },
          enlacesReserva: [
              { nombre: "Booking.com", url: "https://www.booking.com/city/co/cali.es.html" },
              { nombre: "Airbnb", url: "https://www.airbnb.com/s/Cali--Colombia" },
              { nombre: "Expedia", url: "https://www.expedia.com/Cali-Hotels.d178239.Travel-Guide-Hotels" },
              { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/6208/i1/hoteles-en-cali" },
              { nombre: "Hoteles.com", url: "https://co.hoteles.com/de1641908/hoteles-cali-colombia/" }
          ]
      },
      restaurante: {
          texto: "La gastronomía de Cali es famosa por su sancocho de gallina, el chontaduro y una creciente escena de restaurantes que ofrecen desde cocina tradicional del Valle del Cauca hasta platos internacionales innovadores. Barrios como Granada y El Peñón son centros gastronómicos.",
          imagen: "../img/restauranteCali.jpg",
          precios: {
              economicos: "COP $15,000 - $35,000 por persona (~USD $4 - $9)",
              gamaMedia: "COP $40,000 - $90,000 por persona (~USD $10 - $23)",
              lujo: "COP $100,000+ por persona (~USD $25+)"
          },
          enlacesReserva: [
              { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297477-Cali_Valle_del_Cauca_Department.html" },
              { nombre: "El País - Los recomendados de la gastronomía en Cali", url: "https://www.elpais.com.co/tendencias/los-recomendados-de-la-gastronomia-en-cali-2023.html" },
              { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Cali" },
              { nombre: "OpenTable-Restaurantes", url: "https://www.opentable.com/s/restaurants-near-cali" }
          ]
      }
  },
    
  Pereira: {
    alojamiento: {
        texto: "Pereira ofrece una mezcla de hoteles modernos en el centro y fincas tradicionales en las zonas rurales circundantes. Muchos alojamientos están vinculados a la cultura del café y ofrecen experiencias relacionadas.",
        imagen: "../img/alojamientoPereira.jpg",
        precios: {
            economicos: "COP $35,000 - $80,000 por noche (~USD $9 - $20)",
            gamaMedia: "COP $90,000 - $220,000 por noche (~USD $23 - $55)",
            lujo: "COP $250,000 - $600,000+ por noche (~USD $63 - $150+)"
        },
        enlacesReserva: [
            { nombre: "Booking.com", url: "https://www.booking.com/city/co/pereira.es.html" },
            { nombre: "Airbnb", url: "https://www.airbnb.com/s/Pereira--Colombia" },
            { nombre: "Expedia", url: "https://www.expedia.com/Pereira-Hotels.d6053006.Travel-Guide-Hotels" },
            { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/30789/i1/hoteles-en-pereira" },
            { nombre: "Hoteles.com", url: "https://co.hoteles.com/de6053006/hoteles-pereira-colombia/" }
        ]
    },
    restaurante: {
        texto: "La gastronomía de Pereira y la región del Eje Cafetero incluye platos como el mondongo, la trucha arcoíris y preparaciones a base de plátano. Los restaurantes ofrecen ambientes que van desde lo tradicional hasta lo contemporáneo.",
        imagen: "../img/restaurantePereira.webp",
        precios: {
            economicos: "COP $12,000 - $28,000 por persona (~USD $3 - $7)",
            gamaMedia: "COP $30,000 - $60,000 por persona (~USD $8 - $15)",
            lujo: "COP $70,000+ por persona (~USD $18+)"
        },
        enlacesReserva: [
            { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297483-Pereira_Risaralda_Department.html" },
            { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Pereira" },
        ]
    }
},
    
    Barranquilla: {
      alojamiento: {
          texto: "Barranquilla ofrece una variedad de alojamientos que van desde hoteles de negocios modernos hasta opciones más relajadas cerca de la costa. La hospitalidad de su gente se refleja en la calidad de sus servicios.",
          imagen: "../img/alojamientoBarranquilla.jpg",
          precios: {
              economicos: "COP $45,000 - $110,000 por noche (~USD $11 - $28)",
              gamaMedia: "COP $130,000 - $300,000 por noche (~USD $33 - $75)",
              lujo: "COP $320,000 - $1,000,000+ por noche (~USD $80 - $250+)"
          },
          enlacesReserva: [
              { nombre: "Booking.com", url: "https://www.booking.com/city/co/barranquilla.es.html" },
              { nombre: "Airbnb", url: "https://www.airbnb.com/s/Barranquilla--Colombia" },
              { nombre: "Expedia", url: "https://www.expedia.com/Barranquilla-Hotels.d178238.Travel-Guide-Hotels" },
              { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/6207/i1/hoteles-en-barranquilla" },
              { nombre: "Hoteles.com", url: "https://co.hoteles.com/de1641907/hoteles-barranquilla-colombia/" }
          ]
      },
      restaurante: {
          texto: "La gastronomía de Barranquilla destaca por sus sabores costeños, con platos como el arroz de lisa, el sancocho de guandú y una gran variedad de pescados y mariscos frescos. Los restaurantes a lo largo del río Magdalena y en zonas como Alto Prado son muy populares.",
          imagen: "../img/restauranteBarranquilla.jpeg",
          precios: {
              economicos: "COP $25,000 - $50,000 por persona (~USD $6 - $13)",
              gamaMedia: "COP $55,000 - $130,000 por persona (~USD $14 - $33)",
              lujo: "COP $140,000+ por persona (~USD $35+)"
          },
          enlacesReserva: [
              { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297475-Barranquilla_Atlantico_Department.html" },
              { nombre: "El Heraldo - Recomendados gastronómicos en Barranquilla", url: "https://www.elheraldo.co/gastronomia" },
              { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Barranquilla" },
              { nombre: "OpenTable-Restaurantes", url: "https://www.opentable.com/s/restaurants-near-barranquilla" }
          ]
      }
  },
    
  Armenia: {
    alojamiento: {
        texto: "Armenia, en el corazón del Eje Cafetero, ofrece hoteles cómodos y funcionales, así como fincas turísticas en las afueras que permiten disfrutar del paisaje y la cultura del café.",
        imagen: "../img/alojamientoArmenia.jpg",
        precios: {
            economicos: "COP $30,000 - $70,000 por noche (~USD $8 - $18)",
            gamaMedia: "COP $80,000 - $180,000 por noche (~USD $20 - $45)",
            lujo: "COP $200,000 - $500,000+ por noche (~USD $50 - $125+)"
        },
        enlacesReserva: [
            { nombre: "Booking.com", url: "https://www.booking.com/city/co/armenia.es.html" },
            { nombre: "Airbnb", url: "https://www.airbnb.com/s/Armenia--Colombia" },
            { nombre: "Expedia", url: "https://www.expedia.com/Armenia-Hotels.d6052667.Travel-Guide-Hotels" },
            { nombre: "Despegar", url: "https://www.despegar.com.co/hoteles/hl/30785/i1/hoteles-en-armenia" },
            { nombre: "Hoteles.com", url: "https://co.hoteles.com/de6052667/hoteles-armenia-colombia/" }
        ]
    },
    restaurante: {
        texto: "La gastronomía de Armenia comparte influencias del Eje Cafetero, con platos como el ajiaco, las arepas de chócolo y una fuerte cultura del café. Los restaurantes locales ofrecen experiencias culinarias auténticas.",
        imagen: "../img/restauranteArmenia.jpg",
        precios: {
            economicos: "COP $10,000 - $25,000 por persona (~USD $3 - $6)",
            gamaMedia: "COP $28,000 - $55,000 por persona (~USD $7 - $14)",
            lujo: "COP $60,000+ por persona (~USD $15+)"
        },
        enlacesReserva: [
            { nombre: "TripAdvisor-Restaurantes", url: "https://www.tripadvisor.co/Restaurants-g297474-Armenia_Quindio_Department.html" },
            { nombre: "Restaurant Guru", url: "https://restaurantguru.com/best-restaurants-in-Armenia-Colombia" },
            // OpenTable puede tener menos opciones específicas
        ]
    }
},
  }
  
  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
  }
  
  imagen_fondo(true);
  mostrar_caja();

  document.getElementById("buscar").addEventListener("click", () => {
    const nombreCiudad = normalizarTexto(document.getElementById("ciudad").value);
    const contenedor = document.getElementById("clima");
    contenedor.innerHTML = "";

    fetch("../json/clima.json")
      .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        return response.json();
      })
      .then(data => {
        const resultado = data.destinos.find(destino =>
          normalizarTexto(destino.ciudad) === nombreCiudad
        );
        
        if (resultado) {
          imagen_fondo(false);
          mostrar_caja(true)

          const ciudadKey = normalizarTexto(resultado.ciudad);
          const imagenCiudad = imagenesCiudades[ciudadKey] || "PageClima/imgClima/default.jpg";
  


          contenedor.innerHTML = `
            <div class="card-clima">
              <img src="${imagenCiudad}" alt="Imagen de ${resultado.ciudad}" class="imagen-ciudad" width="300">
              <div class="info-ciudad">
                <h3>${resultado.ciudad}</h3>
                <p>Temperatura: ${resultado.temperatura}°C</p>
                <p>Sensación térmica: ${resultado.sensacion_termica}°C</p>
                <p>Estado del cielo: ${resultado.estado_cielo}</p>
                <p>Humedad: ${resultado.humedad}%</p>
                <p>Viento: ${resultado.viento_kmh} km/h</p>
              </div>
            </div>
          `;
        } else {

          contenedor.innerHTML = `<p class="error-clima">No se encontró información para esa ciudad.</p>`;
        }
      })
      
      .catch(error => {
        console.error("Error al obtener los datos del clima:", error);
        contenedor.innerHTML = `<p>Hubo un error al obtener los datos.</p>`;
      });
  });
  document.getElementById("buscar").addEventListener("click", function () {
    const ciudad = document.getElementById("ciudad").value;
    const tituloCiudad = document.getElementById("tituloCiudadSeleccionada");
    const contenedor = document.getElementById("contenedorRecomendaciones");

    if (ciudad && dataRecomendaciones[ciudad]) {
        tituloCiudad.textContent = `Recomendaciones para tu destino: ${ciudad}`;
        const info = dataRecomendaciones[ciudad];

        // HTML para la sección de Alojamiento
        const preciosAlojamiento = info.alojamiento.precios;
        let preciosAlojamientoHTML = `
            <h4>Precios promedio por persona:</h4>
            <ul class="lista-precios">
                <li><strong class="economico">Económico:</strong> ${preciosAlojamiento.economicos}</li>
                <p></p>
                <li><strong class="gama-media">Gama media:</strong> ${preciosAlojamiento.gamaMedia}</li>
                <p></p>
                <li><strong class="lujo">Lujo:</strong> ${preciosAlojamiento.lujo}</li>
                <p></p>
            </ul>
        `;

        let enlacesAlojamientoHTML = `
            <h5 class="reserva-titulo">Reserva de alojamiento en línea:</h5>
            <ul class="lista-enlaces">
                ${info.alojamiento.enlacesReserva.map(
                    (enlace) => `<li><a href="${enlace.url}" target="_blank">${enlace.nombre}</a></li>`
                ).join("")}
            </ul>
        `;

        // HTML para la sección de Restaurantes
        const preciosRestaurantes = info.restaurante.precios;
        let preciosRestaurantesHTML = `
            <h4>Precios promedio por persona:</h4>
            <ul class="lista-precios">
                <li><strong class="economico">Económico:</strong> ${preciosRestaurantes.economicos}</li>
                <p></p>
                <li><strong class="gama-media">Gama media:</strong> ${preciosRestaurantes.gamaMedia}</li>
                <p></p>
                <li><strong class="lujo">Lujo:</strong> ${preciosRestaurantes.lujo}</li>
                <p></p>
            </ul>
        `;

        let enlacesRestaurantesHTML = `
            <h5 class="reserva-titulo">Buscar restaurantes en línea:</h5>
            <ul class="lista-enlaces">
                ${info.restaurante.enlacesReserva.map(
                    (enlace) => `<li><a href="${enlace.url}" target="_blank">${enlace.nombre}</a></li>`
                ).join("")}
            </ul>
        `;

        contenedor.innerHTML = `
            <div class="card-horizontal">
                <div class="card-imagen">
                    <img src="${info.alojamiento.imagen}" alt="Alojamiento en ${ciudad}">
                    ${enlacesAlojamientoHTML}
                </div>
                <div class="card-texto">
                    <h3>Alojamientos</h3>
                    <p>${info.alojamiento.texto}</p>
                    ${preciosAlojamientoHTML}
                </div>
            </div>

            <div class="card-horizontal reverse">
                <div class="card-imagen">
                    <img src="${info.restaurante.imagen}" alt="Restaurante en ${ciudad}">
                    ${enlacesRestaurantesHTML}
                </div>
                <div class="card-texto">
                    <h3>Restaurantes</h3>
                    <p>${info.restaurante.texto}</p>
                    ${preciosRestaurantesHTML}
                </div>
            </div>
        `;

        contenedor.style.display = 'block';
    } else {
        tituloCiudad.textContent = ciudad ? `No tenemos recomendaciones para ${ciudad} aún.` : "";
        contenedor.innerHTML = "";
        contenedorInicio.style.display = 'none';
    }
    
});
document.addEventListener('DOMContentLoaded', function() {
    const contenedorInicio = document.getElementById('contenedorRecomendaciones');
    if (contenedorInicio) {
        contenedorInicio.style.display = 'none';
    }
});
});


function mostrar_caja(mostrar){
    if (mostrar){
      document.getElementById('clima').style.display = 'block'
    }else{
      document.getElementById('clima').style.display = 'none'
    }
  }

function imagen_fondo(heroImage){
  if (heroImage){
    document.getElementById('imagen-hero').innerHTML = `<img src="../img/imagen-fondo-3.avif" alt="Fondo clima">`;
  }else{
    document.getElementById('imagen-hero').innerHTML = ``
  }
}
document.getElementById("buscar").addEventListener("click", function() {
  const ciudadSeleccionada = document.getElementById("ciudad").value;
  const tituloCiudad = document.getElementById("tituloCiudadSeleccionada");

  if (ciudadSeleccionada) {
    tituloCiudad.textContent = `Recomendaciones para tu destino: ${ciudadSeleccionada}`;
  } else {
    tituloCiudad.textContent = "";
  }
});

