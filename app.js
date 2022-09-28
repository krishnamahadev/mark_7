

var btnTranslate = document.querySelector("#btn-translate");


var txtInput = document.querySelector("#txt-input")
var outputresult = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/vulcan.json"

function gettranslateURL(text)
{
    // return serverURL + "?text="+text;
    return serverURL+"?"+"text="+text;
}


function errorHandler(error)
{
    console.log("error occured",error);
    alert("something wrong! try again");
}



function clickEventHandler()
{
    // outputresult.innerText="translation in progress "+ txtInput.value;

    var inputText = txtInput.value

    fetch(gettranslateURL(inputText))
    .then(response => response.json())
    .then(json =>
        {
            var translatedtext = json.contents.translated;
            outputresult.innerText = translatedtext;
        
        }
         )   
         
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);









