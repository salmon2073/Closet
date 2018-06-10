var images = Array.from(document.getElementsByTagName('img'))
images.forEach(function(i){
    i.addEventListener('click', function(){
        var modalImg = document.getElementById('modal-image')
        modalImg.src = this.src
    })
})

var buttons = Array.from(document.getElementsByTagName('button'))
buttons.forEach(function(b){
    b.addEventListener('click', function(){
        this.classList.add('active')
        var key = this.attributes.val.value
        var items = Array.from(document.getElementsByClassName('item'))
        items.forEach(function(i){
            if(!i.querySelector(`.${key}`)){
                i.classList.add('out')
            }else{
                i.classList.remove('out')                
            }
        })

    })
})

document.querySelector('h1').addEventListener('click', function(){
    Array.from(document.querySelectorAll('.item')).forEach(function(i){
        i.classList.remove('out')
    })
    Array.from(document.getElementsByTagName('button')).forEach(function(b){
        b.classList.remove('active')
    })
})