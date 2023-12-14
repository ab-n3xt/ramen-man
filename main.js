import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const WINDOW_WIDTH = 550;
const WINDOW_HEIGHT = window.outerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize( WINDOW_WIDTH, WINDOW_HEIGHT );

const loader = new GLTFLoader();
loader.load("scene.gltf", function (gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
})

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Initial position
camera.position.x = 15;
camera.position.y = 100;
camera.position.z = 100;

var RATE = 0;

function animate() {
	requestAnimationFrame( animate );

    if (camera.position.y <= 135) {
        camera.position.y += 1 * (1 - Math.sin((RATE * Math.PI) / 2));
        scene.rotation.y += 0.014 * (1 - Math.sin((RATE * Math.PI) / 2));
        RATE += 0.1 / 10;
    }    

	renderer.render( scene, camera );
}

document.body.getElementsByTagName("main")[0].appendChild( renderer.domElement );
animate();