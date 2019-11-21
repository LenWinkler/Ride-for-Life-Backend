## Endpoints

#### **All values are strings unless otherwise noted**

#### **All values are required unless otherwise noted**

### POST  https://ride-for-life-back-end.herokuapp.com/api/auth/register_user
* Endpoint to register a new user
* Request example:

```
{
  users_name: "Example User", 
  users_plot: "165", 
  users_phone_number: "164-1535-1256", 
  users_email: "exampleuser@gmail.com", 
  password: "password", 
  due_date: "2019-12-15" <------ OPTIONAL
}
```

* Returns new user:

```
{
  id: 4,
  users_name: "Example User",
  users_plot: "165",
  users_phone_number: "164-1535-1256",
  users_email: "exampleuser@gmail.com",
  password: "$2a$11$0winsjO6UOd15Lvp8OPkSulb.3ygTiI0TEm5jh8ajn8p2I5kNqnci",
  due_date: "2019-12-15",
  role: "user"
}
```

### POST  https://ride-for-life-back-end.herokuapp.com/api/auth/register_driver
* Endpoint to register a new driver
* Request example:

```
{
  drivers_name: "Example Driver", 
  drivers_plot: "126", 
  drivers_phone_number: "455-743-4567",
  drivers_email: "exampledriver@gmail.com",
  password: "password",
  drivers_price: 50 // <-------- INTEGER
}
```

* Returns new driver:

```
{
  id: 4,
  drivers_name: "Example Driver",
  drivers_plot: "126",
  drivers_phone_number: "455-743-4567",
  drivers_email: "exampledriver@gmail.com",
  password: "$2a$11$6KrbRqwqt3cYwbyqtu8xVeIOi1WdsdkDpZS9zBc9W.dVT5k7X/g9W",
  drivers_price: 50,
  role: "driver"
}
```

### POST  https://ride-for-life-back-end.herokuapp.com/api/auth/user_login
* Endpoint to login as a user
* Request example: 

```
{
  users_email: "exampleuser@gmail.com",
  password: "password"
}
```

* Returns id and token:

```
{ 
  id: 4,
  "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgVXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTc0MTE1OTY2LCJleHAiOjE1NzQyMDIzNjZ9.5SMRUcR0BzS6I4Bceh7UuuTzvU0IBEGI6y2QQ_jKkJM"
}
```

### POST  https://ride-for-life-back-end.herokuapp.com/api/auth/driver_login
* Endpoint to login as a driver
* Request example:


```
{
  drivers_email: "exampledriver@gmail.com",
  password: "password"
}
```

* Returns id and token:

```
{ 
  id: 4,
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgRHJpdmVyIiwicm9sZSI6ImRyaXZlciIsImlhdCI6MTU3NDExNjIxMywiZXhwIjoxNTc0MjAyNjEzfQ.lza43m8Zg8uAm1hg2Na4g3EKtcb_tDlYbG3zo6GqSSc"
}
```

## **The following endpoints require a Token**
------------------------------------------

### GET  https://ride-for-life-back-end.herokuapp.com/api/drivers
* Endpoint to get list of all drivers

### GET https://ride-for-life-back-end.herokuapp.com/api/drivers/:id

* Endpoint to get single driver by id
* Returns driver's info:

```
{
    "id": 4,
    "drivers_name": "Example Driver",
    "drivers_plot": "126",
    "drivers_phone_number": "455-743-4567",
    "drivers_email": "exampledriver@gmail.com",
    "password": "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
    "drivers_price": 50,
    "role": "driver"
}
```

### GET https://ride-for-life-back-end.herokuapp.com/api/drivers/:id/reviews

* Endpoint to get all reviews associated with a specific driver id
* Returns an array of review objects:

```
[
    {
        "id": 2,
        "reviewer": "seeduser1",
        "review_date": "2019-08-11",
        "rating": 3,
        "review_text": "Took a long time to get to my house but otherwise good",
        "user_id": 1,
        "driver_id": 3
    }
]
```

### PUT https://ride-for-life-back-end.herokuapp.com/api/drivers/:id

* Endpoint to update info for a driver
* Request example:

```
{
  "drivers_name": "updated_seeddriver3",
  "drivers_price": 85
}
```

* Returns the updated driver:
```
{
    "id": 3,
    "drivers_name": "updated_seeddriver3",
    "drivers_plot": "321",
    "drivers_phone_number": "234-123-4567",
    "drivers_email": "seeddriver3@gmail.com",
    "password": "$2a$10$nQYuikOFqTed.qKJQyhp1.hNOfIxHbzycv620x60e.pzCoxv/R21W",
    "drivers_price": 85,
    "role": "driver"
}
```

### DELETE https://ride-for-life-back-end.herokuapp.com/api/drivers/:id

* Endpoint to delete a driver
* Returns success message:

```
{
    "message": "Driver deleted successfully"
}
```

### GET https://ride-for-life-back-end.herokuapp.com/api/users/:id

* Endpoint to get user by id
* Returns user's info:

```
{
    "id": 4,
    "users_name": "Example User",
    "users_plot": "165",
    "users_phone_number": "164-1535-1256",
    "users_email": "exampleuser@gmail.com",
    "password": "$2a$11$CtbBrM.jNqDHhUN3g1iZnOi8dSXndORhqk3203TK6AUafIhKSFP.2",
    "due_date": "2019-12-15",
    "role": "user"
}
```

### GET https://ride-for-life-back-end.herokuapp.com/api/users/:id/reviews

* Endpoint to get all reviews associated with a user id
* Returns an array of review objects:

```
[
    {
        "id": 2,
        "reviewer": "seeduser1",
        "review_date": "2019-08-11",
        "rating": 3,
        "review_text": "Took a long time to get to my house but otherwise good",
        "user_id": 1,
        "driver_id": 3
    }
]
```

### PUT https://ride-for-life-back-end.herokuapp.com/api/users/:id

* Endpoint to update info for a user
* Request example:

```
{
  "users_name": "updated_seeduser1",
  "users_plot": "111",
  "users_phone_number": "125-1234-3456"
}
```

* Returns the updated user:

```
{
    "id": 1,
    "users_name": "updated_seeduser1",
    "users_plot": "111",
    "users_phone_number": "125-1234-3456",
    "users_email": "seeduser1@gmail.com",
    "password": "$2a$10$CWHJ2fQ8j5y8ZBQ6WnSs5.JRu0KSwBLrRg6GMbLlIB7LKO5OCcoQq",
    "due_date": "2019-12-15",
    "role": "user"
}
```

### DELETE https://ride-for-life-back-end.herokuapp.com/api/users/:id

* Endpoint to delete a user
* Returns success message:

```
{
    "message": "User deleted successfully"
}
```

### POST https://ride-for-life-back-end.herokuapp.com/api/reviews

* Endpoint to add a review
* Request example:

```
{
        "reviewer": "Example User",
        "review_date": "2019-09-12",
        "rating": 5, <-------- INTEGER
        "review_text": "Great driver. No issues at all",
        "user_id": 2, <-------- INTEGER
        "driver_id": 3 <-------- INTEGER
}
```

* Returns added review:

```
{
    "id": 4,
    "reviewer": "Example User",
    "review_date": "2019-09-12",
    "rating": 5,
    "review_text": "Great driver. No issues at all",
    "user_id": 2,
    "driver_id": 3
}
```

### PUT https://ride-for-life-back-end.herokuapp.com/api/reviews/:id

* Endpoint to update a review
* Request example:

```
{
  "reviewer": "Update Example",
  "review_date": "2018-07-21",
  "rating": 4, <-------- INTEGER
  "review_text": "Driver was good. No complaints",
  "user_id": 2, <-------- INTEGER
  "driver_id": 1 <-------- INTEGER
}
```

* Returns updated review:

```
{
    "id": 4,
    "reviewer": "Update Example",
    "review_date": "2018-07-21",
    "rating": 4,
    "review_text": "Driver was good. No complaints",
    "user_id": 2,
    "driver_id": 1
}
```

### DELETE https://ride-for-life-back-end.herokuapp.com/api/reviews/:id

* Endpoint to delete a review
* Returns success message:

```
{
    "message": "Review deleted successfully"
}
```
