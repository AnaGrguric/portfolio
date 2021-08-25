let mouseCursor = document.querySelector(".cursor");
let elements = document.querySelectorAll(".el");
let navEl = document.querySelectorAll(".el-nav");

window.addEventListener("mousemove", cursor)
  
function cursor(e){
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}


elements.forEach(element => {
  element.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-scale");
    
  })
  element.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-scale");
    
  })
})

navEl.forEach(element => {
  element.addEventListener("mouseover", ()=> {
    mouseCursor.classList.add("cursor-nav");
  });
  element.addEventListener("mouseleave", ()=> {
    mouseCursor.classList.remove("cursor-nav");
  });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 


