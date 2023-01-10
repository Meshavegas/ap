import React from "react";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import { Rating } from "primereact/rating";
import { TabView, TabPanel } from "primereact/tabview";
import { useParams } from "react-router-dom";
import Navbar from "../Compoment/Navbar";
import DashBord from "../Compoment/DashBord";
import "../styles/cour.scss";
import TopBar from "../Compoment/TopBar";
const Cour = () => {
  const courses = [
    {
      id: 1,
      name: "Introduction à la programmation",
      duration: "5 heures",
      courseLogo: "https://picsum.photos/200/200",
      description:
        " Ce cours vous enseignera les bases de la programmation en utilisant le langage Java.Le Java est l'un des langages de programmation les plus populaires et les plus utilisés dans le monde. Cela signifie qu'il y a une forte demande pour les développeurs Java et que les possibilités de carrière sont nombreuses. Le Java est un langage polyvalent qui peut être utilisé pour développer une grande variété de types d'applications, y compris celles pour les ordinateurs de bureau, les serveurs, les appareils mobiles et le Web. Le Java est largement utilisé dans l'industrie et est souvent utilisé par de grandes entreprises pour développer des applications commerciales critiques.",
      lessons: [
        {
          id: 1,
          name: "Leçon 1: Introduction à la programmation",
          duration: "1 heure",
          videoUrl:
            "https://www.shutterstock.com/shutterstock/videos/1044255715/preview/stock-footage-person-signing-important-document-camera-following-tip-of-the-pen-as-it-signs-crucial-business.webm",
        },
        {
          id: 3,
          name: "Leçon 3: Opérateurs et expressions",
          duration: "1 heure",
          videoUrl:
            "https://www.shutterstock.com/shutterstock/videos/1044255715/preview/stock-footage-person-signing-important-document-camera-following-tip-of-the-pen-as-it-signs-crucial-business.webm",
        },
        {
          id: 4,
          name: "Leçon 4: Structures de contrôle de flux",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson4.mp4",
        },
        {
          id: 5,
          name: "Leçon 5: Fonctions et méthodes",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson5.mp4",
        },
      ],
      instructor: [
        {
          nom: "John",
          id: 1,
          note: 85,
          prenom: "Doe",
          photoUrl: "https://thispersondoesnotexist.com/image",
        },
      ],
    },
    {
      id: 2,
      name: "Algorithmes et structures de données",
      duration: "7 heures",
      courseLogo: "https://picsum.photos/200/200",
      description:
        "Ce cours vous enseignera les concepts de base des algorithmes et des structures de données, tels que les listes, les piles et les files.SQL (Structured Query Language) est un langage de base de données standard utilisé pour créer, lire, mettre à jour et supprimer des données dans les bases de données relationnelles. C'est l'un des langages de base de données les plus populaires et les plus utilisés dans le monde.",
      lessons: [
        {
          id: 1,
          name: "Leçon 1: Introduction aux algorithmes",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson1.mp4",
        },
        {
          id: 2,
          name: "Leçon 2: Recherche et tri",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson2.mp4",
        },
        {
          id: 3,
          name: "Leçon 3: Structures de données de base",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson3.mp4",
        },
        {
          id: 4,
          name: "Leçon 4: Structures de données avancées",
          duration: "1 heure",
          videoUrl: "https://www.example.com/lesson3.mp4",
        },
      ],
      instructor: [
        {
          nom: "Jane",
          id: 2,
          note: 90,
          prenom: "Doe",
          photoUrl: "https://thispersondoesnotexist.com/image",
        },
        {
          nom: "Jane",
          id: 2,
          note: 90,
          prenom: "Doe",
          photoUrl: "https://thispersondoesnotexist.com/image",
        },
      ],
    },
  ];
  const { courseId } = useParams();
  const course = courses.find((c) => c.id == courseId);
  return (
    <div style={{ display: "flex" }}>
      <DashBord />
      <div className="card m-4 ">
        

        <h1>{course.name}</h1>
        <h2>Leçons</h2>
        <div className="lesson-list card-container">
          <TabView>
            {course.lessons.map((lesson) => (
              <TabPanel header={lesson.name}>
                <h3>{lesson.name}</h3>
                <p>Durée: {lesson.duration}</p>
                <button>
                  <iframe
                    width="530px"
                    height="300px"
                    src={lesson.videoUrl}
                    type="video/mp4"
                    title="Youtube Player"
                    allowFullScreen
                    style={{ border: "none" }}
                  />

                  {/* <a href={lesson.videoUrl}>Regarder la vidéo</a> */}
                </button>
              </TabPanel>
            ))}
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default Cour;
