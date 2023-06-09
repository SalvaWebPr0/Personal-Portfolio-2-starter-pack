import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Diseño Web",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Desarrollo Web Ap",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Identidad de Marca",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Te ayudaré a encontrar una solución y resolver cualquier problema. Utilizamos los lineamientos fundamentales del diseño para crear productos digitales. Además de que también ayudan a sus negocios.",
  "Usamos este proceso de diseño para crear productos digitales que ayuden a hacer crecer tu negocio y tu marca.",
];

export const workExp = [
  {
    place: "Freelancer, Mexico",
    tenure: "Jul 1998 - Sep 2002",
    role: "Administrador de Redes y Sistemas",
    detail:
      "Un administrador de sistemas para una variedad de pequeñas y medianas empresas en Guadalajara, Mexico.",
  },
  {
    place: "Orbit Metrocom Inc.",
    tenure: "Oct 2002 - May 2008",
    role: "Administrador de Sistemas",
    detail:
      "Un administador de sistemas y desarrollo web para una start up de telecomunicaciones en Ontario, CA, USA.",
  },
  {
    place: "Emilianos Restaurant Sonoran Sun",
    tenure: "Jul 2008 - Nov 2010",
    role: "Desarrollo Web y Administador de Sistemas",
    detail:
      "Desarrollador Web y administador de sistemas para una cadena de restaurantes en la ciudad de Puerto Peñasco Mexico.",
  },
];

export const comments = [
  {
    name: "Esteban Linares",
    post: "Gerente General",
    comment:
      "Salvador tiene una etica de trabajo excelente, es muy eficaz y siempre va mas haya de lo que uno le solicita.",
    img: "./people2.png",
  },
  {
    name: "Carlos Tabares",
    post: "Administrador",
    comment:
      "Es muy dificil encontrar buen soporte tecnico y que ademas tenga la paciencia y disposicion de explicar su proceso de trabajo.",
    img: "./people1.png",
  },
  {
    name: "Ana Olivares",
    post: "Creative Manager",
    comment:
      "Tome un curso presencial para el manejo de redes sociales y introduccion al Marketing que realmente me ayudo a crecer mi presencia en linea.",
    img: "./people2.png",
  },
  {
    name: "Lilia Hernandez",
    post: "Gerente General",
    comment:
      "La capacitacion nuestro personal fue muy buena, Salvador es muy atento y nunca te deja en visto cuando le mandas un mensaje.",
    img: "./people1.png",
  },
  {
    name: "Rene Alvarado",
    post: "Chef Ejecutivo",
    comment:
      "Trabaje con Salvador por qprox. 3 años y durante ese tiempo no solo transformo la presencia de mi marca si no que tambien se convirtio en un buen amigo.",
    img: "./people2.png",
  },
  {
    name: "Claudia Sandoval",
    post: "Dentista Especializada",
    comment:
      "Conosco a Salvador toda mi vida y es una persona con una etica de trabajo muy profesional y siempre cumple con lo prometido.",
    img: "./people1.png",
  },
  {
    name: "Esmeralda Ortiz",
    post: "Administrador",
    comment:
      "Estoy muy contento con los servicios de Salvador, tenemos varios años colaborando, sus precios son justos y la calidad de sus trabajos es excelente.",
    img: "./people2.png",
  },
  {
    name: "Adrian Andrade",
    post: "Agencia de Marketing",
    comment:
      "Como agencia colaboramos con varios desarrolladores web, y Salvador es simplemente el mejor, debido a eso siempre maneja nuestro clientes mas importantes.",
    img: "./people1.png",
  },
  {
    name: "Felipe Guerrero",
    post: "Freelancer",
    comment:
      "Como agente independiente mi reputacion es crucial, y es por eso que Salvador es al que le refiero la mayoria de mis contratos.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
