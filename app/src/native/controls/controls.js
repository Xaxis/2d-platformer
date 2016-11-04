/**
 * Module responsible for character input controls.
 */
define([
  'lodash',
  'three'
], function(
  _,
  THREE
) {
  var Controls = function() {
    return {
      KEYS: {
        LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40,

        A: 65, B: 66, C: 67, D: 68,
        E: 69, F: 70, G: 71, H: 72,
        I: 73, J: 74, K: 75, L: 75,
        M: 76, N: 77, O: 78, P: 79,
        Q: 80, R: 81, S: 82, T: 83,
        U: 84, V: 85, W: 86, X: 87,
        Y: 88, Z: 89,

        ZERO: 48, ONE: 49, TWO: 50, THREE: 51,
        FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55,
        EIGHT: 56, NINE: 57,

        ENTER: 13, ESC: 27, BACKSPACE: 8, TAB: 9,
        SHIFT: 16, CTRL: 17, ALT: 18, SPACE: 32
      },

      ACTIVE_KEYS: {},


      /**
       * Initialize.
       */
      initialize: function( context ) {
        var
          _this       = this;
        
        // Set THREE context
        this.ctx = context;

        // Bind methods
        _.bindAll(this,
          'setControls',
          'unsetControls',
          'setFocus'
        );

        // Initialize event listeners
        window.addEventListener('keydown', this.setControls);
        window.addEventListener('keyup', this.unsetControls);

        // Return context
        return this;
      },


      /**
       * Handle controller input active state.
       */
      setControls: function(e) {
        // e.preventDefault();
        this.ACTIVE_KEYS[e.keyCode] = true;
        console.log(e.keyCode, this.ACTIVE_KEYS[e.keyCode]);
      },

      /**
       * Handle controller input clear state.
       */
      unsetControls: function(e) {
        // e.preventDefault();
        this.ACTIVE_KEYS[e.keyCode] = false;
        console.log(e.keyCode, this.ACTIVE_KEYS[e.keyCode]);
      },


      /**
       * Update the camera to follow and look at a given Object3D/Mesh
       * @param object
       * @param offset_y
       */
      setFocus: function( object, offset_y ) {
        this.ctx.camera.position.set(object.position.x, object.position.y + offset_y, object.position.z);
        this.ctx.camera.lookAt(object.position);
      }

    };
  };

  return new Controls();
});
