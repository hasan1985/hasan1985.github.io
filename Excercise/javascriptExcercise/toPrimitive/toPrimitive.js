// https://javascript.info/object-toprimitive#symbol-toprimitive

class Person {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    [Symbol.toPrimitive] = function(hint) {
        if (hint === "number") {
            console.log("num")
            return this.money;
        } else if (hint === "string") { // not sure when it is called with hint == string
            console.log("str")
            return this.name;
        } else if (hint === "default") {
            console.log("def")
            return this.money;
        } else {
            console.log("no hint");
        }
    }

    toString() {
        return this.name;
    }

    valueOf() {
        return this.money;
    }
}

const per = new Person("abc", 1000);
console.log(per + "");
console.log(per.toString());
console.log(per.valueOf())

// usually using toString kind of works for all cases.
// read the summary https://javascript.info/object-toprimitive#summary