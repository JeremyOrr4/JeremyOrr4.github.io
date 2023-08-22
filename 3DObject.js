//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// //Keep track of the mouse position, so we can make the eye move
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// Add mouse event listeners to handle rotation
let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Keep track of the rotation angles
let rotationX = 0;
let rotationY = 0;

document.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    // Calculate the change in rotation based on mouse movement
    const sensitivity = 0.005;
    rotationY -= event.movementX * sensitivity;
    rotationX -= event.movementY * sensitivity;
  }
});


//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `3DObject/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;

    // Set the initial rotation of the object to face the other way
    object.rotation.y =  190; // Rotate the object 180 degrees along the Y-axis
    object.position.set(0,-150,0);

    const scale = 0.27; // Adjust this value to make the model smaller or larger as needed
    object.scale.set(scale, scale, scale);

    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.set(0,0,500);

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(0, 0, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

//Add lights to the scene, so we can actually see the 3D model
const topLight2 = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight2.position.set(0, 0, -400) //top-left-ish
topLight2.castShadow = true;
scene.add(topLight2);

const ambientLight = new THREE.AmbientLight(0x333333, 1); // maybe change to ligher OG:0x333333
scene.add(ambientLight);


//controls
controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(0,0,0);
controls.enableDamping = true;
controls.enableZoom = false;

// Add a function to generate a random number between min and max
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const randomRotationX = getRandomInRange(-0.01, 0.01);
const randomRotationY = getRandomInRange(-0.01, 0.01);
const randomRotationZ = getRandomInRange(-0.01, 0.01);

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  
  // Apply rotation to the 3D object
  if (object) {
    // Generate random rotation values for each axis
    

    // Update the object's rotation based on the random values
    object.rotation.x += randomRotationX;
    object.rotation.y += randomRotationY;
    object.rotation.z += randomRotationZ;
  }

  // Render the scene
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//Start the 3D rendering
animate();