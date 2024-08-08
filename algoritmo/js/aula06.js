const formulario = document.querySelector('form')
const resposta = document.querySelector('h3')

formulario.addEventListener('submit', form)

function form () {
  const name = formulario.inNome.value
  resposta.innerHTML = `Olá ${name}`
}