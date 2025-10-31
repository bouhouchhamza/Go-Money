let boton=document.getElementById("simulateBtn");

boton.addEventListener("click", loancalcul)

function loancalcul(event){
    event.preventDefault();



    let loan_type=document.getElementById("Loan-Type").value;
    let loan_amount=parseFloat(document.getElementById("Loan-amount").value);
    let term=parseFloat(document.getElementById("Loan-Term").value);
    let term_select=document.getElementById("term-select").value;
    let salary=parseFloat(document.getElementById("Monthly-Salary").value);
    /*
    console.log("laon_type" ,loan_type);
    console.log("loan_amount" ,loan_amount);
    console.log("term", term);
    console.log("term_select", term_select);
    console.log("salary",salary);*/

    let Month;
    if(term_select==="Years"){
        Month=12*term;
    }else{
        Month=term;
    }

    let annual_interest;

    switch(loan_type){
        case("Maison"):annual_interest=5;
        break;
        case("Appartement"):annual_interest=5.5;
        break;
        case("Terrain"):annual_interest=6;
        break;
        case("Petit_entreprise"):annual_interest=7;
        break;
        case("Prêt"):annual_interest=8;
        break;
        default:annual_interest=0
    }


    let monthly_interest=annual_interest/12/100;
    let monthly_debt=(loan_amount*monthly_interest)/(1-Math.pow(1+monthly_interest,-Month));


let total_payment= monthly_debt*Month;
let total_interest= total_payment - loan_amount;




let alert=document.getElementById("alert-box")
if(monthly_debt>salary*0.4){
    alert.classList.remove("alert-secondary");
    alert.classList.add("alert-danger");
    alert.textContent="🚫 Ce prêt n'est pas accessible avec ce revenu.";
}else{
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.textContent="✅ Simulation réussie !";
}


document.getElementById("result-type").textContent = loan_type;
  document.getElementById("result-amount").textContent = loan_amount.toFixed(2) + " MAD";
  document.getElementById("result-interest").textContent = annual_interest.toFixed(2) + " %";
  document.getElementById("result-monthly").textContent = monthly_debt.toFixed(2) + " MAD";
  document.getElementById("total-interest").textContent = total_interest.toFixed(2) + " MAD";
  document.getElementById("result-total").textContent = total_payment.toFixed(2) + " MAD";

}

