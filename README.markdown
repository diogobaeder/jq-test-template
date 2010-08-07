# jq-test-template
Just a project template for testing JavaScript apps. It already includes jQuery, since it's my JS framework of choice, most of the time.

## Structure
The project follows this basic file structure to start with:

* <strong>src/</strong> - directory for source files
* <strong>src/core.js</strong> - core library script
* <strong>test/</strong> - directory for automated tests
* <strong>test/qunit.css</strong> - QUnit stylesheet; not recommended to be changed
* <strong>test/qunit.js</strong> - QUnit library; not recommended to be changed
* <strong>test/tests.html</strong> - run this in a browser to run the tests. It already contains the UI for the tests results
* <strong>test/tests.js</strong> - put your test cases here. It already contains some demo tests, but they're by no means necessary
* <strong>vendor/</strong> - put your library files here. Recommended to keep each in a separate subdirectory
* <strong>vendor/jquery/jquery-x.min.js</strong> - minified version of the (hopefully) latest version of jQuery

## Why jQuery?
Boy, I really love jQuery, that's why! But I like other frameworks a lot, too, like Prototype, YUI, dojo etc.
If you want to rip of jQuery it's easy: just remove it from the "tests.html" file, and provide another way (other than "$(document).ready()") to launch the tests,
like using
    window.addEventListener('load', function(){ "tests here using standards-friendly browsers"; })
or
    window.attachEvent('onload', function(){ "tests here using old Internet Explorer versions"; })
or any helper that abstracts the functionality above.


## License
Since this project does not provide any production code - it's just a skelleton for new projects -, there's no need to attach it to any license.
Just keep in mind to use licenses compatible to the libraries used here (like QUnit and jQuery).
As for the icons, they're from the free Phoenity Alpha icon pack (can't find the link to it right now).
