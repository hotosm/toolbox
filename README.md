# Mapping toolbox
In this location, HOT will be collecting documentation and training materials relaing to setting up and running a mapping project. This includes both digitization and remote mapping, as well as field mapping and ground surveying.

Unless noted otherwise, all content in this repository is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).


[![CircleCI](https://circleci.com/gh/hotosm/toolbox.svg?style=svg)](https://circleci.com/gh/hotosm/toolbox)

### Local development

To build this site locally an installation of Hugo and Nodejs is required. Hugo binaries for all platforms are available here:

[https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases)


Clone this repo with the ``` --recurse-submodules ```:

```sh
git clone --recurse-submodules https://github.com/hotosm/toolbox.git
```

Build the search index if language is supported

```
cd toolkit-site
node ./.build_scripts/build_index.js
```


run Hugo

```sh
hugo serve
```

This builds and runs a local webserver with hot-reloading for local content development (Note the search indexes will not be hot rebuilt and loaded).

If the default port is available you can navigate to the built development site at http://localhost:1313 in your browser.
If 1313 is already in use by another program hugo will choose another port and return it to the stdout of your terminal
e.g.

```sh
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at //localhost:58696/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```


### Contributing

This repo holds the directory structure and markdown content for the toolkit site. All style or layout changes are maintained in the separate [hugo-book](https://github.com/hotosm/hugo-book) theme repo and tracked as a submodule in this repo.