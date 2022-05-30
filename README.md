<div align="center">

<img src="https://github.com/thothom/core/raw/master/resources/logo.gif" width="300" height="300" alt="">

# ThothOM MongoDB Example

[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)

</div>

Example project of `@thothom/mongodb`.

See the docs at: [https://thothom.com/docs/plugins/mongodb](https://thothom.com/docs/plugins/mongodb)

## How to test

- Run `yarn` to install the dependencies
- Create a `.env` file based on `.env.sample`
- Add the env vars to `.env` file
- Run `yarn start` to start the app
- Done! You can start to play now :)

| Route                           | Method   | Description    |
| ------------------------------- | -------- | -------------- |
| `http://localhost:3000`         | `POST`   | Create         |
| `http://localhost:3000`         | `PUT`    | Update         |
| `http://localhost:3000`         | `GET`    | List           |
| `http://localhost:3000`         | `DELETE` | Delete         |
| `http://localhost:3000/complex` | `PUT`    | Complex Update |
| `http://localhost:3000/complex` | `GET`    | Complex List   |
| `http://localhost:3000/complex` | `DELETE` | Complex Delete |
