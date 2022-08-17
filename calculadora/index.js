function display(value) {
    let op;
    if (document.getElementById('result').value === '') {
        if (value !== '/' || value !== '*' || value !== '=') {
            document.getElementById('result').value += value;
        }
    }
    else {
        if (value === '-' || value === '+' || value === '/' || value === '*') {
            document.getElementById('result-prev').value += document.getElementById('result').value;
            document.getElementById('result').value = '';
            op = value;
        }
        else if (value === '=') {
            solve(op);
        } else {
            document.getElementById('result').value += value;
        }
    }
}
function solve(op) {
    let x = Number(document.getElementById('result').value);
    let y = Number(document.getElementById('result-prev').value);
    let result;
    if (op === '+')
        result = y + x;
    else if (op === '-')
        result = y - x;
    else if (op === '*')
        result = y * x;
    else if (op === '/')
        result = y / x;

        console.log(y);
    document.getElementById('result').value=result;
    document.getElementById('result-prev').value = '';
}
function clearScreen() {
    document.getElementById('result').value = '';
    document.getElementById('result-prev').value = '';
}