// we want to bring the body element inside the js .
// as body element is a tag with no id or class so we use the qury selector method to return element 

const bodyEL = document.querySelector("body")
// now we add an add event listener method to the body section and attach an event handdler to detect the mouse moving inside the browser 
bodyEL.addEventListener("mousemove", (event)=>{
 const xPos = event.offsetX
 const yPos = event.offsetY
  // we create a new span in js using credit element method . 
  // as each time mouse moves create a new span
  const spanEL = document.createElement("span");
  spanEL.style.left=xPos +"px";
  spanEL.style.top= yPos + "px";
    // now we want to change the size 
const size = Math.random() * 100;
  spanEL.style.width = size + "px";
  spanEL.style.height = size + "px";
  bodyEL.appendChild(spanEL);
  // now we want to creat a timer to remove the flowers after 3 sec
  setTimeout(()=>{
    spanEL.remove();
  },3800);
})