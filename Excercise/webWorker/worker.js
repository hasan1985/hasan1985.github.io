postMessage("hi from worker"); // sending message to any consumer of self

self.onmessage = function(event) {
    console.log("in worker:", event.data);

    // cannot access localstorage or session storage
    // but can acces indexDB
    // console.log(localStorage.getItem("data"));
}

const message = {
    name: "hi",
    location: "worker.js",
    // Structured_clone_algorithm cannot convert function to message
    // fun: function() {
    //     console.log
    // }.toString() // converting to string will work but ll not able to unconvert
}
postMessage(message);

