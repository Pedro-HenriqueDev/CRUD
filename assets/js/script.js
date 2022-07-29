const btnAdd = document.querySelector('#btn_add')
const title = document.querySelector('#title')
const conteudo = document.querySelector('#conteudo')
const list = document.querySelector('.lista')
const date = document.querySelector('#date')

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

function createElement(obj, id) {
    if(obj != null) {

        let div = document.createElement('div')
        let hq = document.createElement('h2')
        let p = document.createElement('p')
        let dat = document.createElement('h4')
        let btnRemove = document.createElement('button')
        let div2 = document.createElement('div')
    
        list.appendChild(div)
        div2.appendChild(hq)
        div2.appendChild(dat)
        div2.classList.add('note_title')
        hq.classList.add('title')
        dat.classList.add('date')
        div.classList.add('div_create')
        p.classList.add('conteudo')
        btnRemove.classList.add('btn_remove')
        div.appendChild(div2)
        div.appendChild(p)
        div.appendChild(btnRemove)
        list.insertBefore(div, list.firstChild)
        
        let title = document.querySelector('.title')
        let descricao = document.querySelector('.conteudo')
        let div_create = document.querySelector('.div_create')
        div_create.addEventListener('dblclick', () => {
            update(id, obj)
        })  
        btnRemove.addEventListener('click', () => {           
            erase(id, div)
        })
        
        btnRemove.innerHTML = 'Remover'
        dat.innerHTML = obj.data
        p.innerHTML = obj.conteudo
        hq.innerHTML = obj.titulo
    }

}
function dateFormated() {
    let dateObject = new Date()
    let dateString = dateObject.toString()
    let date = dateString.slice(8,10)
    let month = dateString.slice(4,7)
    let year = dateString.slice(11,15)
    let dateMod = `${date}-${month}-${year}`
    return dateMod
}
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
class Notas {
    constructor(titulo, conteudo, date) {
        this.title = titulo
        this.conteudo = conteudo
        this.date = date
    }
    getdados() {
        return {
            titulo:this.title,
            conteudo:this.conteudo,
            data:this.date
        }
        
    }
}
class Gravar {
    constructor() {
        let id = localStorage.getItem('id')
        let vazio = localStorage.getItem(1)

        if(id === null || vazio == null) {
            localStorage.setItem('id', 0)
        } 
    }
    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}
