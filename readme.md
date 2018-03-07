# Object to form

Convert an object to formdata


## Install

> $ npm install --save object-to-form


## Usage

Convert an object

```javascript
    // 3.- ES2015
    import { objectToForm } from 'object-to-form';

    let obj = {
        name: 'myName',
        list: [
            'Item1',
            'Item2',
            'Item3',
        ],
        address: {
            street: 'myStreet'
        },
        photo: new File() // File object
    };

    let formData = objectToForm(obj);
```

## Issues

> https://github.com/Lugriz/object-to-form




