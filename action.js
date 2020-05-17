function changeLang(lan){
    
    if(lan==false){
        document.querySelector(".en").style.display='block'
        document.querySelector(".ru").style.display='none'
    }
    else {
        document.querySelector(".en").style.display='none'
        document.querySelector(".ru").style.display='block'

    }
    lang=!lang;
}
var lang=false;
changeLang(lang);
document.getElementById("lang").addEventListener("click",()=> changeLang(lang));