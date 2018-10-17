# react-typescript-template

A template for creating web apps based on React and TypeScript.

## Setup

Clone repo, open command line, change to repo directory.

Install dependencies for server:

    cd server
    npm install

Then install dependencies for the client:

    cd client
    npm install

## Build

Build the server app:

    cd server
    npm run build

Build the web app:

    cd client
    npm run build

## Run (revise this)

Install live-server globally (or use another web server):

    npm install -g live-server

From the same directory as the repo start live-server:

    live-server

A browser is opened and navigated automatically to your template React app.

## Deploy to Azure

This repo contains a web.config and can be deploy easily to an Azure web app.

In the application settings for the web app make sure you set WEBSITE_NODE_DEFAULT_VERSION to 8.11.1.

## Testing

Run the dev server:

    npm run start:dev

Run cypress:

    npm test

Open cypress GUI:

    npm run cypress