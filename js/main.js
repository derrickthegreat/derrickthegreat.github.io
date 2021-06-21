let icons = document.getElementsByTagName('i')

function tray(e) {
    let target = e.target || e.srcElement
    let aside = target.parentElement.parentElement.lastElementChild
    if(aside.style.display === 'none') {
        aside.style.display = 'block'
        target.parentElement.className = 'tray-close'
    } else {
        aside.style.display = 'none'
        target.parentElement.className = 'tray'
    }
}

for (i of icons) {
    i.addEventListener('click', tray, false)
}