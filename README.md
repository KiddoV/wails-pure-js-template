## About

This is an extremely straightforward Wails template, comprising essential web components (HTML, CSS, JS) and intentionally lacking any front-end frameworks, dependencies, or Node package management. 
As a result, you'll end up with an exceptionally lightweight source folder (1 - 5MB).

That being said, this is a good template for something like a ``Hello World`` application, which doesn't require you to store ~200-300MB of source files.

## Instruction

1. Do all the setup/ installation for [Wails](https://wails.io/docs/gettingstarted/installation).
2. Open command prompt on your desire directory.
3. ``> wails init -n [your-app-name] -t https://github.com/KiddoV/wails-pure-js-template``
4. ``> cd ./[your-app-name]``
5. ``> wails dev``
6. Keep developing...

## Live Development

To run in live development mode, run `wails dev` in the project directory. The frontend dev server will run on http://localhost:34115. Connect to this in your browser and connect to your application.

## Building

To build a redistribute, production mode package, use `wails build`.

Or build with [UPX](https://upx.github.io/) for better distribution size: ``wails build -upx -upxflags="--best --lzma"``

To use ``UPX``, you need to download and at least put the path in the ``System Enviroment Variables``:

*Windows*
![Capture](https://user-images.githubusercontent.com/28552977/191490618-b84d307e-f783-4c68-bd90-3f484de25478.PNG)

## Adding Dependencies

You don't have to rely on ``npm`` to add dependencies.

If your application requires internet access, you can add dependencies via a ``CDN`` links.

If your application is used offline, simply download dependencies and save them in the ``src/libs`` folder, then import them in the index.html file.

E.g.
```html
<script src="../libs/jquery/jquery-3.7.1.js"></script>
```