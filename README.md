# hdrp-test

tester for a React version of HDR Profiles.

## Quick start

```bash
pushd client && npm install && popd
npm install
npm start
open http://http://localhost:3000/
```

This will install the client's dependencies, then the project's
dependency ([`serve`](https://github.com/zeit/serve)), then
start up both the static file "server" side, and the dev server
for the client side.

## Directories

|directory           | What's in it
|--------------------|----------------------
|`server`            | The server half; currently just a JSON file, served statically
|`client`            | The client half; source for the React-based web app
|`client/src/vendor` | Place to put the JCU Framework and other client-required things.  You can't `include` stuff unless it's in `src`
|`docs`              | Nothing yet, but put docs there
|`mockups`           | HTML and other mockups
