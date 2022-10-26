function functionWithScroll(){
    if(window.innerWidth > 767){
    window.addEventListener('scroll', window_onscroll);
    window.addEventListener('scroll', changeMenu);
    }
}

function functionWithLoad(){
    if(window.innerWidth > 767){
        changeMenu();
    }
    showDate();
}

var pokaz_przycisk_przy   = 600;
var przewiniete_okno_stan = 0;

function hideOrShowButtonScroll(scrollUP = document.getElementById("scrollUP")) {
    if (pozycja_skrolla<pokaz_przycisk_przy) {
        scrollUP.style.visibility="hidden";
        scrollUP.style.transitionDuration="0s";
        scrollUP.classList.remove("scrollUP2"); 
        console.log(przewiniete_okno_stan);
    } else {
        scrollUP.style.transitionDuration="1s";
        scrollUP.style.visibility="visible";
        scrollUP.classList.add("scrollUP2"); 
        console.log(przewiniete_okno_stan);
        }
}

function window_onscroll() {
    pozycja_skrolla=window.scrollY;
    if (przewiniete_okno_stan==0) {
        if (pozycja_skrolla>=pokaz_przycisk_przy) {
            przewiniete_okno_stan=1;
            hideOrShowButtonScroll(); 
        }
    } else {
        if (pozycja_skrolla<pokaz_przycisk_przy) {
            przewiniete_okno_stan=0; 
            hideOrShowButtonScroll();
        }
    }
}

function buttonScrollToUP(){
    window.scrollTo(0, 0);
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}

function changeMenu(){
    var cos = document.getElementById("navigation");
    var logo = document.getElementById("logo");
    var newMenuItem = document.getElementsByClassName("menu-item");
    var bg=document.getElementById("bg-overaly");
    if( window.innerWidth > 767 && window.scrollY > 50){
        cos.classList.add("changed-nav");
        logo.classList.add("changed-logo");
        newMenuItem[0].classList.add("menu-item-changed");
    }
    else{
        cos.classList.remove("changed-nav");
        logo.classList.remove("changed-logo");
        newMenuItem[0].classList.remove("menu-item-changed");
    }

    if( window.scrollY > 1300){
        bg.classList.remove("background-overaly");
        bg.style.transitionDuration="1s";
        bg.style.transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }else{
        bg.classList.add("background-overaly");
    }
}

function showDate(){
    const date = new Date();
    const divDate = document.getElementById("date");
    const spanDate = document.getElementById("date2");

    var dayOfMonth = date.getDate();
    if(dayOfMonth < 10){
        dayOfMonth= "0"+dayOfMonth;
    }
    var month = date.getMonth()+1;
    if(month < 10){
        month= "0"+month;
    }
    var year = date.getFullYear();

    var dayOfWeek = date.getDay();
    if(dayOfWeek == 0) dayOfWeek="Niedziela";
    if(dayOfWeek == 1) dayOfWeek="Poniedziałek";
    if(dayOfWeek == 2) dayOfWeek="Wtorek";
    if(dayOfWeek == 3) dayOfWeek="Środa";
    if(dayOfWeek == 4) dayOfWeek="Czwartek";
    if(dayOfWeek == 5) dayOfWeek="Piątek";
    if(dayOfWeek == 6) dayOfWeek="Sobota";


    const editDate = dayOfMonth+"."+month+"."+year;

    divDate.innerHTML = editDate;
    spanDate.innerHTML = dayOfWeek;
}

    

