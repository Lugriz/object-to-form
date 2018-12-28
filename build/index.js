"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectToForm(obj, form, level) {
    var f = form || new FormData();
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            var levelProp = level ? level + '[' + k + ']' : k;
            if (obj[k] instanceof Date) {
                f.set(levelProp, obj[k].toISOString());
                continue;
            }
            else if (obj[k] === null || obj[k] === undefined) {
                f.set(levelProp, '');
                continue;
            }
            else if (typeof obj[k] === 'object' && !(obj[k] instanceof File) && !(obj[k] instanceof Blob)) {
                objectToForm(obj[k], f, levelProp);
                continue;
            }
            f.set(levelProp, obj[k]);
        }
    }
    return f;
}
exports.objectToForm = objectToForm;
