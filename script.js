function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag da imagem
     const img = document.querySelector("#profile img")

     //substituir a imagem
    if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    img.setAttribute('src', './assets/avatar.png')
   }
    if(html.classList.contains('light')) {
    img.setAttribute('alt', 'imagem de mayk brito sorrindo, usando jaqueta de couro e oculos escuros, fundo azul e roxo')
   } else {
    img.setAttribute('alt', "imagem mayk brito sorrindo, usando barba, oculos e camisa preta, fundo amarelo")
   }

}