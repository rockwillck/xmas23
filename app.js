var idIndex = 0
for(section of document.getElementsByTagName("section")) {
    document.getElementById("progress").innerHTML += "<div class='bar'></div>"
    section.id = idIndex;
    idIndex++
}

var id
var lastIndex = -1
setInterval(() => {
    // console.log(window.innerWidth)
    let progIndex = Math.abs(Math.floor(-document.getElementById("0").getBoundingClientRect().x/window.innerWidth))
    if (progIndex != lastIndex) {
        lastIndex = progIndex
        for (let i = 0; i < document.getElementsByClassName("bar").length; i++) {
            if (i < progIndex) {
                document.getElementsByClassName("bar")[i].style.background = "linear-gradient(to right, rgba(255, 255, 255, 0.4) 100%, rgba(255, 255, 255, 0.2) 0)"
            } else if (i == progIndex) {
                clearInterval(id)
                var percent = 0
                id = setInterval(() => {
                    document.getElementsByClassName("bar")[i].style.background = `linear-gradient(to right, rgba(255, 255, 255, 0.4) ${percent}%, rgba(255, 255, 255, 0.2) 0)`
                    percent += 0.67
                    if (percent > 100) {
                        document.getElementById(`${Math.min((progIndex + 1), document.getElementsByTagName("section").length - 1)}`).scrollIntoView()
                    }
                }, 10)
            } else {
                document.getElementsByClassName("bar")[i].style.background = ""
            }
        } 
    }
}, 10)