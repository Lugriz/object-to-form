export function objectToForm(obj: any, form: FormData, level: string) {
    let f = form || new FormData();

    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            let levelProp = level ? level + '[' + k + ']' : k;

            // If it is a date, it parses to ISO format
            if (obj[k] instanceof Date) {

                f.set( levelProp, obj[k].toISOString() );
                continue;

            } else if (obj[k] === null || obj[k] === undefined) {

                f.set( levelProp, '' );
                continue;

            } else if (typeof obj[k] === 'object' && !(obj[k] instanceof File) && !(obj[k] instanceof Blob) ) {

                objectToForm(obj[k], f, levelProp);
                continue;
            }


            f.set( levelProp, obj[k] );
        }
    }

    return f;
}