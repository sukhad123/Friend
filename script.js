 document.addEventListener("DOMContentLoaded",()=>
 {
    const imageElement = document.getElementById("image");
    document.querySelector("#yes").onclick= ()=>
    {
    imageElement.src = 'https://d.newsweek.com/en/full/2090958/two-identical-cats-cuddling-bed.webp?w=790&f=316546b96ea8b3cb3f7968d8ab161015'

    document.querySelector('h1').innerHTML = 'I know You love me!';
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
            document.querySelector('h1').innerHTML = 'There is not any (NO) option, try selecting!';
        }
    }
   

 })

 
 
 
