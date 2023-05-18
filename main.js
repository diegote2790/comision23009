var card=
`<div class="cardConteiner">
`
 for(let i=0 ; i< data.length ; i++){
    card += `
    <div class="tarjeta">
        <img src="${data[i].image}" height="140px" width="160px" alt="">
        <div class="cuerpoTarjeta">
            <h4>${data[i].nombre}</h4>
            <p>Edad: ${data[i].edad} </p>
            <p>Numero: ${data[i].numero} </p>
            <p>Posición: ${data[i].posicion} </p>
            <p>Equipo: ${data[i].equipo} </p>
        </div>
    </div>
    `
}
card+=`
</div>
`

// document.write(card) si dejaba este campo me repetia las tarjetas debajo del footer
document.getElementById("fotos").innerHTML=card