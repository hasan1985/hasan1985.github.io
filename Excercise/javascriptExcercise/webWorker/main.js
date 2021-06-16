let myWorker;
const startButton = document.getElementById("startButton");
startButton.onclick = () => {
    console.log("starting worker");

    if (typeof Worker !== undefined) {
        if (myWorker == undefined) {
            myWorker = new Worker("worker.js");
        }

        myWorker.onmessage = (event) => {
            console.log("in main:", event.data);
        }

        myWorker.postMessage("hi from main");
        myWorker.postMessage(message);
    }
}

const message = {
    name: "hi",
    location: "main.js"
}
