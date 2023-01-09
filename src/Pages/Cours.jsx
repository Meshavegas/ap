import React from "react";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import { Rating } from "primereact/rating";
import { TabView, TabPanel } from "primereact/tabview";
import { Link } from "react-router-dom";
export const Cours = () => {
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
  return (
    <div>
      <div className="mx-4 courses">
        <h1>Cours en ligne</h1>
        <div className="course-list">
          {courses.map((course) => (
            <Panel
              header={course.name}
              toggleable
              className="mb-2 mx-2"
              style={{ background: "#ddd" }}
            >
              <div className="grid">
                <div style={{ margin: "10px" }} className="col-10 md:col-3">
                  <img src={course.courseLogo} width="100%" />
                </div>
                <div style={{ margin: "10px" }} className="col-10 md:col-8">
                  <h2 style={{ borderBottom: "10px" }}>{course.name}</h2>
                  <p style={{ textAlign: "justify", textIndent: "20px" }}>
                    {course.description}
                    <br />

                    <Link
                      to={`/courses/${course.id}`}
                      style={{ textAlign: "left", marginTop: "10px" }}
                    >
                      <Button> Consulter</Button>
                    </Link>
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "GrayText",
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Durée: {course.duration}
                  </p>

                  <p
                    className="mt-1"
                    style={{
                      lineHeight: "1.5",
                      marginTop: "10px",
                      display: "flex",
                    }}
                  >
                    {course.instructor.map((int) => (
                      <div
                        style={{
                          display: "flex",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <img
                          width="100px"
                          height="100px"
                          src={int.photoUrl}
                          style={{ borderRadius: "50%", marginRight: "20px" }}
                        />
                        <div>
                          <h3>
                            {int.nom} {int.prenom}{" "}
                          </h3>

                          <p>
                            <Rating value={int.note} cancel={false} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
};
