"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectToForm(obj, form, level) {
    var f = form || new FormData();
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            var levelProp = level ? level + '[' + k + ']' : k;
            if (typeof obj[k] === 'object' && obj[k] != null && !(obj[k] instanceof File)) {
                objectToForm(obj[k], f, levelProp);
                continue;
            }
            f.set(levelProp, obj[k]);
        }
    }
    return f;
}
exports.objectToForm = objectToForm;
