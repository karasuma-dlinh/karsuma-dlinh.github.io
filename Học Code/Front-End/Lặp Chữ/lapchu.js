function lap_so() {
    var a = document.getElementById("nhap_so_cuoi").value
    var b = document.getElementById("nhap_chu_sau_so").value
    a = parseFloat(a);
    for (let i = 0; i <= a; i++)
    console.log(i + '. ' + b);
}

function f5() {
    location.reload()
}
function rs() {
    const form = document.querySelector('form')
    form.reset()
}