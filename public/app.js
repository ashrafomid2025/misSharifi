const horizontalNav = document.getElementById("hnav");
const verticalNav = document.getElementById("vnav");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
// bars.addEventListener("click",()=>{
//     horizontalNav.classList.add("w-[75%]");
//     horizontalNav.classList.remove("w-full");
//     verticalNav.classList.remove("hidden");
//     bars.style.display = "none";
//     close.style.display = "block";
// });
// close.addEventListener("click",()=>{
//     horizontalNav.classList.add("w-full");
//     horizontalNav.classList.remove("w-[75%]");
//     verticalNav.classList.add("hidden");
//     bars.style.display = "block";
//     close.style.display = "none";

// });
//
const header = document.getElementById("header");
const body = document.getElementById("body");
const bar = document.getElementById("bar");
bar.addEventListener("click",()=>{
    if(header.classList.contains("w-full")){
        body.classList.remove("hidden");
        header.classList.add("w-[85%]");
        header.classList.remove("w-full");
    }
    else{
        header.classList.add("w-full");
        header.classList.remove("w-[85%]");
        body.classList.add("hidden");
        body.classList.add("w-[15%]");
    }
});
