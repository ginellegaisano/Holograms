 // set the scene size
var cube;
var cube2;
var cube3;
var cube4;
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
        cube.rotation.y += value;
        cube2.rotation.y += value;
        cube3.rotation.y += value;
        cube4.rotation.y += value;
    } else {
        cube.rotation.x += value;
        cube2.rotation.x += value;
        cube3.rotation.x += value;
        cube4.rotation.x += value;
    }
    // Overwrite rotation

    renderer.render(scene, camera);

}

function directionClick(direction) {
    var value = 50;
    if (direction == "Left" || direction == "Down" || direction == "Long down") {
        value *= -1;
    }
    if (direction == "Left" || direction == "Right") {
        cube.rotation.y += value;
        cube2.rotation.y += value;
        cube3.rotation.y += value;
        cube4.rotation.y += value;
    } else {
        cube.rotation.x += value;
        cube2.rotation.x += value;
        cube3.rotation.x += value;
        cube4.rotation.x += value;
    }
    // Overwrite rotation

    renderer.render(scene, camera);


}

function render(imageToDisplay) {
    // clear everything
    for( var i = scene.children.length - 1; i >= 0; i--) {
        scene.remove(scene.children[i]);
    }

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

    // set up the cube vars
    var sideLength = 50;

    // create a new mesh with
    // cube geometry - we will cover
    // the cubeMaterial next!

    // create the cube's material

    var loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
        // resource URL
        imageToDisplay,
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture

            var cubeMaterial = new THREE.MeshBasicMaterial( {
                map: texture
             } );

            cube = new THREE.Mesh(

              new THREE.CubeGeometry(
                sideLength,
                sideLength,
                sideLength),

              cubeMaterial);
            cube.position.x -= 60;

            cube2 = new THREE.Mesh(

              new THREE.CubeGeometry(
                sideLength,
                sideLength,
                sideLength),

              cubeMaterial);
            cube2.position.x += 60;

            cube3 = new THREE.Mesh(

              new THREE.CubeGeometry(
                sideLength,
                sideLength,
                sideLength),

              cubeMaterial);
            cube3.position.y -= 60;

            cube4 = new THREE.Mesh(

              new THREE.CubeGeometry(
                sideLength,
                sideLength,
                sideLength),

              cubeMaterial);
            cube4.position.y += 60;

            // add cubes to the scene
            scene.add(cube);
            scene.add(cube2);
            scene.add(cube3);
            scene.add(cube4);
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


