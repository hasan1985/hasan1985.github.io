import * as data from "./data.js"

const form = document.getElementById("question");
let currQues;
setNextQuestion(0);

function setNextQuestion(questionIdx) {
    currQues = data.questions[questionIdx];
    let questionFragment = getDocFregment(currQues);
    form.replaceChild(questionFragment, form.childNodes[0]);
}

form.onsubmit = function() {
    let selectedOptionIdx = this.selectedOption.value;
    let selectedOption = currQues.options[selectedOptionIdx];
    console.log("answer to the question - '" + currQues.statement + "' is given '" + selectedOption.answer + "'");

    let nextIdx = selectedOption.nextQuesIdx;
    if (nextIdx >= 0) {
        setNextQuestion(nextIdx)
    } else {
        form.innerHTML = "you are done";
    }    
    return false;
}

function getDocFregment(question) {
    const fregment = new DocumentFragment();
    const container = document.createElement("div");
    fregment.append(container);

    const ques = document.createElement("div");
    ques.innerHTML = question.statement;
    container.append(ques);
    
    for (let i in question.options) {
        const opt = question.options[i];
        const radioBt = document.createElement("input");
        radioBt.setAttribute("type", "radio");
        radioBt.setAttribute("name", "selectedOption"); // form obj will have a "name" field with value = "value"
        radioBt.setAttribute("value", i);
        radioBt.setAttribute("id", i);  // lavel has "for" attr with this id
        container.append(radioBt);
        const label = document.createElement("label");
        label.setAttribute("for", i);
        label.append(document.createTextNode(opt.answer))
        container.append(label);
        container.append(document.createElement("br"));
    }
    return fregment; 
}