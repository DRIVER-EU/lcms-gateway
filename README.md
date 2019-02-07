# LCMS Gateway Service

DISCLAIMER: This is a work in progress!

Collaboration between TNO and IFV to create an API to open up the Dutch National Crisis Management System, LCMS.

## Goal

The goal of this project is to offer an OpenAPI (formerly known as Swagger) Application Programmer Interface to interact with the LCMS. The solution offered here uses TypeScript and is based on the open source framework [NESTJS](https://nestjs.com).

## Use cases

- Login using a username and password, get token (preferably a [JSON Web Token](https://jwt.io))
- Retrieve all activities in the exercise or actual environment
- For an activity:
  - Get the plot data as [GeoJSON](http://geojson.org)
  - Get the multidisciplinary and monodisciplinary logs (ID, title, description)
  - For each log:
    - Get the headers
    - Update the text
  - Subscribe to one or more activities:
    - Receive update notifications via WebSockets

## Installing the service

Assuming you have a recent version of [node.js](http://nodejs.org) installed, run:

```console
npm run bootstrap
```

Or alternatively, if you have `pnpm` (`npm i -g pnpm`) installed:

```console
pnpm m i # Only have 1 copy of a package on your harddisk
```

To run the service:

```console
npm start
```

## Using the API

You can find the API at [http://localhost:3333/api](http://localhost:3333/api).

You can override the port in your environment settings:

- LCMS_GATEWAY_PORT: default 3333.
