const inputsText = document.querySelectorAll('.input-text')

inputsText.forEach(input => {
  input.addEventListener('change', () => {

    if (input.value !== "") {
      input.classList.add('campo-preenchido')
    } else {
      input.classList.remove('campo-preenchido')
    }
  })
})


