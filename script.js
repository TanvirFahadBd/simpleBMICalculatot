const btn = document.getElementById('calculate')

btn.addEventListener('click', () => {
   
    let height = document.querySelector('#Height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == ''){
        alert("please Fill out The Input");
        
    }
    height = height/100; //  height meter ea convert kora hoice

    let BMI = (weight/(height*height))
    BMI = BMI.toFixed(2);

    
        const value = document.querySelector(".resulte").innerHTML = BMI;

    let status = '';
    if (BMI <18.5){
        status = "underweight";
    }
     if (BMI >=18.5 && BMI < 25){
        status = "Healthy";
    }
     if (BMI >=25 && BMI <30){
        status = "overweight";
    }
     if (BMI >=25 && BMI >30){
        status = "votka hala";
    }
    if (BMI <10){
        status = "ch*d ling pong";
    }

    document.querySelector("#comment").innerHTML = status;
});



