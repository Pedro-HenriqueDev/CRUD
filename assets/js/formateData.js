function dateFormated() {
    let dateObject = new Date()
    let dateString = dateObject.toString()
    let date = dateString.slice(8,10)
    let month = dateString.slice(4,7)
    let year = dateString.slice(11,15)
    let dateMod = `${date}-${month}-${year}`
    return dateMod
}