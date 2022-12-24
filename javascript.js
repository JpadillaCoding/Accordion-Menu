const boxTitle = document.querySelectorAll('.title')
const boxContent = document.querySelectorAll('content')

boxTitle.forEach(boxTitle => {
    boxTitle.addEventListener('click',function(){
        boxTitle.classList.toggle('active')
    })
});