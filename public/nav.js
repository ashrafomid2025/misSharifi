const Vnav = document.getElementById("vNav");
const Hnav = document.getElementById("hNav");
const bars = document.getElementById("bars");
bars.addEventListener("click",()=>{
    if(Hnav.classList.contains("w-full")){
        Hnav.classList.remove("w-full");
        Hnav.classList.add("w-[80%]");
        Vnav.classList.remove("hidden");
        Vnav.classList.add("flex");
    }
    else{
        Hnav.classList.remove("w-[80%]");
        Hnav.classList.add("w-full");
        Vnav.classList.remove("flex");
        Vnav.classList.add("hidden");
    }
})