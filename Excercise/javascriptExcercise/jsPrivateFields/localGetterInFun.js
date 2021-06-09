let Person = function(pubFiled, priField) {
    let _priField = priField;
    this.pubFiled = pubFiled;

    // problem - every instance will have a new instance of this fun
    // usually we use prototype to avoid fun instance duplication, maybe ?? read prototype again!
    this.getPriField = function() {
        return _priField;
    }

    this.setPriField = function(newVal) {
        _priField = newVal;
    }
}

let person = new Person("pub", "pri");

console.log(person.pubFiled);
console.log(person.getPriField());
person.setPriField("newPri");
console.log(person.getPriField());