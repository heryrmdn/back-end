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
    "status": "success",
    "code": 201,
    "message": "Register succesfull"
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": "error",
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
    "status": "error",
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
      "name": "Your Name",
      "image": null,
      "email": "youremail@mail.com",
      "phoneNumber": null,
      "sex": null
    }
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Something went wrong"
  }
  ```

  ***

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
    "name": "Your New Name",
    "phoneNumber": "088877776666",
    "sex": "Laki-laki"
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
    "status": "error",
    "code": 500,
    "message": "Something went wrong"
  }
  ```

  ***

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
    "status": "error",
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `GET /api/doctors	`

  REST API Get Doctor list

  > Get Doctor list

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/doctors
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get doctor list",
    "doctors": [
      {
        "id": 1,
        "name": "dr. Luis Schroeder",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
        "rating": 5,
        "hospital": "Fort Collins Hospital",
        "biography": "biography 1",
        "specialist": {
          "name": "Psychiatrist"
        }
      },
      {
        "id": 2,
        "name": "dr. Marian Sporer",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/811.jpg",
        "rating": 4,
        "hospital": "West Ahmed Hospital",
        "biography": "biography 2",
        "specialist": {
          "name": "Dentist"
        }
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

- `GET /api/doctors/:id	`

  REST API Get Doctor detail

  > Get Doctor detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/doctors/1
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get doctor detail",
    "doctor": {
      "id": 1,
      "name": "dr. Luis Schroeder",
      "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
      "rating": 5,
      "hospital": "Fort Collins Hospital",
      "biography": "biography 1",
      "specialist": {
        "name": "Psychiatrist"
      }
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

- `GET /api/articles/	`

  REST API Get Article list

  > Get Article list

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/articles
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get article list",
    "articles": [
      {
        "id": 1,
        "title": "Understanding the Mind-Body Connection",
        "image": "https://loremflickr.com/640/480/people",
        "category": "Psychiatry",
        "createdAt": "2022-12-01T00:00:00.000Z",
        "updatedAt": null,
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "hospital": "Fort Collins Hospital",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      },
      {
        "id": 2,
        "title": "The Impact of Positive Psychology on Mental Health",
        "image": "https://loremflickr.com/640/480/people",
        "category": "Psychology",
        "createdAt": "2022-12-02T00:00:00.000Z",
        "updatedAt": null,
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "hospital": "Fort Collins Hospital",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

- `GET /api/articles/:id	`

  REST API Get Article detail

  > Get Article detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/articles/1
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get article detail",
    "article": {
      "id": 3,
      "title": "Nutritional Strategies for Optimal Mental Health",
      "image": "https://loremflickr.com/640/480/people",
      "description": "\n      The connection between nutrition and mental health is gaining attention in the realm of general health. Scientific studies explore the impact of diet on mood, cognition, and overall mental well-being.\n\n      Health experts emphasize the role of a balanced diet rich in essential nutrients for maintaining optimal mental health. Nutritional strategies are becoming integral to holistic health practices, highlighting the importance of a healthy mind and body.\n    ",
      "category": "General Heal",
      "doctorId": 1,
      "createdAt": "2022-12-03T00:00:00.000Z",
      "updatedAt": null,
      "doctor": {
        "name": "dr. Luis Schroeder",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
        "hospital": "Fort Collins Hospital",
        "specialist": {
          "name": "Psychiatrist"
        }
      }
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

- `POST /api/reservations	`

  REST API Create reservation

  > Create Reservation

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "doctorId": "2",
    "date": "2023-12-11",
    "time": "14:00:00",
    "packageId": "P0001"
  }
  ```

  _Path Example_

  ```
  POST https://back-end-production-a31e.up.railway.app/api/reservations
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 201,
    "message": "Success create reservation",
    "reservationId": 3
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

- `GET /api/reservations	`

  REST API Get Reservation list

  > Get Reservation list

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/reservations
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success Get reservation list",
    "reservations": [
      {
        "id": 7,
        "date": "2023-12-11",
        "status": "Approved",
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      },
      {
        "id": 8,
        "date": "2023-12-11",
        "status": "Pending",
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

- `GET /api/reservations/:id	`

  REST API Get Reservation detail

  > Get Reservation detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/api/reservations/7
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success Get reservation detail",
    "reservation": {
      "id": 7,
      "date": "2023-12-11",
      "time": "16:00:00",
      "status": "Approved",
      "createdAt": "2023-11-27T08:39:59.000Z",
      "updatedAt": "2023-11-27T08:51:47.000Z",
      "doctor": {
        "name": "dr. Luis Schroeder",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
        "hospital": "Fort Collins Hospital",
        "specialist": {
          "name": "Psychiatrist"
        }
      },
      "package": {
        "name": "Messaging",
        "price": 20,
        "duration": "00:30:00"
      }
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

# Klinik-Heula Dashboard API Docs

- `POST /dashboard-api/auth/register	`

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
  POST https://back-end-production-a31e.up.railway.app/dashboard-api/auth/register
  ```

  _Response (201)_

  ```json
  {
    "status": "success",
    "code": 201,
    "message": "Register succesfull"
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Something went wrong"
  }
  ```

  ***

- `POST /dashboard-api/auth/login	`

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
  POST https://back-end-production-a31e.up.railway.app/dashboard-api/auth/login
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Login successfull",
    "data": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlvdXJlbWFpbEBtYWlsLmNvbSIsImRvY3RvcklkIjoyMiwiaWF0IjoxNzAxMDc2NTA5fQ.Ln9Ts_OXOZTu5Bbjp8LX_JtpsA2zmS0wVh54Yb8nubI"
    }
  }
  ```

  _Response (500 - Internal server error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Something went wrong"
  }
  ```

---

- `GET /dashboard-api/reservations	`

  REST API Get Reservation list

  > Get Reservation list

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/dashboard-api/reservations
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get reservation list",
    "reservations": [
      {
        "id": 6,
        "date": "2023-12-11",
        "status": "Rejected",
        "customer": {
          "name": "Nana Kuni",
          "image": null
        }
      },
      {
        "id": 7,
        "date": "2023-12-11",
        "status": "Approved",
        "customer": {
          "name": "John Doe",
          "image": null
        }
      },
      {
        "id": 8,
        "date": "2023-12-11",
        "status": "Pending",
        "customer": {
          "name": "John Doe",
          "image": null
        }
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `GET /dashboard-api/reservations/:id	`

  REST API Get Reservation detail

  > Get Reservation detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/dashboard-api/reservations/7
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get reservation detail",
    "reservation": {
      "id": 8,
      "date": "2023-12-11",
      "time": "14:00:00",
      "status": "Pending",
      "createdAt": "2023-11-27T08:44:36.000Z",
      "updatedAt": "2023-11-27T08:44:36.000Z",
      "customer": {
        "name": "John Doe",
        "image": null
      },
      "package": {
        "name": "Messaging",
        "price": 20,
        "duration": "00:30:00"
      }
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `PUT /dashboard-api/reservations/:id	`

  REST API Update Reservation

  > Update Reservation

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "status": "Approved"
  }
  ```

  _Path Example_

  ```
  PUT https://back-end-production-a31e.up.railway.app/dashboard-api/reservations/8
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success update reservation"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

- `GET /dashboard-api/articles/	`

  REST API Get Article list

  > Get Article list

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/dashboard-api/articles
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get article list",
    "articles": [
      {
        "id": 1,
        "title": "Understanding the Mind-Body Connection",
        "image": "https://loremflickr.com/640/480/people",
        "category": "Psychiatry",
        "createdAt": "2022-12-01T00:00:00.000Z",
        "updatedAt": null,
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "hospital": "Fort Collins Hospital",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      },
      {
        "id": 2,
        "title": "The Impact of Positive Psychology on Mental Health",
        "image": "https://loremflickr.com/640/480/people",
        "category": "Psychology",
        "createdAt": "2022-12-02T00:00:00.000Z",
        "updatedAt": null,
        "doctor": {
          "name": "dr. Luis Schroeder",
          "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
          "hospital": "Fort Collins Hospital",
          "specialist": {
            "name": "Psychiatrist"
          }
        }
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `GET /dashboard-api/articles/:id	`

  REST API Get Article detail

  > Get Article detail

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://back-end-production-a31e.up.railway.app/dashboard-api/articles/1
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success get article list",
    "article": {
      "id": 1,
      "title": "Understanding the Mind-Body Connection",
      "image": "https://loremflickr.com/640/480/people",
      "description": "\n      Exploring the intricate relationship between the mind and the body has been a focal point in psychiatry. Recent studies delve into the ways psychological well-being influences physical health and vice versa.\n\n      Psychiatric experts emphasize the importance of holistic approaches that consider both mental and physical aspects of an individual's health. Understanding this mind-body connection opens new avenues for comprehensive healthcare strategies.\n    ",
      "category": "Psychiatry",
      "doctorId": 1,
      "createdAt": "2022-12-01T00:00:00.000Z",
      "updatedAt": null,
      "doctor": {
        "name": "dr. Luis Schroeder",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
        "hospital": "Fort Collins Hospital",
        "specialist": {
          "name": "Psychiatrist"
        }
      }
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `POST /dashboard-api/articles	`

  REST API Create Article

  > Create Article

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "title": "Your title article",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    "category": "Healthy lifestyle"
  }
  ```

  _Path Example_

  ```
  POST https://back-end-production-a31e.up.railway.app/dashboard-api/articles/
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success create article"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `PUT /dashboard-api/articles/:id	`

  REST API Update Article

  > Update Article

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "title": "Your new title article",
    "description": "your new description",
    "category": "Healthy lifestyle"
  }
  ```

  _Path Example_

  ```
  PUT https://back-end-production-a31e.up.railway.app/dashboard-api/articles/11
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 200,
    "message": "Success update article"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***

  - `PUT /dashboard-api/articles/:id	`

  REST API Update Article photo

  > Update Article photo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  | Key   |        Value        |     Location |
  | :---- | :-----------------: | -----------: |
  | image | <<your_image_file>> | Request body |

  _Path Example_

  ```
  PUT https://back-end-production-a31e.up.railway.app/dashboard-api/articles/11
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "code": 201,
    "message": "Success update article photo"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

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
      "status": "error",
      "userId": 14,
      "createdAt": "2023-11-13T08:07:21.000Z",
      "updatedAt": "2023-11-13T08:07:21.000Z"
    }
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": "error",
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
    "status": "error",
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
    "status": "error",
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
    "status": "error",
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***
