# Vehicle Transfer Module

## Overview

The Vehicle Transfer Module is a web application designed to manage a catalog of drivers and vehicles. It allows users to transfer vehicles between drivers, maintains a history of all transfers, and is built with a focus on TypeScript, Nest.js, Next.js, and TypeORM.

## Features

- **Driver Catalog**: Store and manage information about drivers.
- **Vehicle Catalog**: Store and manage information about vehicles.
- **Vehicle Transfers**: Transfer vehicles between drivers and maintain transfer history.
- **Future Expansion**: Easily adaptable to support transfers to entities beyond drivers.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Nest.js](https://nestjs.com/)
- **Database**: [MySQL](https://www.mysql.com/) with [TypeORM](https://typeorm.io/)
- **TypeScript**: Used throughout the project for type safety and modern JavaScript features.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MySQL database
- Yarn or npm (package managers)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/vehicle-transfer-module.git
    cd vehicle-transfer-module
    ```

2. **Install Dependencies**

    ```bash
    yarn install
    # or
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add your database configuration. Example:

    ```env
    DATABASE_HOST=sql12.freesqldatabase.com
    DATABASE_PORT=3306
    DATABASE_USERNAME=sql12728040
    DATABASE_PASSWORD=6teES33BYT
    DATABASE_NAME=sql12728040
    ```

4. **Run Migrations**

    Make sure the database schema is up-to-date.

    ```bash
    yarn typeorm migration:run
    # or
    npm run typeorm migration:run
    ```

5. **Start the Application**

    ```bash
    yarn start
    # or
    npm start
    ```

### Usage

- **Frontend**: Navigate to `http://localhost:3000` to access the web application.
- **Backend**: The API is available at `http://localhost:3000/api`.

### Folder Structure

- **`src/`**: Source code directory.
  - **`app.module.ts`**: Main application module.
  - **`drivers/`**: Contains drivers-related modules, services, and controllers.
  - **`vehicles/`**: Contains vehicles-related modules, services, and controllers.
  - **`transfers/`**: Contains transfers-related modules, services, and controllers.
- **`ormconfig.ts`**: TypeORM configuration file.
- **`dist/`**: Compiled output directory (should be ignored in the repository).

### Contributing

1. **Fork the Repository**
2. **Create a New Branch**

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Commit Your Changes**

    ```bash
    git add .
    git commit -m "Add your commit message"
    ```

4. **Push to Your Fork**

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a Pull Request**

    Go to the original repository and open a pull request from your branch.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
