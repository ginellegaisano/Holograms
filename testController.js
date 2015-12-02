 // set the scene size
var sphere;
var sphere2;
var sphere3;
var sphere4;
var WIDTH = 600, HEIGHT = 500;

// set some camera attributes
var VIEW_ANGLE = 45,
  ASPECT = WIDTH / HEIGHT,
  NEAR = 0.1,
  FAR = 10000;

// create a WebGL renderer, camera
// and a scene
var renderer = new THREE.WebGLRenderer();

var camera =
  new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR);

var scene = new THREE.Scene();

// add the camera to the scene
scene.add(camera);

function directionKeyPress(e) {
    /*
    left = 37
up = 38
right = 39
down = 40
    */
    console.log(e);
    var value = 50;
    var keyCode = e.keyCode;
    if (keyCode == 39 /*right*/ || keyCode == 40 /*down*/) {
        value *= -1;
    }
    if (keyCode == 37 /*left*/ || keyCode == 39 /*right*/) {
        sphere.rotation.y += value;
        sphere2.rotation.y += value;
        sphere3.rotation.y += value;
        sphere4.rotation.y += value;
    } else {
        sphere.rotation.x += value;
        sphere2.rotation.x += value;
        sphere3.rotation.x += value;
        sphere4.rotation.x += value;
    }
    // Overwrite rotation

    renderer.render(scene, camera);

}

function directionClick(direction) {
    var value = 50;
    if (direction == "Left" || direction == "Down") {
        value *= -1;
    }
    if (direction == "Left" || direction == "Right") {
        sphere.rotation.y += value;
        sphere2.rotation.y += value;
        sphere3.rotation.y += value;
        sphere4.rotation.y += value;
    } else {
        sphere.rotation.x += value;
        sphere2.rotation.x += value;
        sphere3.rotation.x += value;
        sphere4.rotation.x += value;
    }
    // Overwrite rotation

    renderer.render(scene, camera);


}

function renderTest() {

    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    var $container = $('#container');
    //console.log($container);
    //$container.text('apples');
    //console.log("apples");
    // the camera starts at 0,0,0
    // so pull it back
    camera.position.z = 300;

    // start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // attach the render-supplied DOM element
    $container.append(renderer.domElement);

    // set up the sphere vars
    var radius = 25,
        segments = 16,
        rings = 16;

    // create a new mesh with
    // sphere geometry - we will cover
    // the sphereMaterial next!

    // create the sphere's material

    var loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
        // resource URL
        'catTest.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture

            var sphereMaterial = new THREE.MeshBasicMaterial( {
                map: texture
             } );

            sphere = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere.position.x -= 50;

            sphere2 = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere2.position.x += 50;

            sphere3 = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere3.position.y -= 50;

            sphere4 = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere4.position.y += 50;

            // add spheres to the scene
            scene.add(sphere);
            scene.add(sphere2);
            scene.add(sphere3);
            scene.add(sphere4);
            renderer.render(scene, camera);

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );


    // create a point light
    var pointLight =
      new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 100;

    // add to the scene
    scene.add(pointLight);

    // draw!
    renderer.render(scene, camera);
}


