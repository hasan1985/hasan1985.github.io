document.addEventListener("DOMContentLoaded", () => {
    initDatePickers();
});

function initDatePickers() {
    const datePicker = document.querySelector("[role=my-date-picker]");
    const overlay = datePicker.querySelector(".my-date-picker-overlay");
    const input = datePicker.querySelector("input");

    function getDivWithInnerText(text) {
        const elem = document.createElement("div");
        elem.innerText = text;
        return elem;
    }

    input.addEventListener("focus", () => {
        let today = new Date();
        const yearElem = getDivWithInnerText(today.getFullYear());
        const monthElem = getDivWithInnerText(today.getMonth());
        const daysContainer = document.createElement("div");
        daysContainer.style.width = "200px";
        daysContainer.style.height = "200px";
        daysContainer.style.border = "1px solid black";

        overlay.append(yearElem);
        overlay.append(monthElem);
        overlay.append(daysContainer);

        let rec = daysContainer.getBoundingClientRect();
        overlay.style.top = rec.y;
        overlay.style.left = rec.x;

        overlay.remove();
        let x = getDivWithInnerText("added to body");
        let body = document.getElementsByTagName("body")[0];
        body.append(overlay);

        overlay.style.display = "block";
    });

    input.addEventListener("blur", () => {
        overlay.style.display = "none";
        overlay.innerHTML = "";
    });
}