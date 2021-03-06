console.log('loaded2');


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 10, 10 );
scene.add(spotLight);

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 10, 0 );
scene.add(spotLight);

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 10, -10 );
scene.add(spotLight);

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();