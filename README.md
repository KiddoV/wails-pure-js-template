# README

## About

This is a super simple wails template with basic web components (HTML, CSS, JS) without any front-end frameworks. 
You gotta to build everything from scratch. Good luck!

## Instruction

1. Do all the setup/ installation for [Wails](https://wails.io/docs/gettingstarted/installation).
2. Open command prompt on your desire directory.
3. ``$ wails init -n [your-app-name] -t https://github.com/KiddoV/wails-pure-js-template``
4. ``$ cd ./[your-app-name]``
5. ``$ wails dev``
6. Keep developing...

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.

Or build with [UPX](https://upx.github.io/) for better distribution size: ``wails build -upx -upxflags="--best --lzma"``

To use ``UPX``, you need to download and at least put the path in the ``System Enviroment Variables``:

*Windows*
![Capture](https://user-images.githubusercontent.com/28552977/191490618-b84d307e-f783-4c68-bd90-3f484de25478.PNG)

