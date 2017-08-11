//document.getElementById("button").addEventListener("click", myFunction);

function thing(id) { id.innerHTML = "Meow" }

const image = new Image()
$.getJSON("https://random.cat/meow", function(data) {
  image.src = data.file
  document.body.appendChild(image)
})
