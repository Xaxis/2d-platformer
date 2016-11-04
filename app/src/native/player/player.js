/**
 * Module responsible for character input controls.
 */
define([
  'three',
  'controls'
], function(
  THREE
) {
  var Player = function() {
    return {

      /**
       * Initialize.
       */
      initialize: function( context ) {

        // Access THREE context
        this.ctx = context;

        // Define player elements
        this.geometry = new THREE.BoxGeometry(2, 4, 1);
        this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        this.mesh = new THREE.Mesh(
          this.geometry,
          this.material
        );

        // Set player starting position
        this.mesh.position.x = 0;
        this.mesh.position.y = 5;
        this.mesh.position.z = 0;


        // Set player's initial direction vector
        this.direction = new THREE.Vector3(0, 0, 0);

        // Add the player to the scene
        this.ctx.scene.add(this.mesh);
      },


      setDirection: function( controls ) {
      },


      motion: function() {

      },


      rotate: function() {

      },


      move: function() {

      },

      collide: function() {

      }

    };
  };

  return new Player();
});
