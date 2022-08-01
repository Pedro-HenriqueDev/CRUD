function createElement(obj, id) {
    if(obj != null) {
        const list = document.querySelector('.lista')

        const div = document.createElement('div')
        const hq = document.createElement('h2')
        const p = document.createElement('p')
        const dat = document.createElement('h4')
        const btnRemove = document.createElement('button')
        const div2 = document.createElement('div')
        const div3 = document.createElement("div")
        const btnEditar = document.createElement('button')
        const icon = document.createElement("img")
    
        list.appendChild(div)
        div2.appendChild(hq)
        div2.appendChild(dat)

        div2.classList.add('note_title')
        hq.classList.add('title')
        dat.classList.add('date')
        div.classList.add('div_create')
        p.classList.add('conteudo')
        div3.classList.add("div3")
        btnRemove.classList.add('btn_create')
        btnEditar.classList.add('btn_editar')
        icon.classList.add("icon_editar")

        icon.src = "./assets/img/lapis.png"

        div.appendChild(div2)
        div.appendChild(p)
        div.appendChild(div3)
        div3.appendChild(btnEditar)
        btnEditar.appendChild(icon)
        div3.appendChild(btnRemove)
        list.insertBefore(div, list.firstChild)
        
        const title = document.querySelector('.title')
        const descricao = document.querySelector('.conteudo')
        const div_create = document.querySelector('.div_create')
        const button_editar = document.querySelector(".btn_editar")

        button_editar.addEventListener('click', () => {
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