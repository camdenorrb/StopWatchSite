//document.getElementById("button").addEventListener("click", myFunction);

function thing(id) { id.innerHTML = "Meow" }

const image = new Image(200, 200)
$.getJSON("https://random.cat/meow", function(data) {
  image.id = "Meowth"
  image.src = data.file.replace("http", "https")
  document.body.appendChild(image)
})
