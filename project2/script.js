const form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const rel = document.querySelector('#rel')



    if(height === ''|| height<0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height'
    }
    else if(weight === ''|| weight<0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight'
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `Bmi value is <span>${bmi}</span>`
        if (bmi<=18.6) {
        rel.innerHTML = `Your Bmi is too low`;
        } else if(bmi<=25  && bmi>=18.6) {
            rel.innerHTML =  `Your Bmi is average`;
        }
        else{
            rel.innerHTML = 'your bmi is higher'
        }
    }


    



})
