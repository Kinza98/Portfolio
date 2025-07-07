function menuToggle(){
  let menuIcon = document.getElementById("responsive-bars");
  let menu = document.getElementById("nav-menu");
  if(menuIcon.classList.contains("fa-bars")){
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    menu.style.display="flex";
  }else{
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
    menu.style.display="none";
  }
}

window.addEventListener("scroll", function(){
  if(this.scrollY>0){
    document.getElementById("header").classList.add("fixed-header")
  }else{
    document.getElementById("header").classList.remove("fixed-header")
  }
})

// code typing
 const lines = [
    "const developer = {",
    "  name: 'Kinza Ijaz',",
    "  skills: ['HTML', 'JavaScript', 'CSS'],",
    "  experience: 'Fiverr Freelancer',",
    "  passion: 'Creating Amazing UIs',",
    "  status: 'Available'",
    "};"
  ];

  const codeElement = document.getElementById("typed-code");
  const lineNumbers = document.getElementById("line-numbers");
  const cursor = document.querySelector(".cursor");

  let lineIndex = 0;
  let charIndex = 0;
  let lineIndexCheck = -1;

  function typeNextLine(){
    const currentLine = lines[lineIndex];
    if (charIndex === 0) {
      if (lineIndex <= lines.length - 1)
      lineNumbers.textContent += `${lineIndex + 1}\n`;
    }
    if(lineIndex < lines.length){
      if(charIndex < currentLine.length){
        codeElement.textContent += currentLine.charAt(charIndex);
        charIndex++;
        moveCursor();
        setTimeout(typeNextLine, 50)
      }else {
        console.log(lineIndex, lines.length)
        // lineNumbers.textContent += lineIndex+2 + "\n";
        if (lineIndex < lines.length - 1) {
          codeElement.textContent += "\n";
        }
        charIndex = 0
        lineIndex++;
        moveCursor();
        setTimeout(typeNextLine, 30);
      }
    }else{
      setTimeout(() => {
        codeElement.textContent = "";
        lineNumbers.textContent = "";
        lineIndex= 0;
        charIndex =0
        typeNextLine()
      }, 5000);
    }
  }

  function moveCursor(){
    let { offsetWidth, offsetTop } = codeElement;
    cursor.style.left = `${offsetWidth + 10}px`; 
    cursor.style.top = `${offsetTop - 20}px`; 
  }


  window.addEventListener("load", typeNextLine);

