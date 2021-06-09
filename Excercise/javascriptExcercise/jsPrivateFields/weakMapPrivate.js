/*
maintain a wrapper scope for the class
*/

let Person = (function() {
    let privatePropMap = new WeakMap();  
    class Person {
        constructor(myPubField, myPriField) {
            this.myPubField = myPubField;

            let privateProperties = {
                myPriField: myPriField
            };
            privatePropMap.set(this, privateProperties);
        }

        getMyPriField() {
            return privatePropMap.get(this).myPriField;
        }

        setMyPriField(newVal) {
            privatePropMap.get(this).myPriField = newVal;
        }
    }

    return Person;  // how this works? returning a class defination?
})();

let person = new Person("pub", "pri");
console.log(person.myPubField);
console.log(person.myPriField);
console.log(person.getMyPriField());
person.setMyPriField("newPri");
console.log(person.getMyPriField());

