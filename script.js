const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const height=parseFloat(document.getElementById("height").value) / 100;
    const weight=parseFloat(document.getElementById('weight').value);
    const result=document.querySelector('#result');
    const status=document.querySelector('#message');
    if(isNaN(height)||height<0){
        result.innerHTML="Please enter a valid height";
    }
    else if(isNaN(weight)||weight<0){
        result.innerHTML="Please enter a valid weight";
    }
    else{
        const bmi=(weight/(height*height)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
        if(bmi<16){
            status.innerHTML="You are in Sereve thiness range";
        }
        else if(bmi<17){
            status.innerHTML="You are in Moderate Thinness range";
        }
        else if(bmi<18.5){
            status.innerHTML="You are in Mild Thinness range";
        }
        else if(bmi<25){
            status.innerHTML="You are in Normal range";
        }
        else if(bmi<30){
            status.innerHTML="You are in Overweight range";
        }
        else if(bmi<35){
            status.innerHTML="You are in Obese range ";
        }
        else{
            status.innerHTML="You are in extereme obese range";
        }
    }
})