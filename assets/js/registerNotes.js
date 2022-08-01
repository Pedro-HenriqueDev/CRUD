function registerNote() {
    if(title.value == '' || conteudo.value == '') {
        alert('Campo Inválido!!!')
    } else {
    let notas = new Notas(title.value, conteudo.value, dateFormated())
    let obj = notas.getdados()
    let gravarDados = new Gravar()
    gravarDados.gravar(obj)

    window.location.reload()
    }
}