const palallax_el=document.querySelectorAll("parallax");
let xValue=0,
    yValue=0;
window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX-window.innerWidth/2;
    yValue=e.clientY-window.innerHeight/2;

    //console.log(xValue,yValue);

    palallax_el.forEach((el) => {
        //el.style.transform="translate(-50%,-50%)"
    });
})
