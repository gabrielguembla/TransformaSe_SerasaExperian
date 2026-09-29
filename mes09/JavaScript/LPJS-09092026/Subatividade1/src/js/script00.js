
const result00 = window.document.querySelector(".result00");
const ageInput = window.document.querySelector('#ageValue');
// const cnhStatus = window.document.querySelector('input[type="radio"]:checked');

// console.log(cnhStatus);

const canIDrive = () => {
    const age = Number(ageInput.value);
    const cnhStatus = window.document.querySelector('input[name="cnhStatus"]:checked');
    


    
    
    console.log(cnhStatus, cnhStatus.value, Boolean(cnhStatus.value));
    console.log(age);
    event.preventDefault();
    console.log('First -> ', typeof ageInput, typeof ageInput === undefined, typeof ageInput === null);
    console.log(typeof ageInput.value, ageInput.value === undefined, ageInput.value === null, typeof ageInput.value === String());
    console.log(typeof 5, 5 === Number, 5 == Number());
    console.log(`This is %cageInput.value%c value "${!ageInput.value && "null"}"`,"font-weight: bold","");
    



    if(!ageInput.value){
        result00.innerHTML = `Por favor, informe sua idade!`;
        // return;

    }

    if (age >= 18 && cnhStatus.value === "true") {
        result00.innerHTML = "Você pode dirigir ;) !";

    } else if (age >= 18 && cnhStatus.value === "false") {
        result00.innerHTML = "Você não pode dirigir, mas você já pode tirar sua habilitação! =)"

    } else {
        result00.innerHTML = "Você ainda não pode dirigir :( !";

    }
}