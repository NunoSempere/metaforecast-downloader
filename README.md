## About

This is a small repository with code to download predictions from the [metaforecast.org api](https://metaforecast.org/api/graphql). It was initially created at the request of Clay Graubard.

## Built with

- nodejs
- axios

## Installation

To install:

```
git clone https://github.com/NunoSempere/metaforecast-downloader.git
cd metaforecast-downloader
npm install ## not actually necessary, since I've committed the node_modules folder
```

## Usage

```
npm run start # or: node index.js
```

## Stability guarantees

This repository has no stability or mantainability guarantees. The metaforecast graphql API is in early stages of development, and as such may introduce breaking functionality at any time.
