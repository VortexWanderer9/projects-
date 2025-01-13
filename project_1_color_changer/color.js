const buttons = document.querySelectorAll(".buttons")
const body = document.querySelector('body')

buttons.forEach((buttons) => {
buttons.addEventListener('click', (e) =>{
    if (e.target.id === 'Red') {
        body.style.backgroundColor = 'Red'
    } else if (e.target.id === 'Blue') {
        body.style.backgroundColor = 'Blue'
    } else if (e.target.id === 'Black') {
        body.style.backgroundColor = 'Black'
    }else if (e.target.id === 'White') {
        body.style.backgroundColor = 'White'
    }
    
})

})
