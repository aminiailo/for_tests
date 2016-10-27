CALLBACK:
1) Create 2 functions: first will create random number from x till y and return it.
second will divide x/y and return result. Return error, if x can’t be divided by y.
Create function(x, y, callback) which will return callback with arguments(x,y,).
Print in console your results.

node callback_1

2) Create entity in lacedeamon API. You should write onSuccess(201 response) and onFailure(422 response) callbacks.

node callback_2

PROMISES:
1) Create POST request which will be in promise. Describe onSuccess(201 response) and onFailure(422 response) variants.

node promise_1

2) Create POST request which will be rejected always, even you set correct parameters.

node promise_2

3) Create 3 POST requests. Check that all responses codes equal 200.

node promise_3

4) Create POST request with invalid parameters. But you should catch error, and return 200 response code.

node promise_4
