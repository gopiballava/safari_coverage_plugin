# safari_coverage_plugin

This is pretty much just a sandbox for experimenting with how a coverage plugin could work for Safari. The code is messy and unfinished.

Safari extensions have many sorts of restrictions on what they are allowed to do. For experimential purposes, this plugin downloads the latest code via HTTP on localhost every time you hit `reload` in your browser - no need to recompile.

In a terminal window:
```
cd safari_coverage_plugin\ Extension
python -m SimpleHTTPServer 8000
```

This starts up a simple HTTP server. When you visit github.com in Safari, the plugin calls JavaScript code, which then sends a message to the Objective C plugin code, which requests http://localhost:8000/dynamic_execution.js, then sends a message back to the JavaScript code with the contents of that. The JavaScript code does an `eval` of what it was passed.

The upshot is: You can edit `dynamic_execution.js` in your editor, hit save, then go to Safari and hit reload and get the latest version of the injected JavaScript instantly.
