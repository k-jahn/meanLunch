// quick and dirty input sanitizer
// todo - research threat scenarios or replace with plugin!

const sanitize = function(arg) {
    switch (typeof arg){
        case 'string':
        return arg.replace(/[^A-Za-z0-9.\-! ]/g, '');
        case 'number':
        case 'boolean':
        return arg;
        case 'object':
        Object.keys(arg).map((x => arg[x]= sanitize(arg[x])));
        return arg;
        default:
        return 'sanitize: type error!';
    }
};

module.exports = sanitize; 
