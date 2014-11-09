# jasmine-flight [![Build Status](https://travis-ci.org/flightjs/jasmine-flight.png?branch=master)](http://travis-ci.org/flightjs/jasmine-flight)

Extensions to the Jasmine test framework for use with [Flight](https://github.com/flightjs/flight)

# Getting started

Include [jasmine-flight.js](https://raw.github.com/flightjs/jasmine-flight/master/lib/jasmine-flight.js)
in your app and load it in your test runner.

Or install it with [Bower](http://bower.io/):

```bash
bower install --save-dev jasmine-flight
```

jasmine-flight depends on [jasmine](https://github.com/pivotal/jasmine)

jasmine-flight assumes you'll be using RequireJS to load Flight modules, and
that you've configured the Flight directory path. For example:

```javascript
requirejs.config({
  paths: {
    flight: 'bower_components/flight'
  }
});
```

## Components

```javascript
describeComponent('path/to/component', function () {
  beforeEach(function () {
    this.setupComponent();
  });

  it('should do x', function () {
    // a component instance is now accessible as this.component
    // the component root node is attached to the DOM
    // the component root node is also available as this.$node
  });
});
```

Also provides ddescribeComponent.

## Mixins

```javascript
describeMixin('path/to/mixin', function () {
  // initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should do x', function () {
    expect(this.component.doSomething()).toBe(expected);
  });
});
```

Also provides ddescribeMixin.

## Modules

```javascript
describeModule('path/to/module', function () {
  // initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should do x', function () {
    expect(this.component.doSomething()).toBe(expected);
  });
});
```

Also provides ddescribeModule.

## this.setupComponent

```javascript
this.setupComponent(optionalFixture, optionalOptions);
```

Calling `this.setupComponent` twice will create an instance, tear it down and create a new one.

### HTML Fixtures

```javascript
describeComponent('ui/twitter_profile', function () {
  // is the component attached to the fixture?
  it('this.component.$node has class "foo"', function () {
    this.setupComponent('<span class="foo">Test</span>');
    expect(this.component.$node).toHaveClass('foo');
  });
});
```

### Component Options

```javascript
describeComponent('data/twitter_profile', function () {
  // is the option set correctly?
  it('this.component.attr.baseUrl is set', function () {
    this.setupComponent({
      baseUrl: 'http://twitter.com/1.1/'
    });
    expect(this.component.attr.baseUrl).toBe('http://twitter.com/1.1/');
  });
});
```

# Teardown

Components are automatically torn down after each test.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Authors

* [@tbrd](http://github.com/tbrd)

## Thanks

* [@esbie](http://github.com/esbie) and
  [@skilldrick](http://github.com/skilldrick) for creating the original
  `describeComponent` & `describeMixin` methods.
* [@necolas](http://github.com/necolas) for ongoing support & development

## License

Copyright 2013 Twitter, Inc and other contributors.

Licensed under the MIT License
