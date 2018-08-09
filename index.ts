export function objectToForm(obj: any, form: FormData, level: string) {
    let f = form || new FormData();

    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            let levelProp = level ? level + '[' + k + ']' : k;

            if (typeof obj[k] === 'object' && obj[k] != null && !(obj[k] instanceof File)) {

                objectToForm(obj[k], f, levelProp);
                continue;
            }

            f.set( levelProp, obj[k] );
        }
    }

    return f;
}