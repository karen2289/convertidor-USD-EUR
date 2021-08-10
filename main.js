    let toggler = document.querySelector('.toggler');
    let price = document.querySelectorAll('.price');
    let dolar = document.querySelectorAll('.dollar');
    let usd = 0.85;
    
    // 0.85 euros = 1 dolar a fecha de 10 - 08 - 2021
    
    toggler.onclick = () =>{
    
        toggler.classList.toggle('active');
    
        if(toggler.classList.contains('active')){
    
            for(var i = 0; i < dolar.length; i++){
                dolar[i].innerText = '€';
            }
            for(var k = 0; k < price.length; k++){
                price[k].innerText = (price[k].innerText * usd).toFixed(2);
            }
    
        }else{
    
            for(var i = 0; i < dolar.length; i++){
                dolar[i].innerText = '$';
            }
            for(var k = 0; k < price.length; k++){
                price[k].innerText = (price[k].innerText / usd).toFixed(2);
            }
    
        }
    
    };