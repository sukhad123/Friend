 document.addEventListener("DOMContentLoaded",()=>
 {
    const imageElement = document.getElementById("image");
    document.querySelector("#yes").onclick= ()=>
    {
    imageElement.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/09/18/I-LOVE-YOU-VECTOR-DESIGN-Graphics-38781369-1.jpg'

    document.querySelector('h1').innerHTML = 'I know You love me!';
    document.querySelector('#button').innerHTML  = '';
      
    }
 })

 document.addEventListener("DOMContentLoaded",()=>
    {
       const imageElement = document.getElementById("image");
       document.querySelector("#no").onclick= ()=>
       {
       imageElement.src = 'http://i.123g.us/c/efeb_valen_bemyvalen/pc/107090_pc.jpg'
   
       document.querySelector('h1').innerHTML = 'Please be my valentine';
       document.querySelector('#button').innerHTML  = '';
         
       }
    })

 document.addEventListener("DOMContentLoaded",()=>{
    let x = 0;
    document.querySelector("#no").onclick = ()=>{
        const randomLeft = Math.floor(Math.random() * (window.innerWidth-50));
        const randomTop = Math.floor(Math.random() * (window.innerHeight-50));
        document.querySelector("#no").style.position = "absolute";
        document.querySelector("#no").style.left = `${randomLeft}px`;
        document.querySelector("#no").style.top = `${randomTop}px`;
        x++;
        if(x >= 5)
        {
            document.querySelector('h1').innerHTML = 'You have to go with me; You cannot say no';
        }
    }
   

 })

 
 
 
