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

You can pass a formdata previously created

```javascript
    // 3.- ES2015
    import { objectToForm } from 'object-to-form';

    // formdata previously created.
    let previousFormData = new FormData();

    // the previous formdata can has fields added
    previousFormData.append('field1', 'Hi!');

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

    // pass the previous formdata
    let formData = objectToForm(obj, previousFormData);
```

> **NOTE:** This package supports FileList on properties

```javascript
    // For Example
    let obj = {
        // FileList
        myFiles: [
            new File(),
            new File()
        ]
    };
```
## Issues

> https://github.com/Lugriz/object-to-form/issues

## Repository

> https://github.com/Lugriz/object-to-form.git




