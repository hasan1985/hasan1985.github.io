const inputObj1 = {
    firstName: "firstName", // same
    lastName: "lastName",   // changed
    age: 10,    // extra
    
    innerObj: { // same
        dept: "sells"
    },

    changedObj: {
        a: "a"
    },

    extraObj: {
        xo: "xo"
    },

    sameFieldDiffType: "string"
}

const inputObj2 = {
    firstName: "firstName",          // same
    lastName: "lastName_changed",   // changed
    address: "abc",  // missing in inputObj1

    innerObj: { // same in both
        dept: "sells"
    },

    changedObj: {   // field exists but diff object
        a: "b",
        obj: {
            obja: "sdf",
            objb: {
                wer: "wrtw"
            }
        }
    },

    missingObj: {
        mo: "mo"
    },

    sameFieldDiffType: {
        field: "string"
    }
}

const output = {
    "+lastName" : "lastName",
    "-lastName": "lastName_changed",
    "+age": 10,
    "-address": "abc",

    "changedObj": {
        "+a": "a",
        "-a": "b"
    },

    "+extraObj": {
        "xo": "xo"
    },

    "-missingObj": {
        "mo": "mo"
    },

    "+sameFieldDiffType": "string",
    "-sameFieldDiffType": {
        field: "string"
    }

}

let diff = compareObject(inputObj1, inputObj2);

console.dir(diff);

function compareObject(a,b) {
    let result1 = hasSameFields(a,b, "+");
    let result2 = hasSameFields(b,a, "-");
    Object.assign(result1, result2);
    return result1;
}

function hasSameFields(a,b, prefix) {
    let result = {};
    for (let key of Object.keys(a)) {
        let isSame = false;
        if (b[key] != undefined) {
            if (typeof a[key] === "object" && typeof b[key] === "object") {
                let misMatch = compareObject(a[key], b[key]);
                if (Object.keys(misMatch).length > 0) {
                    result[key] = misMatch;
                }
                continue;
            } else {
                isSame = a[key] == b[key];
            }
        }

        if (!isSame) {
            result[prefix + key] = a[key];
        }
    }
    return result;
}