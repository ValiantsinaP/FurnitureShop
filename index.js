const pictures = document.querySelectorAll('.pic');
pictures.forEach(item =>{
    item.addEventListener('mouseover', function(){
        removeFocus();
        item.classList.add('selected');
    })
    removeFocus = () => {
        pictures.forEach(item =>{
            item.classList.remove('selected')
        })
    }
})