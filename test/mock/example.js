define(function (require) {
  'use strict';

  var defineComponent = require('flightjs').component;

  function Example() {
    this.attributes({
      param: 'defaultParam'
    });
  }

  return defineComponent(Example);
});
