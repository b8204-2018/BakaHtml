let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../Ksusha1.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 1){btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    let htmlString = "";

        let  i=0;
        htmlString += data[i].name;

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}