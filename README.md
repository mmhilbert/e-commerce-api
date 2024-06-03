# E-commerce Back End Starter Code
This project provides the back end for an e-commerce site by using an Express.js API configured with Sequelize to interact with a PostgreSQL database. It allows for managing categories, products, and tags through a RESTful API.

## Features

- Connect to a PostgreSQL database using Sequelize.
- CRUD operations for categories, products, and tags via RESTful API endpoints.
- API testing through Insomnia Core.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL
- Insomnia Core or any other API testing tool

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mmhilbert/e-commerce-api.git
   cd e-commerce-api
2. **Install Dependencies**
    ```bash
    npm install
3. **Set up PostgreSQL:**
    ```bash
    Ensure that PostgreSQL is installed on your machine and create a database for the project.
4. **Configure environment variables:**
<br>
Create a .env file in the root directory and add the following environment variables:

    ```bash
    DB_NAME='ecommerce_db'
    DB_USER='yourPostgresUsername'
    DB_PASSWORD='yourPostgresPassword'

## Database Setup
1. Create the database:
    ```bash
    psql -U yourPostgresUsername
    yourPostgresPassword
    \i db/schema.sql
    \q 
2. Seed the database
    ```bash
    npm run seed

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits
[GitHub Repo](https://github.com/mmhilbert/e-commerce-api) <br>
[Application Video](https://drive.google.com/file/d/14lGThr6lGNSouRA_sVDMRBJXMvNS-PZq/view?usp=sharing)





