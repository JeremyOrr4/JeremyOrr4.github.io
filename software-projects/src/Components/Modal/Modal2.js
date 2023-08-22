// import React, { useState } from "react";
// import "./Modal.css";

// import x from './Images/x.svg'
// import mainFinaceApp from './Images/mainFinancialApp.jpg'
// import mainMathGame from './Images/MainMathGame.png'

// export default function Modal() {
//   const [ModalSecond, setModalSecond] = useState(false); // State for the second modal

//   const toggleModalSecond = () => {
//     setModalSecond(!ModalSecond);
//   };

//   const [ModalThird, setModalThird] = useState(false); // State for the third modal

//   const toggleModalThird = () => {
//     setModalThird(!ModalThird);
//   };

//   if (ModalSecond || ModalThird) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <>
//       <div className="PopUp-Background">
//         <button onClick={toggleModalSecond} className="btn-modal">
//           <div className="buttonContent">
//             <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>Financial GUI App</h1>
//             <img className="projPic" alt="Pic of project" src={mainFinaceApp}></img>
//             <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> An applicaiton that has intrest rate calculation, see invesements, and random card pin generation.</figcaption>
//             <p1 className="clickMoreText">Click For More Info</p1>
//           </div>
//         </button>

//         <button onClick={toggleModalThird} className="btn-modal">
//           <div className="buttonContent">
//             <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>Math Education Program</h1>
//             <img className="projPic" alt="Pic of project" src={mainMathGame}></img>
//             <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Another description for the second button...</figcaption>
//             <p1 className="clickMoreText">Click For More Info</p1>
//           </div>
//         </button>
//       </div>

//       {ModalSecond && (
//         <div className="modal">
//           <div onClick={toggleModalSecond} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modal 1
//               content...
//             </p>
//             <img alt="Close Window" className="close-modal" onClick={toggleModalSecond} src={x}></img>
//           </div>
//         </div>
//       )}

//       {ModalThird && (
//         <div className="modal">
//           <div onClick={toggleModalThird} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal 2</h2>
//             <p>
//               Another modal content...
//             </p>
//             <img alt="Close Window" className="close-modal" onClick={toggleModalThird} src={x}></img>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
