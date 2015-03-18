quick-dom
=============

a one-liner for adding a browser-like document to your node.js global object, useful when testing DOM based applications.
It's based on jsdom: https://npmjs.org/package/jsdom and creates an empty document.

Installation
============

```bash
npm install quick-dom
```

How to use
==========

This will add 'window' and 'document' to the global object in your node application.

```js
require("quick-dom");

console.log(window.document.innerHTML);
// output: "<html><head></head><body></body></html>"

console.log(window.innerWidth);
// output: 1024
```

Requiring quick-dom returns an instance of jsdom:

```js
var jsdom = require("quick-dom");
```

Changelog
=======

### 0.0.2 - 18 MAR 2015

* bump jsdom to 3.0.3

LICENSE
=======

MIT
