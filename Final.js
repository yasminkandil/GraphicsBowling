
	var scene,camera,renderer;
	var score=0;
    var ww = window.innerWidth,
	wh = window.innerHeight;
    scene= new THREE.Scene();
    scene.background= new THREE.Color(0x000000);
    camera = new THREE.PerspectiveCamera(30, ww/wh,1,20000);
    camera.position.set(1, -4000, 800);

    renderer= new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setSize(ww,wh);
    document.body.appendChild(renderer.domElement);

 var controls=new THREE.OrbitControls(camera,renderer.domElement);
     controls.update();

 var   light = new THREE.PointLight( 0xFFFFFF, 1, 0,1 );
	   light.position.set(0,-2000, 100);
 const helper = new THREE.CameraHelper( light.shadow.camera );
       //scene.add( helper );
	   light.castShadow = true;
	   light.shadow.mapSize.width = 512; // default
       light.shadow.mapSize.height = 512; // default
       light.shadow.camera.near = 0.5; // default
       light.shadow.camera.far = 500;
	   scene.add(light);
	   scene.add( new THREE.AmbientLight( 0xffffff, 0.7 ) );


	var textureB = new THREE.TextureLoader().load("neon.jpg")
    var backgroundMat = new THREE.MeshPhongMaterial({map:textureB,side:THREE.BackSide});
    var geoBackground = new THREE.BoxGeometry( 5000, 5000, 5000 );
    var background = new THREE.Mesh( geoBackground, backgroundMat );
	background.position.set(0,290,2400);
	background.doubleSided = true;
	background.receiveShadow = true;
	scene.add(background);
  

   var loader= new THREE.GLTFLoader();
 	loader.load("pinn/scene.gltf", function(gltf){
 	gltf.scene;
 	gltf.scene.scale.set(50,50,50);
 	gltf.scene.position.z=120;
 	gltf.scene.position.y=1500;
    gltf.scene.position.x=0;
    gltf.scene.rotateX(Math.PI/2);
 	scene.add(gltf.scene);


 loader.load("pinn/scene.gltf", function(gltf2){
 	gltf2.scene.scale.set(50,50,50);
 	gltf2.scene.position.z=120;
 	gltf2.scene.position.y=2200;
 	gltf2.scene.position.x=-200;
	gltf2.scene.rotateX(Math.PI/2);
 	scene.add(gltf2.scene);

 loader.load("pinn/scene.gltf", function(gltf3){
 	gltf3.scene.scale.set(50,50,50);
 	gltf3.scene.position.z=120;
 	gltf3.scene.position.y=2200;
 	gltf3.scene.position.x=200;

	 gltf3.scene.rotateX(Math.PI/2);
	// pins.add(gltf3.scene);
 	scene.add(gltf3.scene);

loader.load("pinn/scene.gltf", function(gltf4){
 	gltf4.scene.scale.set(50,50,50);
 	gltf4.scene.position.z=120;
 	gltf4.scene.position.y=2200;
 	gltf4.scene.position.x=-75;

	 gltf4.scene.rotateX(Math.PI/2);
	 //pins.add(gltf4.scene);
 	scene.add(gltf4.scene);

loader.load("pinn/scene.gltf", function(gltf5){
 	gltf5.scene.scale.set(50,50,50);
 	gltf5.scene.position.z=120;
 	gltf5.scene.position.y=2200;
 	gltf5.scene.position.x=75;

	 gltf5.scene.rotateX(Math.PI/2);
	 //pins.add(gltf5.scene);

 	scene.add(gltf5.scene);

loader.load("pinn/scene.gltf", function(gltf6){
    gltf6.scene.scale.set(50,50,50);
    gltf6.scene.position.z=120;
    gltf6.scene.position.y=2000;
    gltf6.scene.position.x=0;

     gltf6.scene.rotateX(Math.PI/2);
	 //pins.add(gltf6.scene);

    scene.add(gltf6.scene);

loader.load("pinn/scene.gltf", function(gltf7){
    gltf7.scene.scale.set(50,50,50);
    gltf7.scene.position.z=120;
    gltf7.scene.position.y=2000;
    gltf7.scene.position.x=135;

     gltf7.scene.rotateX(Math.PI/2);
	// pins.add(gltf7.scene);

    scene.add(gltf7.scene);

loader.load("pinn/scene.gltf", function(gltf8){
    gltf8.scene.scale.set(50,50,50);
    gltf8.scene.position.z=120;
    gltf8.scene.position.y=2000;
    gltf8.scene.position.x=-135;

     gltf8.scene.rotateX(Math.PI/2);
	 //pins.add(gltf8.scene);

    scene.add(gltf8.scene);

loader.load("pinn/scene.gltf", function(gltf9){
    gltf9.scene.scale.set(50,50,50);
    gltf9.scene.position.z=120;
    gltf9.scene.position.y=1800;
    gltf9.scene.position.x=-75;

     gltf9.scene.rotateX(Math.PI/2);
	 //pins.add(gltf9.scene);

    scene.add(gltf9.scene);
 
loader.load("pinn/scene.gltf", function(gltf10){
    gltf10.scene.scale.set(50,50,50);
    gltf10.scene.position.z=120;
    gltf10.scene.position.y=1800;
    gltf10.scene.position.x=75;
    gltf10.scene.rotateX(Math.PI/2);
	//pins.add(gltf10.scene);

    scene.add(gltf10.scene);


 var geometry = new THREE.PlaneGeometry( 700,5000);
 var loaderT = new THREE.TextureLoader();
 var texture = loaderT.load("alley.jpg");
 var material1 = new THREE.MeshLambertMaterial({map:texture});
 var plane = new THREE.Mesh( geometry, material1 );
     plane.receiveShadow = true;
     scene.add( plane );

    //Sphere

	var geometrySphere = new THREE.SphereGeometry( 70, 32, 10 );
	var	texture2 = loaderT.load("blue.jpg");
	var	materialsp = new THREE.MeshLambertMaterial({map:texture2});
	var sphere = new THREE.Mesh(geometrySphere, materialsp);
	sphere.castShadow = true; //default is false
    sphere.receiveShadow = false; //default
	sphere.position.x =0;
	sphere.position.y=-2300;
	sphere.position.z=70;
	scene.add(sphere);

    const pins=[gltf.scene,gltf2.scene,gltf3.scene,gltf4.scene,
    gltf5.scene,gltf6.scene,gltf7.scene,gltf8.scene,gltf9.scene,gltf10.scene];
    function animate(){
	const listener = new THREE.AudioListener();
     const sound = new THREE.Audio( listener );
     const audioLoader = new THREE.AudioLoader();
      audioLoader.load( '/roll.mp3', function( Music ) {
	  sound.setBuffer( Music );
	  sound.setLoop(false);
	  sound.setVolume(0.5);
	  sound.play();
      })
	sphere.position.y+=10;
	sphere.rotateX(-0.3);
	camera.position.y+=9;
	light.position.y+=10;
	renderer.render(scene, camera);
	let  id=  requestAnimationFrame(animate);
	if(sphere.position.y == 2500)
	{
			sphere.position.y=-2300;
			sphere.position.x=0;
			sphere.position.z=70;
			camera.position.set(1, -4000, 800);
	        light.position.set(0,-2000, 100);
	        cancelAnimationFrame( id ); 
	}
   // var bool=false;
	var CollisionSphere=new THREE.Box3().setFromObject(sphere);
	for(var i=0;i<10;i++)
	{
	var pinCollision= new THREE.Box3().setFromObject(pins[i]);
	var ifCollided=(CollisionSphere.intersectsBox(pinCollision));
	
	if(ifCollided){	
		//Audio
	 const listener = new THREE.AudioListener();
     camera.add( listener );
     const sound = new THREE.Audio( listener );
     const audioLoader = new THREE.AudioLoader();
      audioLoader.load( '/pinos.ogg', function( MusicPin ) {
	  sound.setBuffer( MusicPin );
	  sound.setLoop(false);
	  sound.setVolume(0.9);
	  sound.play();
      })
		//pins[i].rotation.x=Math.PI;
       pins[i].position.x=8000;

	score+=10;      
	document.getElementById("score").innerHTML=score;
	renderer.render(scene,camera);

    }

      }
      GameOver();


        }
	renderer.render(scene,camera);

function render(){
	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

document.onkeydown=function(e)
{	
      if(e.key=='ArrowRight')
      {
	   camera.position.x+=2;
       console.log(camera.position.x);
	   renderer.render(scene,camera);
     }
      if(e.key =='ArrowLeft')
      {
	   camera.position.x-=2;
       console.log(camera.position.x);
	   renderer.render(scene,camera);
     }
     
	if(e.key=='ArrowUp')
	{
      camera.position.z+=2;
      console.log(camera.position.z);
      renderer.render(scene,camera);
	}
	if(e.key=='ArrowDown'){
      camera.position.z-=2;
      console.log(camera.position.z);
      renderer.render(scene,camera);
	}
	if(e.keyCode=='73'){//i
		camera.position.y+=2;
        console.log(camera.position.z);
	    renderer.render(scene,camera);
	}
    if(e.keyCode=='79'){//o
		camera.position.y-=2;
        console.log(camera.position.z);
	   renderer.render(scene,camera);
	}
	if(e.keyCode=='32')//space
		animate();
	if(e.keyCode=='65'){//a
	    light.position.x-=3;

	   sphere.position.x -=3;
	   renderer.render(scene,camera);
	   console.log('sphere.position.x');
	}
	if(e.keyCode=='68'){//d
			    light.position.x+=3;

	   sphere.position.x +=3;
	   renderer.render(scene,camera);
	   console.log('sphere.position.x');
	}
}

render();
 });
 });
 });
 });
 });
 });
 });
 });
 });
 });

function GameOver() {
	if(score==100)
	{
alert("GameOver");
document.location.reload();
}
}
alert("Start Game");