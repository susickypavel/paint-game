import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const { innerWidth, innerHeight } = window;

// Initialize renderer and corresponding DOM element.
const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// Create scene and camera
const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

// Create a cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

// Add cube to the scene
scene.add(cube);

// Move the camera lil bit to see the cube.
camera.position.z = 5;

// Render loop
function render(): void {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();
