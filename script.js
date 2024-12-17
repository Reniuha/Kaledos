const next = document.getElementById('next-btn');
const back = document.getElementById('back-btn');
const cover = document.getElementById('cover');
const container = document.getElementById('container');
const rickRoll = document.getElementById("RickRoll");

let isRickRollActive = false;

next.addEventListener("click", () => {
    const currentZIndex = window.getComputedStyle(cover).zIndex;
    
    if(window.getComputedStyle(cover).backgroundImage === "url('doYou.jpg')") {
    } else if (currentZIndex === '2') {
        cover.style.zIndex = '-1'; 
    }

    if(decode.textContent === "S29kYXM6IEthbMSXZG9z") {
        window.location.href = "second.html"
    }
});

back.addEventListener("click", () => {
    const currentZIndex = window.getComputedStyle(cover).zIndex;
    
    if(currentZIndex === '-1') {
        cover.style.zIndex = '2';
        cover.style.backgroundImage = "url('pic.jpg')";
    } else {
        cover.style.backgroundImage = "url('doYou.jpg')";
    }
});

rickRoll.style.cursor = "pointer";

rickRoll.addEventListener("click", () => {
    if(isRickRollActive) {
        container.style.display = "block"; 
        document.body.style.backgroundImage = ""; 
        isRickRollActive = false; 
    } else {
        container.style.display = "none"; 
        document.body.style.backgroundImage = "url('200w.gif')"; 
        isRickRollActive = true; 

        setTimeout(() => {
            container.style.display = "block"; 
            document.body.style.backgroundImage = ""; 
            isRickRollActive = false;
            
            document.body.style.position = "initial"; 
        }, 5000);
    }
})

const decode = document.getElementById("decode");
const help = document.getElementById("help");

decode.addEventListener("click", () => {
    decode.textContent = "S29kYXM6IEthbMSXZG9z";
    help.textContent = "Need help?";
});

help.addEventListener("click", () => {
    help.textContent = "Naudok base64 decoder";
});