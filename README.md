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
* Returns:
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
* Returns:
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
* Returns:
```
{ 
  id: 4,
  "token":       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgVXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTc0MTE1OTY2LCJleHAiOjE1NzQyMDIzNjZ9.5SMRUcR0BzS6I4Bceh7UuuTzvU0IBEGI6y2QQ_jKkJM"
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
* Returns:
```
{ 
  id: 4,
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgRHJpdmVyIiwicm9sZSI6ImRyaXZlciIsImlhdCI6MTU3NDExNjIxMywiZXhwIjoxNTc0MjAyNjEzfQ.lza43m8Zg8uAm1hg2Na4g3EKtcb_tDlYbG3zo6GqSSc"
}
```
