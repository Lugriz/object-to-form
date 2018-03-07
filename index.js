'use strict'

function objectToForm(obj, form, level) {
    let f = form || new FormData();

    for (let k in obj) {

        let levelProp = level ? level + '[' + k + ']' : k;

        if (typeof obj[k] === 'object' && !(obj[k] instanceof File)) {

            objectToForm(obj[k], f, levelProp);
            continue;
        }

        f.set( levelProp, obj[k] );
    }

    return f;
};

module.exports = { objectToForm };