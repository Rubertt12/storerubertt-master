// Função de pesquisa
function searchImage() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase()

  const imageMap = {
    /* NEO GEO */
    "fatal fury": {
      image: "./assets/fatal fury.png",
      link: "https://exemplo.com/link1",
    },
    "dodge ball": {
      image: "./assets/dodge ball.png",
      link: "https://exemplo.com/link2",
    },
    "samurai shodown": {
      image: "./assets/samurai shodown.png",
      link: "https://exemplo.com/link3",
    },

    /* PS1 */
    "Crash Bandicoot": {
      image: "./assets/crash.jpeg",
      link: "https://drive.google.com/file/d/1S2I9WwjCCU1xvYdm8phrzxsncPgVM6Kv/view?usp=sharing",
    },
    "Resident evil 3": {
      image: "./assets/resident evil 3.jfif",
      link: "https://drive.google.com/file/d/1Vf4FplcbETU0HUb7Sl1GfSi5PIh1Cxr7/view?usp=sharing",
    },
    "Silent hill": {
      image: "./assets/Silent hill.jpg",
      link: "https://drive.google.com/file/d/1gzsGrGl8lyqreJAKqDjrk1QgaFXBC0JS/view?usp=sharing",
    },
    Yugioh: {
      image: "./assets/yugioh.jpg",
      link: "https://drive.google.com/file/d/1GDcZP3xFwr9ElzHGs2tVx1EwwG5GQySJ/view?usp=sharing",
    },

    /* PS2 */
    "need for speed 2": {
      image: "./assets/need for speed 2.png",
      link: "https://exemplo.com/link5",
    },

    "Mortal Kombat armagedon": {
      image: "./assets/mortal kombat armagedon.jpg",
      link: "https://exemplo.com/link5",
    },

    "Resident Evil 4": {
      image: "./assets/resident-evil-4.jfif",
      link: "https://exemplo.com/link5",
    },

    "Downhill Domination": {
      image: "./assets/downhill.jpg",
      link: "https://exemplo.com/link5",
    },
  }

  if (!searchTerm) {
    showCustomAlert("Você deve escrever o nome do seu jogo." , "./assets/robo triste.jpeg")
    return
  }

  let found = false

  for (const key in imageMap) {
    if (key.toLowerCase().includes(searchTerm)) {
      const modal = document.getElementById("imageModal")
      const modalImage = document.getElementById("modalImage")
      const modalLink = document.getElementById("modalLink")

      const imageSize = "80%" // Responsividade da imagem

      modalImage.src = imageMap[key].image
      modalImage.style.width = imageSize
      modalImage.style.height = "auto"
      modalImage.onerror = function () {
        modalImage.src = "./assets/robo triste.jpeg" // Imagem de fallback caso o arquivo não exista
        modalImage.style.width = "200px" // Tamanho fixo para a imagem de fallback
        modalImage.style.height = "auto"
      }
      modalLink.href = imageMap[key].link

      modalLink.setAttribute("target", "_blank")

      modal.style.display = "block"
      found = true
      break
    }
  }

  if (!found) {
    showCustomAlert("Jogo não encontrado", "./assets/robo triste.jpeg")
  }
}

// Fechar modal de imagem
function closeModal() {
  const modal = document.getElementById("imageModal")
  modal.style.display = "none"
}

// Adiciona evento de clique para fechar modal ao clicar fora da imagem

document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal()
  }
})

// Evento de rolagem para adicionar classe "scrolled"
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("ul")
  navbar.classList.toggle("scrolled", window.scrollY > 1)
})

// Evento de pressionamento de tecla para fechar o modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.key === " ") {
    closeModal()
  }
})

// Função para alternar o menu
function toggleMenu() {
  const navList = document.querySelector("ul")
  const menuIcon = document.querySelector(".menu-icon")

  navList.classList.toggle("active")
  menuIcon.classList.toggle("change")
}

// Função para mostrar informações sobre os consoles
function showInfo(iconName) {
  const infoDiv = document.getElementById("icon-info")
  let iconInfo = ""

  switch (iconName) {
    case "Neo Geo":
      iconInfo = "Console de videogame produzido pela SNK em 1990."
      break
    case "PlayStation":
      iconInfo = "Console de videogame lançado pela Sony em 1994."
      break
    case "PlayStation 2":
      iconInfo = "Console de videogame da Sony lançado em 2000."
      break
  }

  infoDiv.innerHTML = iconInfo
}

// Função para exibir o alerta personalizado
function showCustomAlert(message, image = "/assets/robo triste.jpeg") {
  const customAlert = document.getElementById("customAlert")
  const alertMessage = document.getElementById("alertMessage")
  const alertImage = document.getElementById("alertImage")

  alertMessage.innerHTML = message
  alertImage.src = image
  alertImage.style.width = "150px" // Definir um tamanho fixo para a imagem no alerta

  customAlert.style.display = "block"
}

// Fechar alerta personalizado
function closeCustomAlert() {
  const customAlert = document.getElementById("customAlert")
  customAlert.style.display = "none"
}
