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