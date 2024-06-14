import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 12);
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  flatShading: true,
});
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

const light = new THREE.HemisphereLight( 0xffffff, 0xff0000, 1 );
scene.add( light );

function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.001;
  earthMesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();