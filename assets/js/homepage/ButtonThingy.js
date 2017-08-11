//document.getElementById("button").addEventListener("click", myFunction);

function thing(id) { id.innerHTML = "Meow" }

const image = new Image(200, 200)
$.getJSON("http://random.cat/meow", function(data) {
  image.src = data.file
  document.body.appendChild(image)
})
