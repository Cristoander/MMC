const form = document.querySelector('#formulario');


/*Aqui fica todo o evendo do fomulario (não precisa do onclick)*/
  form.addEventListener('submit', function (e) {
  e.preventDefault(); // <-- impede o comportamento padrão (recarregar)

    const pesoInput = document.getElementById('peso').value // Puxa os dados e seu valor
    const alturaInput =  document.getElementById('altura').value
    
    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput) / 100;

    if(peso && altura){
        const imc = peso / (altura * altura); 

        if(imc <= 18.5){
          document.getElementById('resultado').innerHTML = `Abaixo do peso IMC: ${imc.toFixed(2)}`;
        }else if(imc >= 18.5 && imc <= 24.9){
          document.getElementById('resultado').innerHTML = `Peso normal IMC: ${imc.toFixed(2)}`;
        }else if(imc >= 25 && imc <= 29.9){
          document.getElementById('resultado').innerHTML = `Sobrepeso IMC: ${imc.toFixed(2)}`;
        }else if(imc >= 30.0 && imc <= 34.9){
          document.getElementById('resultado').innerHTML = `Obesidade grau 1 IMC: ${imc.toFixed(2)}`;
        }else if(imc >= 35 && imc <= 39.9){
          document.getElementById('resultado').innerHTML = `Obesidade grau 2 IMC: ${imc.toFixed(2)}`;
        }else if(imc >= 40.0){
          document.getElementById('resultado').innerHTML = `Obesidade grau 3 IMC: ${imc.toFixed(2)}`;
        }
    }
});



