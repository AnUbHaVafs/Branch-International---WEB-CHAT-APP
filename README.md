# Branch-International---WEB-CHAT-APP (For Agents)
Web Chat App ( Managing all Agent's Responses)

# Project Name

Brief description of your project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/): Download and Install Node.js
- [MongoDB](https://www.mongodb.com/try/download/community): Download and Install MongoDB

## Installation

1. Clone the repository:

    ```bash
   git clone https://github.com/your-username/your-project.git

2. Navigate to the project directory:
    ```bash
    cd your-project

3. Install frontend dependencies:
    ```bash
   cd client
   npm install
4. Install backend dependencies:
     ```bash
    cd ../server
    npm install

## Configuration

1. Create a `.env` file in the `server` directory for environment variables:
     ```bash
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/your-database-name
     
Replace `your-database-name` with the desired name for your MongoDB database.

## Running the Application

1. Start the MongoDB server:
- On Windows:
  ```
  mongod
  ```
- On macOS or Linux:
  ```
  sudo service mongod start
  ```

2. Start the backend server:            
