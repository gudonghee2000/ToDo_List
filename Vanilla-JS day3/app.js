    function mouse_enter() {
        title.style.color = "blue";
        title.innerText = "The mouse is here!";
    }

    const title = document.querySelector("h1");
  
    title.addEventListener("mouseenter", mouse_enter);
  