This is a simple Programmer Jokes API. It contains a database of jokes and returns a random joke when the default GET api endpoint is called. 

You can get a random joke with 
https://programming-humor.herokuapp.com/

If you would like to pull up a specific joke you can retrieve it with a GET request to
https://programming-humor.herokuapp.com/:id

You can also add jokes to the API by sending a POST request to 
https://programming-humor.herokuapp.com/add
You will need a body that contains an object with a setup and a punchline key

You also have the ability to update a joke by sending a PUT request to 
https://programming-humor.herokuapp.com/:id
You will need to send a body that contains an object with a setup and a punchline key

If you want to delete a joke you can remove it from the database by sending a DELETE request to
https://programming-humor.herokuapp.com/:id

none of these endpoints are protected. Meaning this API is probably going to get spammed with jokes. I can not be held responsible for the content that is added. The power is in your hands now.
