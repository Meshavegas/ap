import React from "react";
import illustration from "../assets/img.png";
import students from "../assets/students1.jpg";
import students1 from "../assets/yellowgirl.jpg";
import Carousel from "./Carousel";
import Etablissement from "./Etablissement";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

export default function Corps() {
  //     const [school, setSchool] = useState([{nom: 'Lycee bilingue de mimboman'
  //     , image: Etablissement, description: `hello nous somme un établissement d'éducation secondaire pour les jeunes enfants`
  // }]);
  return (
    <div>
      <section className="px-10 py-10 max-w-5xl grid grid-cols-1 md:px-20 lg:max-w-7xl lg:grid-cols-2 xl:max-w-full">
        <div className="flex flex-col justify-center items-start px-2">
          <h1 className=" text-4xl font-bold max-w-dm">
            Apprenez facilement dans une classe virtuelle avec NextGEL
          </h1>
          <p className=" my-5">
            NextGEL est une application d'apprentissage en ligne développée par
            de jeunes étudiants camerounais pour inspirer les jeunes. Aucun
            jeune ne doit être laissé pour compte dans la course à l'innovation
            technologique.
          </p>
          <div className="bg-[#2563eb] text-white px-6 py-2 w-auto rounded-full flex mt-5">
            <Link to="/etablisement">Commencer</Link>
          </div>
        </div>
        <div className="mt-10">
          <img src={illustration} alt="" />
        </div>
      </section>
      <section className="px-10 py-7 mt-5 m-auto flex flex-col items-center bg-gray-50">
        <h1 className="text-2xl font-semibold max-w-dm pt-5">
          Que proposons-nous ?{/* syst-me d'authentification */}
        </h1>
        <section className="max-w-2xl px-5 py-5 mt-5 grid grid-cols-1 gap-y-8 lg:max-w-5xl lg:grid-cols-3 m-auto gap-x-5 ">
          <div className="p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center">
            <div className="rounded-full  border mb-5 p-4 border-emerald-400 text-emerald-400 text-3xl flex justify-center self-center">
              <ion-icon name="desktop"></ion-icon>
            </div>
            <h2 className="font-semibold text-center">Salle Virtuel</h2>
            <p className="text-sm text-gray-500 my-5">
              Une salle de classe virtuelle est une plateforme en ligne où les
              enseignants et les étudiants peuvent interagir et collaborer en
              temps réel. Les participants peuvent utiliser des outils tels que
              des vidéoconférences, des tableaux blancs interactifs, des
              discussions en direct, des quizz et des devoirs en ligne pour
              simuler une expérience d'apprentissage en personne.
            </p>
            <a href="#">Apprendre plus</a>
          </div>
          <div className="p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center">
            <div className="rounded-full border mb-5 p-5 border-red-400 text-red-400 text-3xl flex justify-center self-center">
              <ion-icon name="logo-octocat"></ion-icon>
            </div>
            <h2 className="font-semibold text-center">
              Tests en ligne et évaluation des connaissances
            </h2>
            <p className="text-sm text-gray-500 my-5">
              Les enseignants peuvent utiliser l'application pour créer des
              tests en ligne pour évaluer les connaissances des étudiants. Les
              enseignants peuvent choisir parmi une variété de types de
              questions, comme les questions à choix multiple, les vrai/faux,
              les questions à réponse courte, etc. Les enseignants peuvent
              également utiliser des outils d'analyse pour évaluer les
              performances des étudiants.
            </p>
            <a href="#">Apprendre plus</a>
          </div>
          <div className="p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center">
            <div className="rounded-full border mb-5 p-4 border-blue-400 text-blue-400 text-3xl flex justify-center self-center">
              <ion-icon name="bookmarks"></ion-icon>
            </div>
            <h2 className="font-semibold text-center">
              Intégration de contenus multimédias
            </h2>
            <p className="text-sm text-gray-500 my-5">
              L'application permet aux enseignants d'intégrer des images, des
              vidéos et des podcasts dans leurs cours pour rendre
              l'apprentissage plus interactif et plus engageant pour les
              étudiants. Les enseignants peuvent utiliser des images pour
              illustrer des concepts, des vidéos pour présenter des
              démonstrations ou des expériences, et des podcasts pour fournir
              des enregistrements audio de leurs leçons.
            </p>
            <a href="3">Apprendre plus</a>
          </div>
        </section>
      </section>
      <section className="px-10 py-10 mt-5 xl:px-20">
        <h1
          className="text-2xl font-semibold max-w-dm py-5 text-center"
          id="about"
        >
          {/* syst-me d'authentification */}
          <Element name="about">Qui sommes nous ?</Element>
        </h1>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          <img src={students} alt="etudiant" className="cover rounded-lg" />
          <div className="mt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-lg font-semibold text-gray-600 ">
              Un groupe qui oeuvre pour éducation en Afrique{" "}
            </h1>
            <p className="mt-3 text-gray-500">
              un partenariat international qui travaille pour accélérer les
              progrès de l'éducation en Afrique en mobilisant des fonds et en
              soutenant les gouvernements à améliorer l'éducation
            </p>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 reverse grid-reverse">
          <img
            src={students1}
            alt="etudiant"
            className="cover rounded-lg lg:order-1"
          />
          <div className="mt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-lg font-semibold text-gray-600">
              {"Une initiative visant à digitaliser l'apprentissage"}
            </h1>
            <p className="mt-3 text-gray-500 ">
              Initiative visant à numériser le processus éducatif au Cameroun,
              en développant des applications d'apprentissage en ligne pour les
              Camerounais. Pas une initiative de jeunes camerounais en quête
              d'innovation technologique
            </p>
          </div>
        </div>
      </section>
      <section className="my-5 xl:px-20 xl:mb-20 ">
        <h1
          className="text-2xl mb-10 font-semibold max-w-dm py-5 text-center"
          id="school"
        >
          Etablissement
          {/* syst-me d'authentification */}
        </h1>
        <div className="">
          <div className="flex justify-center items-center gap-2">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="px-10 py-20 mt-5 bg-gray-100">
        <h1
          className="text-2xl font-semibold max-w-dm py-5 mb-10 text-center"
          id="contact"
        >
          <Element name="contact">Contacts</Element>
          {/* syst-me d'authentification */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 xl:px-10 ">
          <div>
            <div className="flex p-6 bg-white rounded mt-6 md:mt-0">
              <div className="rounded-full border  p-3 bg-blue-500 text-white text-xl flex ">
                <ion-icon name="call"></ion-icon>
              </div>
              <div className="ml-4">
                <h2 className=" font-semibold text-gray-900">Phone Number</h2>
                <span className="text-gray-400">+2370699-663-269</span>
              </div>
            </div>
            <div className="flex p-6 bg-white rounded mt-2">
              <div className="rounded-full border  p-3 bg-blue-500 text-white text-xl flex ">
                <ion-icon name="mail"></ion-icon>
              </div>
              <div className="ml-4">
                <h2 className=" font-semibold text-gray-900">Mail Address</h2>
                <span className="text-gray-400">nysentreprise@gmail.com</span>
              </div>
            </div>
            <div className="flex p-6 bg-white rounded mt-2">
              <div className="rounded-full border  p-3 bg-blue-500 text-white text-xl flex ">
                <ion-icon name="pin"></ion-icon>
              </div>
              <div className="ml-4">
                <h2 className=" font-semibold text-gray-900">Location</h2>
                <span className="text-gray-400">
                  Rue fouda près des collecteurs
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-6 bg-white rounded mt-2 md:mt-0">
            <div className="flex flex-col w-full">
              <h2 className=" font-semibold text-gray-900 mb-5">
                Send Message
              </h2>
              <form action="" className="flex">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="focus:outline-0 flex-1 mb-5"
                  placeholder="Envoyer un message"
                ></textarea>
              </form>
              <button className="py-2 px-10 self-start bg-blue-500 rounded text-white">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
