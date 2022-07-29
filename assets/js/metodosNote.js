
function update(id, obj) {
    title.value = obj.titulo
    conteudo.value = obj.conteudo
    
    btnAdd.innerHTML = 'Atualizar Nota'
    
    btnAdd.removeEventListener('click', registerNote)
    btnAdd.addEventListener('click', () => {
        UpdateLocalStorage(id)
    })
}
function UpdateLocalStorage(ident) {
    let dadosAtualizados = {
        titulo: title.value,
        conteudo: conteudo.value,
        data: dateFormated()
    }
    localStorage.setItem(ident, JSON.stringify(dadosAtualizados))

    btnAdd.innerHTML = 'Adicionar Nota'
    btnAdd.removeEventListener('click', UpdateLocalStorage)
    btnAdd.addEventListener('click', registerNote)
    window.location.reload()
}
function erase(aqui, div_remove) {
    localStorage.removeItem(aqui)
    div_remove.style.animationName = 'remove'
    
    setInterval(() => {
        window.location.reload()
    }, 500)
}