/**
 * Scene module responsible for Three initialization, rendering, and control loops.
 */
define([
  'lodash',
  'three',
  'three.orbitcontrols',
  'three.trackballcontrols',
  'controls',
  'player'
], function(
  _,
  THREE,
  ThreeOrbitControls,
  ThreeTrackballControls,
  Controls,
  Player
) {
  var Scene = function() {
    return {
      config: {
        view_angle: 70,
        near: 0.1,
        far: 100000,
        origin: {
          x: 0,
          y: 0,
          z: 100
        }
      },
      scene: new THREE.Scene(),
      camera: null,
      controls: null,
      renderer: null,
      clock: new THREE.Clock(),
      delta: null,
      theta: 0,

      /**
       * Initialize.
       */
      initialize: function() {
        var
          _this       = this;

        // Bind methods
        _.bindAll(this,
          'load',
          'input',
          'render'
        );

        // Initialize camera
        this.camera = new THREE.PerspectiveCamera(
          this.view_angle,
          window.innerWidth / window.innerHeight,
          this.near,
          this.far
        );
        this.camera.position.z = 100;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Initialize controls
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 0.1;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.minDistance = 2;
        this.controls.maxDistance = 20000;

        // Initialize renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.sortObjects = true;

        // Initialize scene
        document.body.appendChild(this.renderer.domElement);
        this.scene.add(this.camera);

        // Initialize clock
        this.clock.start();

        // Activate scene
        this.load();
        this.render();

        // Initialize resize handler
        window.addEventListener('resize', function() {
          _this.camera.aspect = window.innerWidth / window.innerHeight;
          _this.camera.updateProjectionMatrix();
          _this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Initialize input controls
        this.inputs = Controls.initialize(this);
      },

      /**
       * Loads scene elements.
       */
      load: function() {

        // Add test player to scene
        var player1 = Player.initialize(this);
        this.player1 = player1;
      },


      /**
       * Handle input controls.
       */
      input: function() {
        // this.inputs.setFocus(this.player);
      },


      /**
       * Scene render loop.
       */
      render: function() {
        requestAnimationFrame(this.render);
        this.delta = this.clock.getDelta();
        this.controls.update();
        // this.input();
        this.renderer.render(this.scene, this.camera);
      }
    };
  };

  return new Scene();
});
