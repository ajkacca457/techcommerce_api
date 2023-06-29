# techcommerce-api

This is a api project which is build using node Js and express JS framework. Using this api, It is possible to build front-end ecommerce store. This app will provide a products api endpoint that will fetch all the available products. It is possible to get single product and create new products using api endpoints. MongoDB and Mongoose were used to perform database functionalities.To use this api need users will need their own mongodb account. There are detailed instructions in this readme file on how to properly use and customize this api.

</h1>Additional description about the project and its features.</h1>

<h2>Built With</h2>

- NodeJS
- MongoDB
- Mongoose
- Express Js
- vanila javascript
- Postman for testing endpoints

<h2>Getting Started</h2>
To get a local copy up and running follow these simple example steps.

```
- first clone the repository
- use your terminal
- go to the project directory using cd (directory name)
- run "npm install" to install all the dependencies
- create an env folder containing config.env file.

    Populate following variables in env file
        -PORT=5000
        -MONGO_URI
        -MV_UPLOAD_PATH
        -MV_MAX_FILE_SIZE
    Mongo uri is the connection string from you   mongodb atlas account. Set image upload folder path as mv_upload_path and set up a limit for max file size.

- run "npm run start" to start server in production environment

```

<h2>API Documentation</h2>

```
Endpoints:
    - /api/v1/products to get all products (GET method)
    - /api/v1/products/:id to get single product (GET method)
    - /api/v1/products to create single product (POST method)
```

<h2>Prerequisites for this project</h2>

```
- A good text editor (ex.Vscode)
- Github profile
- Git installed in your local machine
- Mongodb user account
- Own Mongodb cluster
```

<h2>Limitations of the project</h2>

```
- The api is not live.
- To use the api user needs to get the variables that are empty in env file

```

<h2>Authors</h2>

👤 Author1

Github: [@Avijit](https://github.com/ajkacca457)

Linkedin:[@Avijit](https://www.linkedin.com/in/avijit-karmaker-8738a54)

<h2> 🤝 Contributing</h2>

Contributions, issues and feature requests are welcome!

Feel free to check the issues page.

Show your support
Give a ⭐️ if you like this project!

 <h2> 📝 License</h2>
This project is a personal project of Avijit.
`````
