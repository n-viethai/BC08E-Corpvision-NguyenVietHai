// open nav search

var openNavSearch = document.getElementById("open-nav-search");
openNavSearch.onclick = function () {
  var element = document.getElementById("nav-form");
  element.classList.add("nav__search-form--active");

  // thêm class để tạo animation cho biểu tượng search

  openNavSearch.classList.add("nav__search-btn-active");

  // focus form iput

  document.getElementById("nav-form-input").focus();
};

// close nav search

var closeNavSearch = document.getElementById("close-nav-search");
closeNavSearch.onclick = function () {
  var element = document.getElementById("nav-form");
  element.classList.remove("nav__search-form--active");

  openNavSearch.classList.remove("nav__search-btn-active");
};

// change color header

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navLinkColor = document.getElementsByClassName("nav__item-link");
  var i;

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    // var  navLinkColor = document.getElementsByClassName("nav__item-link");
    // var i;

    document.getElementById("header").style.backgroundColor = "#fff";
    document.getElementById("header").classList.remove("bg-transparent");

    document.getElementById("nav__bar").style.height = "8rem";
    document.getElementById("nav__brand-title").style.color = "#3F3A64";
    document.getElementById("nav__brand-sub-title").style.color = "#3F3A64";

    document.getElementById("btnDarkMode").style.color = "#3F3A64";

    // change color nav-link

    for (i = 0; i < navLinkColor.length; i++) {
      navLinkColor[i].style.color = "#797593";
    }

  } else {
    // document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").classList.add("bg-transparent");

    document.getElementById("nav__bar").style.height = "10rem";
    document.getElementById("nav__brand-title").style.color = "#fff";
    document.getElementById("nav__brand-sub-title").style.color = "#fff";

    document.getElementById("btnDarkMode").style.color = "#fff";

    for (i = 0; i < navLinkColor.length; i++) {
      navLinkColor[i].style.color = "rgba(255, 255, 255, 0.6)";
    }
  }
}

// dark mode button

var btnDarkMode = document.getElementById("btnDarkMode");

var iconLight = document.getElementById("iconLight");
var iconDark = document.getElementById("iconDark");
    iconDark.style.display = 'none';

btnDarkMode.onclick = function () {
    document.getElementById("svgWaveAnimation").classList.toggle("svg__color--dark");
    document.getElementById("carousel").classList.toggle("dark-mode");
    document.getElementById("about").classList.toggle("bg-dark-1");
    document.getElementById("service").classList.toggle("bg-dark-1");
    document.getElementById("skill").classList.toggle("bg-dark-1");
    document.getElementById("news").classList.toggle("bg-dark-1");
    document.getElementById("agency").classList.toggle("bg-dark-2");
    document.getElementById("project").classList.toggle("bg-dark-2");
    document.getElementById("feedback").classList.toggle("bg-dark-2");

    document.getElementById("header").classList.toggle('bg-dark-1');

    // change icon

    if (iconLight.style.display === "none") {
      iconLight.style.display = "block";
    } else {
      iconLight.style.display = "none";
    }

    if (iconDark.style.display === "block") {
      iconDark.style.display = "none";
    } else {
      iconDark.style.display = "block";
    }

};
