window.onload = function() {

};

function addTable() {
    var num = document.getElementById("num").value;
    var desc = document.getElementById("desc").value;
    var estado = document.getElementById("estado").value;
    var situacao = document.getElementById("situacao").value;
    var localizacao = document.getElementById("localizacao").value;
    var corresponsavel = document.getElementById("corresponsavel").value;

    var str = "<tr>\n" +
        "<td> " + num + " </td>\n" +
        "<td> " + desc + " </td>\n" +
        "<td> " + estado + " </td>\n" +
        "<td> " + situacao + " </td>\n" +
        "<td> " + localizacao + " </td>\n" +
        "<td> " + corresponsavel + " </td>\n" +
        " </tr>\n";
    document.getElementById("table-info").innerHTML += str;
    document.getElementById("limpar").click();
}