//document.getElementById("button").addEventListener("click", myFunction);

//const image = new Image(200, 200)

var interval

var seconds = 1

const element = document.getElementById("counter")


function tick() { element.innerHTML = seconds++ }


function start() {
  if (interval != null) return
  interval = setInterval(tick, 1000)
}

function stop() {
  if (interval == undefined) return
  clearInterval(interval)
  interval = undefined
}

function reset() {
  if (seconds == 1) return
  stop()
  seconds = 1
  element.innerHTML = 0
}

/*$.getJSON("https://random.cat/meow", function(data) {
  image.id = "Meowth"
  image.src = data.file.replace("http", "https")
  document.body.appendChild(image)
})*/
