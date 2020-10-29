function onSavePerson(form) {
    let list = this.getList()
    let newPerson = {};
    newPerson.name = form.personName.value;
    newPerson.age = form.age.value;
    list.push(newPerson);
    this.saveList(list);
}

function removeItemByName(name) {
    console.log(this, "removing ", name);
    const list = this.getList();
}

function getList() {
    const list = JSON.parse(localStorage.getItem("data"));
    return list ? list : [];
}

function saveList(list) {
    localStorage.setItem("data", JSON.stringify(list));
}

function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

// let will not be accessable by 'this == window'
// but var or any function ...() can be used by 'this == window'
let delayedPrint = debounce(printList.bind(this), 1000);

function printList() {
    console.log("print list")
    const list = getList();

    const listElem = document.querySelector(".listGrid");
    listElem.innerHTML = "";
    for (let i of list) {
        listElem.append(getDivWithText(i.name));
        listElem.append(getDivWithText(i.age));

        let removeButton = document.createElement("input");
        removeButton.value = "remove";
        removeButton.type = "button";
        listElem.append(removeButton);
        // removeButton.onclick = removeItemByName.bind(removeButton, i.name); // also works
        removeButton.onclick = () => {
            console.log("removing", i.name);
            removeButton.disabled = true;
            const currList = getList();
            currList.forEach((item, index) => {
                if (item.name === i.name) {
                    currList.splice(index, 1);
                    saveList(currList);
                    delayedPrint();
                }
            })
        };
    }
    
    function getDivWithText(text) {
        let elem = document.createElement("div");
        elem.innerHTML = text;
        return elem;
    }
}

printList();