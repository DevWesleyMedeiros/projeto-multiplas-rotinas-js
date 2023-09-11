const caixaCursos = document.querySelector("#caixaCursos");
const btnRemoverBotaoSelecionado = document.getElementById('removerCurso');
const btc_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursosSelecionado = document.getElementById("btnCursoSelecionado");
const btnAdicionarCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0
const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML = curso;
    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");
    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");
    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);
    return novoElemento
}
function criarCursoAntes(){
    if(nomeCurso.value !== ""){
        const cursoRadioSelecionado = adicionarRadioSelecionado()
        const cursoSelecionado = cursoRadioSelecionado.parentNode.parentNode
        const criarNovosCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(criarNovosCurso, cursoSelecionado)
    }else{
        alert('Digite um curso para inserir antes ')
    }
}
function criarCursoDepois(){
    if(nomeCurso.value == ""){
        alert('Digite um curso para inserir depois')
    }else{
        const cursoRadioSelecionado = adicionarRadioSelecionado()
        const cursoSelecionado = cursoRadioSelecionado.parentNode.parentNode
        const criarNovosCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(criarNovosCurso, cursoSelecionado.nextSibling)
    }
}
cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento);
    indice++
});

const adicionarRadioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    let radioSelecionado = todosRadios.filter((ele) => {
        return ele.checked
    });
    return radioSelecionado[0];
};

function removerSelecionado() {
    const btnRemoverSelecionado = adicionarRadioSelecionado()
    if (btnRemoverSelecionado) {
        btnRemoverSelecionado.parentElement.parentElement.remove()
    }
}
btnCursosSelecionado.addEventListener('click', () => {
    const rs = adicionarRadioSelecionado()
    const cursoSelecionado = rs.parentNode.parentNode.textContent
    console.log(cursoSelecionado)
    alert('Curso selecionado: ' + cursoSelecionado)
});

btnRemoverBotaoSelecionado.addEventListener('click', removerSelecionado)
btnAdicionarCursoAntes.addEventListener('click',criarCursoAntes)
btnAdicionarCursoDepois.addEventListener('click', criarCursoDepois)