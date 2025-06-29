# QuickShow Project Setup

This project has two main parts. One is the client and the other is the server.

## What was changed

1. Changed the filename from serve.js to server.js
2. Created a Dockerfile for the client
3. Created a Dockerfile for the server
4. Created a docker compose file to run both client and server together

## How to Run the Project

Before you begin, make sure Docker and Docker Compose are installed on your computer.

### Step 1: Clone the Repository

Open your terminal and type the following:

```
git clone https://github.com/iamzasem/TicketBooking-MERN-Stack.git
cd QuickShow
```

### Step 2: Start the App

Run this command inside the project folder:

```
docker compose up --build
```

This will build and start both the client and server.

### Step 3: Open in Browser

After it starts, open your browser and go to:

```
http://localhost:5173 (to run the client)
http://localhost:3000 (to run the server)
```

Replace PORT with the correct port number written in the docker compose file.

### Step 4: Stop the App

To stop everything, press Ctrl + C in the terminal. Then run:

```
docker compose down
```

## Notes

- Make sure no other app is using the same port
- You can change the port in the docker compose file if needed

This setup helps run the project easily without installing everything one by one.
