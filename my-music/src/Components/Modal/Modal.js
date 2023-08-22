import React, { useState } from "react";
import "./Modal.css";

import x from './Images/x.svg'
import headphones from './Images/headphones.jpg'

export default function Modal() {
  const [modal1, setModal1] = useState(false); // State for the first modal
  const [modal2, setModal2] = useState(false); // State for the second modal
  const [modal3, setModal3] = useState(false); // State for the third modal
  const [modal4, setModal4] = useState(false); // State for the third modal
  const [modal5, setModal5] = useState(false); // State for the third modal

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  const toggleModal4 = () => {
    setModal4(!modal4);
  };

  const toggleModal5 = () => {
    setModal5(!modal5);
  };

  if (modal1 || modal2 || modal3 || modal4 || modal5) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="PopUp-Background">
        <button onClick={toggleModal1} className="btn-modal">
          <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>SESTRI LEVANTE <br/>COVER</h1>
            <iframe className="projPic"  width="420" height="315"
              src="https://www.youtube.com/embed/6csBvKhZLkA">
            </iframe>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Played and produced everything myself. Orginal song by Tame Impala</figcaption>
            <p1 className="clickMoreText">Click The Video To Listen</p1>
          </div>
        </button>

        <button onClick={toggleModal2} className="btn-modal">
        <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>WHY WON'T YOU MAKE UP YOUR MIND COVER</h1>
            <iframe className="projPic"  width="420" height="315"
              src="https://www.youtube.com/embed/kMwhksqeH40">
            </iframe>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Played and produced everything myself. Orginal song by Tame Impala.</figcaption>
            <p1 className="clickMoreText">Click The Video To Listen</p1>
          </div>
        </button>

        <button onClick={toggleModal3} className="btn-modal">
        <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>GO EASY COVER</h1>
            <iframe className="projPic"  width="420" height="315"
              src="https://www.youtube.com/embed/iQp21YnfWlE">
            </iframe>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Played and produced everything myself. Orginal song by Mac Demarco</figcaption>
            <p1 className="clickMoreText">Click The Video To Listen</p1>
          </div>
        </button>

        <button onClick={toggleModal4} className="btn-modal">
        <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>LET IT HAPPEN SOLO COVER</h1>
            <iframe className="projPic"  width="420" height="315"
              src="https://www.youtube.com/embed/fykom0nw0Ec">
            </iframe>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Played and produced everything myself. Orginal song by Tame Impala.</figcaption>
            <p1 className="clickMoreText">Click The Video To Listen</p1>
          </div>
        </button>

        <button onClick={toggleModal5} className="btn-modal">
        <div className="buttonContent">
            <h1 className="buttonTitle" style={{ whiteSpace: "pre-wrap" }}>My Gear and How I Record</h1>
            <img alt="Gear" className="headphonesPic" src={headphones}></img>
            <figcaption className="picCaption" style={{ whiteSpace: "pre-wrap" }}> Click to Learn More.</figcaption>
            <p1 className="clickMoreText">Thanks For Stopping and Listening!</p1>
          </div>
        </button>

      </div>

      {modal1 && (
        <div className="modal">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
          <p style={{ whiteSpace: "pre-wrap" }}>
            On this track I really learned from my mistakes. I recorded the drums first on our little house hold drum set. Then, I went and made sure I mapped out each insturment in the song. What comes in at what and what parts I needed to learn. <br></br>
            I learned all the parts and recorded them. I thought the bass in this song was really great so I also tried to crank it in the mix.  <br></br>
            I also really learned a lot about mixing as well as finalizing your work. I familiarized my self with the plugins and now know what should be used with what insturument.<br></br>
            I think it turned out great and this is one of my prodest recordings.
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModal1} src={x}></img>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
            <p style={{ whiteSpace: "pre-wrap" }}>
            In this song, I made the biggest mistake I could possibly make – I recorded the drums last. I didn't have access to the drums at the time and thought that they could be an afterthought. Not only does it ruin the whole song, but everything now sounds extremely out of time. <br></br>
            Also, I now know why people use metronomes. Aside from that huge mistake, I love the lead guitar tone, and I think I really nailed the original recording tone for it. Likewise, this song taught me about automation (i.e. the fading at the end). It also taught me about how to record my instruments and make sure they sound right. <br></br>
            Yes, that's me trying to sing... Yeah, I realized I should have buried it more in the mix. Not good, haha. I was contemplating taking the drums and singing out, but I thought, why not show my mistakes. <br></br>
            The main reason I posted this song and other songs that don't sound the best is mainly because I want to show my progression in recording. Each song gets better in my opinion as I learn more. <br></br>
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
            Now that I understood how to record something, I tried to create my first song with just me playing all the instruments and doing everything. This is my first result at that. <br></br>
            This cover was just me recording and overlaying the tracks. No post-production. I was realizing my music didn't have the warmth I wanted in it. I later needed to learn more about how to add that effect, which you can see in my songs above.
            </p1>
            <img alt="Close Window" className="close-modal" onClick={toggleModal3} src={x}></img>
          </div>
        </div>
      )}
      
      {modal4 && (
        <div className="modal">
          <div onClick={toggleModal4} className="overlay"></div>
          <div className="modal-content">
          <p style={{ whiteSpace: "pre-wrap" }}>
          This is the first recording that I can say I got a hold of. I was just testing things out to try and make a song. I really liked this solo and thought I had the lead guitar tone accurate, but boy was I wrong. I realized when I record my guitar, it doesn't always sound like the amp. <br></br>
          Just messing around, working with a lot of computer-generated drums and synth. It was great, and this and some other pieces were the start of my journey. 
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModal4} src={x}></img>
          </div>
        </div>
      )}

      {modal5 && (
        <div className="modal">
          <div onClick={toggleModal5} className="overlay"></div>
          <div className="modal-content">
          <p style={{ whiteSpace: "pre-wrap" }}>
          DAW: FL Studio. After trying all the different ways to record my guitar with my setup, this was the best. <br></br>
          Amp: Katana Mk 2. Great amp. I am able to directly record my guitar into my computer through this, although there is a lag which I work around. I record my bass, guitar, and piano all through this amp. I always wanted to record myself, and this amp let me do that. <br></br>
          Guitar: Mainly use my Squier Telecaster. I have other guitars, but I mainly record at the University, so I bring my beater. <br></br>
          Bass: Epiphone Viola. Great bass with an awesome neck. <br></br>
          Electric Piano: $50 on Kijiji. Unknown name. <br></br>
          Drums: Old drums my roommate brought to our house at University. Unknown name. <br></br>
          *NEW* Synth: Micro Korg. Just got this synth and will be adding it to future songs. Super fun to play with and a great starting synth. <br></br>
            </p>
            <img alt="Close Window" className="close-modal" onClick={toggleModal5} src={x}></img>
          </div>
        </div>
      )}
    </>
  );
}
