import React, { useState } from "react";
import "./Modal.css";

import x from './Images/x.svg'
import mainIsland from './Images/mainIsland.svg'
import mainWebsite from './Images/mainWebsite.png'
import mainHandTracking from './Images/MainHandProject.png'
import mainFinaceApp from './Images/mainFinancialApp.jpg'
import mainMathGame from './Images/MainMathGame.png'


export default function Modal() {
  const [modal1, setModal1] = useState(false); // State for the first modal
  const [modal2, setModal2] = useState(false); // State for the second modal
  const [modal3, setModal3] = useState(false); // State for the third modal
  const [ModalSecond, setModalSecond] = useState(false); // State for the second modal
  const [ModalThird, setModalThird] = useState(false); // State for the third modal

  let islandurl = "https://github.com/JeremyOrr4/a4-urbanism-JeremyOrr4";
  let HandTrackurl = " https://github.com/JeremyOrr4/ASL-Tracker";
  let FinaceURL = "https://github.com/JeremyOrr4/Financial-Java-GUI";
  let MathGame = "https://github.com/JeremyOrr4/MathEducationProgram";
  let websiteUrL = " https://JeremyOrr4.github.io";


  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  const toggleModalSecond = () => {
    setModalSecond(!ModalSecond);
  };

 const toggleModalThird = () => {
    setModalThird(!ModalThird);
  };

  if (modal1 || modal2 || modal3 || ModalSecond || ModalThird) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="PopUp-Background">
        <button onClick={toggleModal1} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>SIGN LANGUAGE TO<br />SPEECH AND TEXT CONVERTOR</h1>
            <img className="projPic" alt="Pic of project" src={mainHandTracking}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> A Machine Learning application to take your sign language gestures and convert them into text and speech in real time. Great for practing ASL.</figcaption>
            <p1 className="clickMoreText">Click For More Info</p1>
          </div>
        </button>

        <button onClick={toggleModal2} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>RANDOM ISLAND<br />GENERATOR</h1>
            <img className="projPic" alt="Pic of project" src={mainIsland}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Island generator to create a SVG that is completly customizable with 12+ features. Add lakes, custom seeds, and much much more.</figcaption>
            <p1 className="clickMoreText">Click For More Info</p1>
          </div>
        </button>

        <button onClick={toggleModal3} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>PERSONAL WEBSITE</h1>
            <img className="projPic" alt="Pic of project" src={mainWebsite}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> My personal website that uses React, JQuery,<br />Javascript, three.js, Css, and HTML</figcaption>
            <p1 className="clickMoreText">Click For More Info</p1>
          </div>
        </button>

        <button onClick={toggleModalSecond} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>Financial GUI App</h1>
            <img className="projPic" alt="Pic of project" src={mainFinaceApp}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> An applicaiton that has intrest rate calculation, see invesements, and random card pin generation.</figcaption>
            <p1 className="clickMoreText">Click For More Info</p1>
          </div>
        </button>

        <button onClick={toggleModalThird} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>Math Education Program</h1>
            <img className="projPic" alt="Pic of project" src={mainMathGame}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> A great way to practice your math at all skill levels. Practice addition all the way up to vectors</figcaption>
            <p1 className="clickMoreText">Click For More Info</p1>
          </div>
        </button>

      </div>

      {modal1 && (
        <div className="modal">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
          <p style={{ whiteSpace: "pre-wrap" }}>
              This project I wanted to learn more about Machine Learning. I created a hand tacking module that would help detect your hand geusture, and through tensor flow was able to acuratly translate that gesture into a letter. <br /><br />
              I've used this application to help out 2 sign langiage users to see the effectivess as well as what needed to be included. This was my first proejct where I was able to get feedback and it was great seeing people practice and try out their skills with it.<br /><br />
              Likewsie, I used roughly 15,000+ pictures of all the sign language gestures to do this, so I also needed to create a way to create the data, so I created a data collection python application. To regiuze the image I used Google's teachable machien that created the Keras Model.<br /><br />
          </p>
            <a target="_blank" rel="noopener noreferrer" className="github" href={HandTrackurl}>CODE/GITHUB</a>
            <img alt="Close Window" className="close-modal" onClick={toggleModal1} src={x}></img>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
            <p style={{ whiteSpace: "pre-wrap" }}>
              First off, I want to give credit to Aidan Goodyer and Nathan Perry, the two other members of this project. Go check them out!<br /><br />
              Our project is written in Java and is an Island generator and visualizer, using Maven, Apache CLI, and a Java SVG library. You can create unique islands based on user-defined characteristics and random elements. You have the freedom to customize the island's shape, create cities of varying sizes, incorporate beautiful lagoons, and even visualize elevation and humidity levels with color shading. Head over to our GitHub repository and create your very own islands to experience the magic!<br /><br />
              I created the city generation which leverages a custom-made Graph ADT (Abstract Data Type) and uses Dijkstra's shortest path algorithm to connect all the cities. These cities are marked by red dots, while the black lines represent the roads on the island. Creating the Graph library enhanced my knowledge of data structures and algorithms while gaining hands-on experience in handling complex data structures and tackling real-world challenges.<br /><br />
              Throughout the three month project development process, we worked on it for our Software Development course. The course covered topics like SOLID principles, OOP structure, Testing, Design Patterns, Clean Code, and more. As a result, we all learned a lot.<br /><br />
              Overall, I learned how to work in a team and what it means to be a small part of something much bigger. Go check out the GitHub repository!”<br /><br />
              <a target="_blank" rel="noopener noreferrer" className="github" href={islandurl}>CODE/GITHUB</a>
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModal2} src={x}></img>
          </div>
        </div>
      )}

      {modal3 && (
        <div className="modal">
          <div onClick={toggleModal3} className="overlay"></div>
          <div className="modal-content">
            <p1 style={{ whiteSpace: "pre-wrap" }}>
            Welcome to my personal website! Here, I've combined all my passions and my proficiency in web development to create a unique experience for visitors. The website was built using a stack that includes React, Node.js, Three.js, jQuery, JavaScript, CSS, and HTML.<br /><br />
            For showcasing my React skills, I utilized React's hooks extensively throughout the website. This allowed me to demonstrate my frontend expertise and create a polished user interface. Additionally, I've integrated some backend knowledge to enhance the overall functionality.<br /><br />
            One of the highlights of this website is the Music page, where you can delve into my musical world. Music is not just a hobby but a deep-rooted passion of mine, and I wanted to share it with you. Also, make sure you try playing with the 3D models by right and left clicking. There are different models so see if you can get them all!<br /><br />
            You’re still reading this after all that! Go explore the website and thank you for taking the time to visit.<br /><br />
            <a target="_blank" rel="noopener noreferrer" className="github" href={websiteUrL}>CODE/GITHUB</a>
            </p1>
            <img alt="Close Window" className="close-modal" onClick={toggleModal3} src={x}></img>
          </div>
        </div>
      )}

      {ModalSecond && (
        <div className="modal">
          <div onClick={toggleModalSecond} className="overlay"></div>
          <div className="modal-content">
            <p>
            An older project of mine that is written in Java. This was done in my last Computer Science class of highschool. It feautes the use of JAva's GUI system and having to learn all of this myself was incredibly difficult. I was able to make this finacial application which I am pretty proud of.<br /><br />
            I used Java Swing and used a lot of these Java components to create my applicaiton. Ended up getting a great mark!!<br /><br />  
            <a target="_blank" rel="noopener noreferrer" className="github" href={FinaceURL}>CODE/GITHUB</a>
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModalSecond} src={x}></img>
          </div>
        </div>
      )}

      {ModalThird && (
        <div className="modal">
          <div onClick={toggleModalThird} className="overlay"></div>
          <div className="modal-content">
           <p>
           This was the first ever project I did for my computer science class. This code is incredibly old, but it shows where I came from as a programmer. This was written in Java and has all the fundamental programming techniques.<br /><br />
           Like I said, this code is VERY old and I have improved a lot over my journey to where I am now. Check out the code. Super simple stuff. <br /><br />
           <a target="_blank" rel="noopener noreferrer" className="github" href={MathGame}>CODE/GITHUB</a>
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModalThird} src={x}></img>
          </div>
        </div>
      )}
    </>
  );
}
