const m2s = require('mongoose-to-swagger');
const User =  require('./models/user.model');
const Product = require('./models/product.model');

exports.options = {
    "components": {
        "schemas": {
            User: m2s(User),
            Product: m2s(Product)
        }
    },
    "openapi": "3.1.0",
    "info": {
        // V1 means a finished app (major release)
        "version": "1.0.0",
        "title": "Products CRUD API",
        "description": "Products Project Application",
    },
    "contact": {
        "name": "API Support",
        "url": "https://www.example.com",
        "email": "email@gmail.com"
    },
    "servers": [
        {
            url : "http://localhost:3000",
            description: "Local Server"
        },
        {
            url: "http://www.example.com",
            description: "Testing server"
        }
    ],
    "tags": [
        {
            "name": "Users",
            "description": "API for Users"
        },
        {
            "name": "Products",
            "description": "API for Products"
        },
        {
            "name": "Users and Products",
            "description": "API for the User's products"
        }
    ],
    "paths": {
        "/api/users": {
            "get": {
                "tags": [
                    "Users"
                ],
                "summary": "Get all users",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/components/schemas/User"
                        }
                    }
                }
            }
        },
        "/api/users/{username}": {
            "get":{
                "tags": [
                    "Users"
                ], 
                "parameters": [
                    {
                        "name": "username",
                        "in" : "path",
                        "required": true,
                        "description": "Username of user to find",
                        "type": "string"
                    }
                ],
                "summary": "Get user with a specific name",
                "responses": {
                    "200": {
                        "description": "User found",
                        "schema": {
                            "$ref": "#/components/schemas/User"
                        }
                    }
                }
            }
        },
        "/api/users-products": {
            "get": {
                "tags": [
                    "Users and Products"
                ],
                "summary": "Get all the products from a user",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/components/schemas/User"
                        }
                    }
                }
            }
        }
    }
}