# tired of your long-ass Gruntfile.js?

A quickstart project setup with **Grunt**. Some common Grunt configurations and tasks, setup in an easy-to-manage
(and maintain) layout. There's some common tasks that I use in nearly every one of my web projects, but it's easy
enough to remove the one(s) you don't need or add your own.

# Installation

Installation is quick and painless. Just clone this project somewhere on your machine, and drag-n-drop it from there.

    git clone https://github.com/erikyuzwa/grunt-project-quickstart.git

* make sure node.js is installed
* merge the `devDependencies` section of the `package.json` with your own (if you have one)
* `npm install` to pull down the *Grunt* dependencies
* proceed to make awesome, knowing that you've saved yourself hours of hair pulling

# Usage

* `grunt build` - launch the `grunt/tasks/build.js` - for now just copies your source into `./build`
* `grunt serve` - launch the `grunt/tasks/serve.js` - starts a local dev webserver for `./app/index.html`
* `grunt test` - launch Karma on any tests in the `./test/spec` folder

# License 

Copyright (c) 2016 Erik Yuzwa <erik@erikyuzwa.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
