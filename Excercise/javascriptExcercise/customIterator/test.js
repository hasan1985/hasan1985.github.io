let ob = {
    name: "ob",
    fun: function (params) {
        console.log(this, "in fun");
    },
    innerObj: {
        fl: "fl",
        innerInnerObj: {
            num: 1,
            str: "string",
            fun: function name() {
                console.log(this, this.name);
            }
        }
    }
};

ob.__proto__ = {
    inh: "inhe"
}


let copy = Object.create(ob);

function myDeepCopy(obj) {
    let shallowCopy = Object.create(obj);
    for (let key of Object.keys(shallowCopy)) {
        console.log(f);
        shallowCopy[key] = myDeepCopy(shallowCopy[key]);
    }
    return shallowCopy;
}

let myCopy = myDeepCopy(ob);

function name(params) {
    console.log("fun name");
}

let copyFun = Object.create(name);

console.dir(copyFun);
// console.log(ob.inh);