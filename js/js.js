function changeMenu() {
    var navs = document.querySelector("nav")
    if (!navs.classList.contains("hidden")){
        navs.classList.add("hidden");
    } else {
        navs.classList.remove("hidden");
    }

}

function unhideMenu() {
    console.log("working")
    var navs = document.querySelector("nav");
    if (navs.classList.contains("hidden") && window.innerWidth >= 800) {
        navs.classList.remove("hidden")
    }
}
