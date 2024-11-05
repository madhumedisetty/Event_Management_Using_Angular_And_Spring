# Event_Management_Using_Angular_And_Spring

## Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** MySQL (or any preferred database)
- **HTTP Client:** Angular's HttpClient module for API communication

### Prerequisites

- Node.js (v14 or later)
- Angular CLI
- Java JDK (v11 or later)
- Maven
- MySQL (or any preferred database)


# Backend

This is the backend for a **Task Management System** built with **Spring Boot**. It provides RESTful APIs for managing tasks, including features like creating, updating, deleting, searching, and filtering tasks by various attributes. This backend serves as the API layer and can be integrated with a frontend application.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)
- [Exception Handling](#exception-handling)

## Features

- **Create Task**: Add new tasks with attributes like title, description, due date, category, priority, and completion status.
- **Update Task**: Modify task details.
- **Delete Task**: Remove tasks by ID.
- **Retrieve All Tasks**: Fetch all tasks.
- **Retrieve Task by ID**: Get task details by ID.
- **Search Tasks**: Search tasks by title.
- **Filter by Category**: Fetch tasks based on category.
- **Mark Task as Completed**: Update the completion status of a task.
- **Filter by Priority**: Fetch tasks based on priority.


**Access the API**
   - The API root URL will be `http://localhost:8080/api/v1/`.

## API Endpoints

### Task Management

- **Get All Tasks**
  - `GET /api/v1/tasks`
  - Returns a list of all tasks. 
    ![image](https://github.com/user-attachments/assets/25d790d7-ea4b-4301-bda2-63a752494ec6)


- **Get Task by ID**
  - `GET /api/v1/tasks/{id}`
  - Returns task details by ID.
 
    ![image](https://github.com/user-attachments/assets/05ab3988-9d47-4e74-aef8-35ac2525b68c)


- **Create a Task**
  - `POST /api/v1/tasks`
  - Adds a new task.
  - **Body**: JSON representation of a task (title, description, due date, etc.).
 
    ![image](https://github.com/user-attachments/assets/a0d44e59-0714-4dc7-b511-f615f5642071)


- **Update a Task**
  - `PUT /api/v1/tasks/{id}`
  - Updates a task’s details.
  - **Body**: JSON representation of task details to update.
 
    ![image](https://github.com/user-attachments/assets/4b464634-d7e4-4fd3-86f3-51ead7350cc2)


- **Delete a Task**
  - `DELETE /api/v1/tasks/{id}`
  - Deletes a task by ID.
 
    ![image](https://github.com/user-attachments/assets/5d73c8dc-c0e3-4d39-8ab3-5502cdff056a)

    ![image](https://github.com/user-attachments/assets/e5abe189-9214-4668-9ce3-84e2dbdc635a)



### Additional Features

- **Get Tasks by Category**
  - `GET /api/v1/tasks/category?category={category}`
  - Returns tasks filtered by category.

- **Mark Task as Completed**
  - `PUT /api/v1/tasks/{id}/completed`
  - Marks a task as completed by ID.

- **Search Tasks**
  - `GET /api/v1/tasks/search?query={query}`
  - Returns tasks containing the query string in the title.

- **Get Tasks by Priority**
  - `GET /api/v1/tasks/priority?priority={priority}`
  - Returns tasks filtered by priority.
    

## Exception Handling

- **ResourceNotFoundException**
  - This exception is thrown when a requested task is not found in the database.
  - The API returns a `404 Not Found` status with a message indicating the issue.


# Frontend

A Task Management System built with Angular for the frontend and Spring Boot for the backend. This application allows users to manage tasks efficiently by creating, updating, deleting, and categorizing them.

## Features

- Create, Read, Update, and Delete tasks.
- Filter tasks by category and priority.
- Search for tasks by keywords.
- Mark tasks as completed.

![WhatsApp Image 2024-11-04 at 17 08 00_f55a4d5f](https://github.com/user-attachments/assets/ff0d57d1-f1be-4e36-81fe-a074d571dd03)

![WhatsApp Image 2024-11-04 at 17 08 00_82c96192](https://github.com/user-attachments/assets/42de5d23-dac3-4323-b9c7-557dfc60ced6)

![WhatsApp Image 2024-11-04 at 17 08 00_85f51427](https://github.com/user-attachments/assets/b6119f1b-6cf3-424c-bff9-5b6b157eb26f)

![WhatsApp Image 2024-11-04 at 17 08 01_872334e9](https://github.com/user-attachments/assets/5f42e023-1b56-4924-92b2-c7cd6c4a1aa0)
