function launch (x,y,callback) {
    return callback(x,y);
}

function random (x,y) {
    return 'Random number from ' + x + ' to ' + y + ' is: ' + Math.floor((Math.random() * y) + x);
}

function divide (x,y) {
    if (y == 0) {
        return x + ':' + y + ' = '+ 'Error: Can\'t divide by zero';
    }
    else {
        return x + ':' + y + ' = '+ x/y;
    }
}

console.log(launch(0,20,random));
console.log(launch(30,6,divide));
console.log(launch(3,0,divide));
