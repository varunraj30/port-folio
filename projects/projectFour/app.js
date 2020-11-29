var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")
var button = document.querySelector("#btnbutton")

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"



function getTranslated(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error is", error);
    alert("Try Again after 1 Hour")
}

function EventHandler() {
    var inputTxt = txtInput.value;
    fetch(getTranslated(inputTxt))
        .then(response => response.json())
        .then(json => {
            var txt = json.contents.translated;
            output.innerText = txt
        })
        .catch(errorHandler)
}

button.addEventListener("click", EventHandler)