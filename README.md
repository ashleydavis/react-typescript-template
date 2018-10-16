# react-typescript-template

A template for creating web apps based on React and TypeScript.

## Setup

Clone repo, open command line, change to repo directory.

Install dependencies:

    npm install

Build the web app:

    npm run build

## Run

Install live-server globally (or use another web server):

    npm install -g live-server

From the same directory as the repo start live-server:

    live-server

A browser is opened and navigated automatically to your template React app.

## Deploy to Azure

This repo contains a web.config and can be deploy easily to an Azure web app.

In the application settings for the web app make sure you set WEBSITE_NODE_DEFAULT_VERSION to 8.11.1.