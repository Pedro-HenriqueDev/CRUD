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
