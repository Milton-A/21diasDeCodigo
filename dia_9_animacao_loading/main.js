function criaLoading() {
  function inicia() {
    let i = 0;
    let id;
    let width = 1;
    let idCor = 1;

    if (i === 0) {
      i = 1;

      const elem = document.querySelector(".myBar");
      id = setInterval(() => {
        width++;

        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

        cores(idCor);
        idCor++;
        if (idCor > 10)
          idCor = 0;
        if (width === 100)
          clearInterval(id);

      }, 100);
    }
  };
  document.addEventListener('click', (e) => {
    const el = e.target;
    if (e.keyCode === 13) {
      inicia();
    }
    if (el.classList.contains('iniciar')) {
      inicia();
    }
  });
  function cores(idCor) {
    const cor = ['red', 'lime', 'blue', 'aqua', 'chartreuse', 'darkorange', 'salmon', 'salmon', 'mediumpurple','hotpink'];
    const elem = document.querySelector(".myBar");
    elem.style.backgroundColor = cor[idCor];
  }
}

criaLoading();