# Klinik-Heula API Docs

- `POST /api/auth/register	`

  REST API Register user

  > Register User

  _Request Body_

  ```json
  {
    "name": "Your Name",
    "email": "youremail@mail.com",
    "password": "yourpassword"
  }
  ```

  _Path Example_

  ```
  POST https://back-end-production-a31e.up.railway.app/api/auth/register
  ```

  _Response (201)_

  ```json
  {
    "status": true,
    "code": 201,
    "message": "Register succesfull"
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Something went wrong"
  }
  ```

  ***

  - `POST /api/auth/login	`

  REST API Login user

  > Login User

  _Request Body_

  ```json
  {
    "email": "youremail@mail.com",
    "password": "yourpassword"
  }
  ```

  _Path Example_

  ```
  POST https://back-end-production-a31e.up.railway.app/api/auth/login
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Login successfull",
    "data": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmFAZ21haWwuY29tIiwidXNlcklkIjoxMSwiaWF0IjoxNzAxMDQzNDEyfQ.U8EDUoC2slfHs7OT_qNritZu7z07A1YOQSLDvxpsYUQ"
    }
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `GET /api/user	`

  REST API Get User detail

  > Get User detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/user
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get user detail",
    "user": {
      "id": 11,
      "name": "Nana",
      "image": null,
      "email": "nana@gmail.com",
      "phoneNumber": null,
      "sex": null
    }
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `PUT /api/user	`

  REST API Update User

  > Update User

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "name": "Nana Kuni",
    "phoneNumber": "089709120912",
    "sex": "Perempuan"
  }
  ```

  _Path Example_

  ```
  PUT https://back-end-production-a31e.up.railway.app/api/user
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success update user"
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `PUT /api/user/upload	`

  REST API Update User photo

  > Update User photo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  | Key   |     Value      |     Location |
  | :---- | :------------: | -----------: |
  | image | <<image_file>> | Request body |

  _Path Example_

  ```
  PUT https://back-end-production-a31e.up.railway.app/api/user/upload
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success update user"
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `GET /todos	`

  REST API to show list of todo

  > Get All Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://tan-determined-pangolin.cyclic.app/todos
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "success get all todo",
    "data": [
      {
        "id": 23,
        "value": "Buy Milk",
        "status": false,
        "userId": 14,
        "createdAt": "2023-11-13T08:07:21.000Z",
        "updatedAt": "2023-11-13T08:07:21.000Z"
      },
      {
        "id": 26,
        "value": "Buy Egg",
        "status": false,
        "userId": 14,
        "createdAt": "2023-11-13T08:13:22.000Z",
        "updatedAt": "2023-11-13T08:13:22.000Z"
      },
      {
        "id": 27,
        "value": "Buy Vegetables",
        "status": false,
        "userId": 14,
        "createdAt": "2023-11-13T08:13:35.000Z",
        "updatedAt": "2023-11-13T08:13:35.000Z"
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

# Klinik-Heula Dashboard API Docs

---

---

---

---

---

- `GET /todos/:id`

  REST API to show detail todo

  > Get Todo By Id

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://tan-determined-pangolin.cyclic.app/todos/23
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "success get todo id: 23",
    "data": {
      "id": 23,
      "value": "Buy Milk",
      "status": false,
      "userId": 14,
      "createdAt": "2023-11-13T08:07:21.000Z",
      "updatedAt": "2023-11-13T08:07:21.000Z"
    }
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Data not found"
  }
  ```

  ***

- `UPDATE /todos/:id`

  REST API to update todo

  > Update Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "value": "Buy Fruits"
  }
  ```

  _Path Example_

  ```
  PUT https://tan-determined-pangolin.cyclic.app/todos/23
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success update todo id: 23"
  }
  ```

  _Response (400 - Bad Request)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Invalid request"
  }
  ```

  ***

- `DELETE /todos/:id`

  REST API to delete todo by id

  > Delete Todo by id

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  DELETE https://tan-determined-pangolin.cyclic.app/todos/23
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success delete todo id: 23"
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 404,
    "message": "Data not found"
  }
  ```

  ***

- `DELETE /todos`

  REST API to delete all todo

  > Delete all Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  DELETE https://tan-determined-pangolin.cyclic.app/todos
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success delete all todo"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***
