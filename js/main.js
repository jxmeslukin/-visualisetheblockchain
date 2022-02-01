var messageArray = ["visualise the blockchain."]
var textPos = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPos) + "<span>\u25ae</span>";

    if(textPos++ != messageArray[0].length){
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter);