# Visual Regression Testing Demo

Slides for this talk can be found at https://jonbellah.com/talks/js-summit

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin through the following steps.

Install packages:

```
$ npm install
```

Spin up an HTTP server for our directory

```
$ python -m SimpleHTTPServer 8000
```

Then, once the plugin has been installed via `npm install`, you can run your tests by running:

```
$ grunt test --url=http://localhost:8000
```
