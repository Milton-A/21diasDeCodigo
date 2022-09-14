function showMenu() {
    const menu = document.querySelector('.sidebar-menu');
    const buttonMenu = document.querySelector('.button-menu');
    document.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('button-menu') || element.classList.contains('icon-menu')) {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
            else {
                menu.classList.add('show');
            }
        }
    });
}

showMenu();