function regxpText() {
    let str = document.getElementById('source').value;
    let regexpFindSymbol = new RegExp('\'', 'gm');
    let regexpReturnSymbol = /\b\"\b/gm;
    let newstr = str.replace(regexpFindSymbol, '"');
    newstr = newstr.replace(regexpReturnSymbol, '\'');
    document.getElementById('output').value = newstr;
}
document.getElementById('source').addEventListener("keyup", regxpText);