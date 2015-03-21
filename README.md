# grunt-templator

> grunt-webcomponent-master

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-templator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-templator');
```

## The "templator" task

### Overview
In your project's Gruntfile, add a section named `templator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  templator: {
    options: {
                markupFile: '/template_markup.html',
                styleFile: '/template_style.css',
                resultFile: '/template_result.html'
    },
    your_target: {
       options: {
                      markupFile: '/template_markup.html',
                      styleFile: '/template_style.css',
                      resultFile: '/template_result.html'
          }
    },
  },
})
```

### Options

#### options.markupFile
Type: `String`

A string value that is the relative path to the template markup file

#### options.styleFile
Type: `String`

A string value that is the relative path to the template style file

#### options.resultFile
Type: `String`

A string value that is the relative path to the template result file which is a combination
of the two mentioned above

### Usage Examples

#### Default Options
In this example, the default options are used to do generate the Web component template from the markup and
style files. 
So if the markup file has the content :
 
 
 &lt;div&gt;<br>
   I am template markup
   <br>
 &lt;/div&gt;
 
,and the style file has the content :

body {<br>
  background: #0000ff;
  <br>
}
, - the generated result would be :

&lt;template&gt;<br>

&lt;style&gt;<br>
body{<br>
  background: #0000ff;<br>
}<br>
&lt;/style&gt;<br>
<br>
&lt;div&gt;<br>
  I am template markup<br>
&lt;/div&gt;<br>
<br>
&lt;/template&gt;




## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Eugene Klymenko. Licensed under the MIT license.
