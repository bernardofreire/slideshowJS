

const images = [
    {'id': '1', 'url': './img/bf.jpg'},
    {'id': '2', 'url': './img/food.jpg'},
    {'id': '3', 'url': './img/ps4.jpg'},
    {'id': '4', 'url': './img/rua.jpg'},
    {'id': '5', 'url': './img/sdf.jpg'},
]

const containerItems = document.querySelector('#container-itens')



const loadImages = (images,container) =>{
    images.forEach (image =>{
        container.innerHTML +=  `
            <div class='item'>
                <img src='${image.url}'
            </div>    
            `

    })
}

loadImages(images , containerItems)


let itens = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
    
}

const next = () =>{
    const lastItem = itens[itens.length - 1]
    containerItems.insertBefore(lastItem, itens[0])
    itens = document.querySelectorAll('.item')   
}

setInterval(previous , 4000)

    

document.querySelector('#next').addEventListener('click', next)

document.querySelector('#previous').addEventListener('click', previous)


