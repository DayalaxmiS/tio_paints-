const paints = [
  {
    name: "Undercoats",
    child: [
      {
        name: "Wallputty",
        child: ["Tio Maxx Wallputty"],
        img: "./Images/products/wallputty.png"
      },
      {
        name: "Primer",
        child: [
          "Tio Interior Primer",
          "Tio Maxx Exterior Primer",
          "Tio 2in1 Primer",
        ],
        img: "../Images/products/wood_primer.png"
      },
    ],
    route: "/paints/undercoats",
    img_desc: "../Images/set_1/Wallputty.jpg"
  },
  {
    name: "Interior Emulsions",
    child: [
      {
        name: "JAZZMI Interior Emulsion",
        img: "../Images/products/interior_emulsion.png"
      },
    ],
    route: "/paints/interioremulsions",
    img_desc: "../Images/set_1/Emulsion.jpg"
  },
  {
    name: "Exterior Emulsions",
    child: [
      {
        name: "MAXXPRO Exterior Emulsion",
        img: "../Images/products/exterior_emulsion_pro.png"
      },
    ],
    route: "/paints/exterioremulsions",
    img_desc: "../Images/set_1/Emulsion.jpg"
  },
];
const tilingSolutions = [
  {
    name: "Tile Adhesives",
    child: [
      {
        name: "Tio Bond 101",
        img: "../Images/products/tiobond101.png"
      },
      {
        name: "Tio Bond 202",
        img: "../Images/products/tiobond202.png"
      },
      {
        name: "Tio Bond 303",
        img: "../Images/products/tiobond303.png"
      },
    ],
    route: "/tilingsolutions/tileadhesives",
    img_desc: "../Images/set_1/Tio_Bond.jpg"
  },
  {
    name: "Tile Grout",
    child: [
      {
        name: "Tio Maxx Grout",
        img: "../Images/products/maxx_grout.png"
      },
      {
        name: "Tio Epoxy Grout",
        img: "../Images/products/epoxy_grout.png"
      },
      {
        name: "Tio RoofTile Grout",
        img: "../Images/products/roof_tile_grout.png"
      },
    ],
    route: "/tilingsolutions/tilegrout",
    img_desc: "../Images/set_1/Tio_Grout.jpg"
  },
  {
    name: "Tile Cleaner",
    route: "/tilingsolutions/tilecleaner",
    img_desc: "../Images/set_1/Tile_Cleaner.jpg"
  },
];
const constructionChemicals = [
  {
    name: "Water Proofing",
    child: [
      {
        name: "TioLastick2k",
        img: "../Images/products/tiolastic_2k.png"
      },
    ],
    route: "/constructionchemicals/waterproofing",
    img_desc: "../Images/set_1/Constructions_Chemical.jpg"
  },
  {
    name: "Bonding Agents",
    child: [
      {
        name: "SBR latex",
        img: "../Images/products/sbr_latex.png"
      },
      {
        name: "Tio Bond EP",
        img: "../Images/products/no_img_available.png"
      },
    ],
    route: "/constructionchemicals/bondingagents",
    img_desc: "../Images/set_1/Constructions_Chemical.jpg"
  },
  {
    name: "Admixture",
    child: [
      {
        name: "Tio 222",
        img: "../Images/products/no_img_available.png"
      },
    ],
    route: "/constructionchemicals/admixture",
    img_desc: "../Images/set_1/Constructions_Chemical.jpg"
  },
];
const kitchenSinks = [
  {
    name: "Glossy Finish",
    child: [
      {
        name: "Glossy Plain",
        img: "../Images/products/no_img_available.png"
      },
      {
        name: "Glossy Ceramic Coating",
        img: "../Images/products/no_img_available.png"
      },
    ],
    route: "/kitchensinks/glossyfinish",
    img_desc: "../Images/set_1/Sink.jpg"
  },
  {
    name: "Matt Finish",
    child: [
      {
        name: "Matt Ceramic Coating",
        img: "../Images/products/no_img_available.png"
      },
    ],
    route: "/kitchensinks/mattfinish",
    img_desc: "../Images/set_1/Sink.jpg"
  },
  {
    name: "Handmade Sinks",
    route: "/kitchensinks/handmadesinks",
    img_desc: "../Images/set_1/Sink.jpg"
  },
];

export const navItems = [
  {
    key: 0,
    name: "HOME",
    route: "/",
  },
  {
    key: 1,
    name: "PAINTS",
    child: paints,
    route: "/paints",
    img: [
      "./Images/set_1/Enamel_Solvent_Based.jpg",
      "./Images/set_1/Prime-d.jpg",
    ],
  },
  {
    key: 2,
    name: "TILING SOLUTIONS",
    child: tilingSolutions,
    route: "/tilingsolutions",
    img: ["./Images/set_1/Tio_Grout.jpg"],
  },
  {
    key: 3,
    name: "CONSTRUCTION CHEMICALS",
    child: constructionChemicals,
    route: "/constructionchemicals",
    img: ["./Images/set_1/Constructions_Chemical.jpg"],
  },
  {
    key: 4,
    name: "KITCHEN SINKS",
    child: kitchenSinks,
    route: "/kitchensinks",
    img: ["./Images/set_1/Sink.jpg"],
  },
];
