let btnArr_lg = [];
btnArr_lg[0] = [document.getElementById("Rad"), document.getElementById("Deg"), document.getElementById("Ans"), document.getElementById("("), document.getElementById(")"), document.getElementById("DEL"), document.getElementById("RST")];
btnArr_lg[1] = [document.getElementById("x^y"), document.getElementById("sin"), document.getElementById("cos"), document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("+")];
btnArr_lg[2] = [document.getElementById("tan"), document.getElementById("log"), document.getElementById("x!"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), document.getElementById("-")];
btnArr_lg[3] = [document.getElementById("%"), document.getElementById("ln"), document.getElementById("e"), document.getElementById("7"), document.getElementById("8"), document.getElementById("9"), document.getElementById("×")];
btnArr_lg[4] = [document.getElementById("π"), document.getElementById("√"), document.getElementById("³√"), document.getElementById("."), document.getElementById("0"), document.getElementById("="), document.getElementById("÷")];

let btnArr_sm = [];
btnArr_sm[0] = [document.getElementById("Rad"), document.getElementById("Deg"), document.getElementById("Ans"), document.getElementById("DEL"), document.getElementById("RST")];
btnArr_sm[1] = [document.getElementById("x^y"), document.getElementById("sin"), document.getElementById("cos"), document.getElementById("tan"), document.getElementById("log")];
btnArr_sm[2] = [document.getElementById("x!"), document.getElementById("("), document.getElementById(")"), document.getElementById("%"), document.getElementById("ln")];
btnArr_sm[3] = [document.getElementById("e"), document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("+")];
btnArr_sm[4] = [document.getElementById("π"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), document.getElementById("-")];
btnArr_sm[5] = [document.getElementById("√"), document.getElementById("7"), document.getElementById("8"), document.getElementById("9"), document.getElementById("×")];
btnArr_sm[6] = [document.getElementById("³√"), document.getElementById("."), document.getElementById("0"), document.getElementById("="), document.getElementById("÷")];

document.addEventListener('keydown', (e) => {
    let btnArr;
    if (screen.availWidth >  640) {
        let count_lg = 1;
        for (let i = 0; i < btnArr_lg.length; i++) {
            for (let j = 0; j < btnArr_lg[0].length; j++) {
                btnArr_lg[i][j].tabIndex = count_lg;
                count_lg++;
            }
        }
        btnArr = btnArr_lg.map(arr => [...arr]);
    } else {
        let count_sm = 1    
        for (let i = 0; i < btnArr_sm.length; i++) {
            for (let j = 0; j < btnArr_sm[0].length; j++) {
                btnArr_sm[i][j].tabIndex = count_sm;
                count_sm++;
            }
        }
        btnArr = btnArr_sm.map(arr => [...arr]);
    }

    let m = btnArr.length, n = btnArr[0].length;

    let key = e.code;
    let i, j;
    xfor: for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (btnArr[i][j] === document.activeElement) {
                break xfor;
            }
        }
    }

    switch (key) {
        case 'ArrowLeft':
            if (i >= 0 && j > 0) {
                btnArr[i][j - 1].focus();
            }
            if (i >= 0 && j == 0) {
                btnArr[i - 1][btnArr[i - 1].length - 1].focus();
            }
            break;
        case 'ArrowUp':
            if (i >= 0 && j < n) {
                btnArr[i - 1][j].focus();
            }
            if (i >= 0 && j == n) {
                btnArr[i - 1][btnArr[i - 1].length - 1].focus();
            }
            break;
        case 'ArrowRight':
            if (i <= m && j < (btnArr[i].length - 1)) {
                btnArr[i][j + 1].focus();
            }
            if (i <= m && j == (btnArr[i].length - 1)) {
                btnArr[i + 1][0].focus();
            }
            break;
        case 'ArrowDown':
            if (i <= m && j < n) {
                btnArr[i + 1][j].focus();
            }
            if (i <= m && j == n) {
                btnArr[i + 1][btnArr[i - 1].length - 1].focus();
            }
            break;
    }

})
