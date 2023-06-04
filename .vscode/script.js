function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }


  //pegar a tag img 
  const text = document.querySelector("#profile img")

  //substituir a frase
  if (html.classList.contains("light")) {
    // se tiver light mode, add texto sobre a img light
    text.setAttribute("alt", "SamuelKlein de camiseta branca, com oculos, as duas mãos levantadas e os olhos fechados")
  } else {
    // se tiver sem light mode, manter texto sobre a imagem normal
    text.setAttribute(
      "alt",
      "SamuelKlein de camisa preta, com a mão direita levantada e olho fechado."
    )
  }

}
