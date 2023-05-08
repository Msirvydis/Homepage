function changeTab(target, name){
    var tabs = document.getElementsByClassName("tab");
    var tab = document.getElementById(name);
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < tabs.length; i++) {
      // Removes all tab style
      tabs[i].style.display = "none";
  
      // Display tab
      tab.style.display = "block";
  
      buttons[i].classList.remove("active");
    }
  };
  
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 800px
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
    // when window width is >= 100px
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
    }
  });
  
  // Side menu
  var burger = document.getElementById("burger");
  var sideMenu = document.getElementById("side-menu")
  
  burger.addEventListener("click", function(){
  burger.classList.toggle("rotate");
  sideMenu.classList.toggle("translate");
  });
  
  
  var links = document.getElementsByTagName("a");
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
    if(this.classList.contains("active")){}
    else{
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      this.classList.add("active");
    }
  style.display = "block";
    });
  }
  
  
  var foo = []
  foo.push(1);
  foo.push(2);
  
  console.log(foo.length);
  