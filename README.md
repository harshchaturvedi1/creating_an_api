# creating_an_api
this is wrtting  an api, which is basically simulating a student crud,   using node express.
##followings are the description and flow

- get / => this will return simple text "Welcome to Home page"
- get /users => this will return a list of all users
- post /users => you will pass the below json as request body and add that to the users collection
  > `{    
      "id": 1001,
      "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "ydalesco0@test.com",
      "gender": "Genderfluid",
      "ip_address": "164.215.194.36",
      "age": 65
  }`
- patch /user => you will pass the id and the user to be updated in the json and then update the user in the json
- delete /user => you will pass the id and the user to be deleted in the json and then delete the user in the json
