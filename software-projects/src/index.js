import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Modal from './Components/Modal/Modal.js'
// import Modal2 from './Components/Modal/Modal2'

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
);

// const root2 = createRoot(document.getElementById("root2"));
// root2.render(
//   <React.StrictMode>
//     <Modal2 />
//   </React.StrictMode>
// );

