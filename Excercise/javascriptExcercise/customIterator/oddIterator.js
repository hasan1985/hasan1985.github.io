// print odd numbers by a custom iterator
// 

class MyOddIndex {

    constructor(init = 0, last) {
        this.num = [3,5,7,9,11,13,15,17];
        this.init = init;
        this.last = last ? last : this.num.length;
    }

    [Symbol.iterator] = function() {
        return {
            current: this.init,
            last: this.last,
            someCustomData: this.num, // keep a ref if anything is needed to do the iteration.
            next() {
                if (this.current < this.last) {
                    return {
                        done: false,
                        value: this.someCustomData[this.current++]
                    };
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

let odds = new MyOddIndex(1,4);
for(let i of odds) {
    console.log(i); // 5,7,9
}