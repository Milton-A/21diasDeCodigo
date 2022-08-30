function Relogio(){
    function getTimeFromSecond(second) {
        const data = new Date(second * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function starClock() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const element = e.target;
    
        if (element.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        } else if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            starClock();
        } else if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    })    
}

Relogio();