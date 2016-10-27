var popsicle = require('popsicle')

function createUser (title, due, onSuccess, onFailure) {
    popsicle.request({
            method: 'POST',
            url: 'http://lacedeamon.spartaglobal.com/todos',
            body: {
                title: title,
                due: due
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(function (res) {
            if (res.status == 201)
                onSuccess('User ' + title + ' ' + due + ' was created successfully!');
            else {
                onFailure('Can\'t create ' + title + ' ' + due + ' user.');
            }
        })
}

createUser('Alex Min',19, function (result) {
        console.log(result);
    },
    function (result) {
        console.log(result);
    }
);

createUser('Alex Min',99, function (result) {
        console.log(result);
    },
    function (result) {
        console.log(result);
    }
);