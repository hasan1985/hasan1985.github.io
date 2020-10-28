function onSavePerson(form) {
    let data = localStorage.getItem("data");
    let list = []
    if (data == ) {
        list = [];
    } el

    let newPerson = {};
    newPerson.name = form.personName.value;
    newPerson.age = form.age.value;
    list.push(newPerson);
    localStorage.setItem("data", JSON.stringify(list));
}

function printList() {
    const list = JSON.parse(localStorage.getItem("data"));

    const listElem = document.querySelector(".listGrid");

    for (let i of list) {
        listElem.append(getDivWithText(i.name));
        listElem.append(getDivWithText(i.age));
    }
    
    function getDivWithText(text) {
        let elem = document.createElement("div");
        elem.innerHTML = text;
        return elem;
    }
}

printList();