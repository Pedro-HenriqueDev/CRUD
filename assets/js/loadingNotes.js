function loadingNotes() {
    btnAdd.addEventListener('click', registerNote)
    if(localStorage.getItem(1) == null) {
        list.innerHTML = 'Suas notas apareceram aqui!'
    }
    let lenghNotes = localStorage.getItem('id')
    for(let i = 1;i <= lenghNotes; i++) {
        let item = JSON.parse(localStorage.getItem(i))
        createElement(item, i)
    }
}
loadingNotes()

