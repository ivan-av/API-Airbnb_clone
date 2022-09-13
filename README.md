# API Clone Airbnb

### Iván Daniel Avila Campos

--- 
# Routes

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery
- /api/v1/auth/verify-account

- /api/v1/users
    - GET 

- /api/v1/users/:id
    - GET  
    - PUT (ADMIN)
    - DELETE (ADMIN)

- /api/v1/users/me
    - GET
    - PUT
    - PATCH
    - DELETE

- /api/v1/auth/login
    - POST

- /api/v1/auth/register
    - POST

- /api/v1/auth/password-recovery
    - POST 
    - PATCH

# Paths of my user a through my application
### User not logged in

1. See the places
2. Can see see the info of the place

### Guest

1. Can see the places
2. Can see see the info of the place
3. Reserve
4. Cancel the reservation
4. Give a score once the reservation is finished

### Host

1. See the places
2. Can see the info of a place
3. Reserve
4. Give a score once the reservation is finished
5. Create places
6. Cancel the reservations en the places where the 'Host' role is a host
7. Can see user's profiles
8. Can see all the places that belong's to the host
9. Edit the place
10. Delete the place

### Admin

1. See the places
2. Can see the info of a place
3. Reserve
4. Give a score once the reservation is finished
5. Can see user's profiles
6. Edit the place
7. Delete the place
8. Modify roles
9. Delete a user
10. Modify a user
11. See host locations


### Accommodations

/api/v1/accommodations

/
- GET
- POST

/:id
- GET
- DELETE
- PUT
- PATCH

/:id/available/?arrival=value&departure=value
- GET 

/api/v1/accommodations/:id/make-reservation
- POST