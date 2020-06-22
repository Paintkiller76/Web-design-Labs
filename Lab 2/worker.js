onmessage = function(e){
    let data = `Ім'я: ${e.data[0].name ? e.data[0].name : ""}
    <br>Знайомий(а) з: ${e.data[0].os[0] ? e.data[0].os[0]: ""}${e.data[0].os[1] ? ", " + e.data[0].os[1]: ""}${e.data[0].os[2] ? ", " + e.data[0].os[2]: ""}
    <br>Основна OS: ${e.data[0].mainOs ? e.data[0].mainOs : ""}
    <br>Бажання перейти на іншу OS: ${e.data[0].wishOs ? e.data[0].wishOs : ""}
    <br>Комментар: ${e.data[0].comment ? e.data[0].comment : ""}`
    postMessage(data)
}