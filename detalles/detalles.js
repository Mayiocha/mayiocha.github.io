window.onload = () =>{
    let imgGaleria = document.querySelector("#main-product-img")
    let imgs= document.querySelectorAll(".thumb")
    for(let i=0;i<imgs.length;i++){
        imgs[i].addEventListener('click', (evt)=>{
            console.log(evt.target)
            imgGaleria.src=evt.target.src.replace("thumbs/","")
            imgs.forEach(item=>{
                item.classList.remove('active')
            })
            evt.target.classList.add('active')
        })
    }
    let btn = document.querySelector("size-btn")
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',(evt)=>{
            console.log(evt.target)
            btn.forEach(item=>{
                item.classList.remove("active")

            })
            evt.target.classList.add('active')
        })
    }
}