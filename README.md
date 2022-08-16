# nikhilmisra.com

Built with [SvelteKit](https://kit.svelte.dev/).

Requires NodeJS and NPM installed to run locally. See [Downloading and installing Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-node-js-and-npm).

Once that is done, open the project in VS Code and type 

```npm run dev```

to run the project.

The site is built using the SvelteKit static adapter, which turns the Svelte code into ordinary HTML, CSS and JS that can be hosted statically.

To prepare the site for publishing, run these commands:

```
npm run build
git add docs && git commit
git push origin master
```