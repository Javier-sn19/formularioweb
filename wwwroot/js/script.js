function cancelar() {
    var checkboxes = document.getElementsByName("B3P1");

    if (checkboxes[3].checked) {
        for (var i = 0; i < checkboxes.length - 1; i++) {
            checkboxes[i].disabled = true;
        }
    } else {
        for (var i = 0; i < checkboxes.length - 1; i++) {
            checkboxes[i].disabled = false;
            checkboxes[i].value = 0;
        }
    }
}
function MostrarResultados() {
    let SB1 = Number(document.getElementById("B1P1").value) +
        Number(document.getElementById("B1P2").value) +
        Number(document.getElementById("B1P3").value) +
        Number(document.getElementById("B1P4").value) +
        Number(document.getElementById("B1P5").value) +
        Number(document.getElementById("B1P6").value);

    let SB2 = Number(document.getElementById("B2P1").value) +
        Number(document.getElementById("B2P2").value) +
        Number(document.getElementById("B2P3").value);

    let SB3 = Number(getCheckboxSum("B3P1")) +
        Number(document.getElementById("B3P2").value) +
        Number(document.getElementById("B3P3").value) +
        Number(document.getElementById("B3P4").value) +
        Number(document.getElementById("B3P5").value);

    let SB4 = Number(document.getElementById("B4P1").value) +
        Number(document.getElementById("B4P2").value) +
        Number(document.getElementById("B4P3").value);

    let B1 = (SB1);
    let B2 = (SB2);
    let B3 = (SB3);
    let B4 = (SB4);

    B1 = Number(B1).toFixed(0);
    B2 = Number(B2).toFixed(0);
    B3 = Number(B3).toFixed(0);
    B4 = Number(B4).toFixed(0);

    let sumaTotal = ((Number(B1) + Number(B2) + Number(B3) + Number(B4)) / 400) * 100;

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let giro = document.getElementById("giro").value;
    let fecha = document.getElementById("fecha").value;

    let resultadosURL =
        "/resultado?" +
        "B1=" +
        B1 +
        "&B2=" +
        B2 +
        "&B3=" +
        B3 +
        "&B4=" +
        B4 +
        "&nombre=" +
        encodeURIComponent(nombre) +
        "&telefono=" +
        encodeURIComponent(telefono) +
        "&giro=" +
        encodeURIComponent(giro) +
        "&fecha=" +
        encodeURIComponent(fecha) +
        "&sumaTotal=" + sumaTotal;

    window.location.href = resultadosURL;
}

function getCheckboxSum(name) {
    let checkboxes = document.getElementsByName(name);
    let sum = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            sum += Number(checkboxes[i].value);
        }
    }
    return sum;
}
        let RHTML = new URLSearchParams(window.location.search);
        let B1 = RHTML.get("B1");
        let B2 = RHTML.get("B2");
        let B3 = RHTML.get("B3");
        let B4 = RHTML.get("B4");
        let nombre = RHTML.get("nombre");
        let telefono = RHTML.get("telefono");
        let giro = RHTML.get("giro");
        let sumaTotal = RHTML.get("sumaTotal");
        let fecha = RHTML.get("fecha");

        document.getElementById("B1").textContent = B1;
        document.getElementById("B2").textContent = B2;
        document.getElementById("B3").textContent = B3;
        document.getElementById("B4").textContent = B4;
        document.getElementById("nombre").textContent = nombre;
        document.getElementById("telefono").textContent = telefono;
        document.getElementById("giro").textContent = giro;
        document.getElementById("sumaTotal").textContent = sumaTotal;
document.getElementById("fecha").textContent = fecha;

function IrAResultado() {
    window.location.href = "/resultado";
}