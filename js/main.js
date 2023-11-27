
//Creo array dei discount
let codesDis = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24"
];


function isDiscountCodeValid(discountCode) {
    let discount = false;
    
    for(let i = 0; i < codesDis.length; i++){
        if (discountCode == codesDis[i]){
            discount = true;
        }
    }

    return discount;
}



function previewServ(event) {
    event.preventDefault();
    let serviceType = document.getElementById("serviceType");
    let serviceOpt = serviceType.options[serviceType.selectedIndex].value;
    let price = 0;
    let DiscountCode = document.getElementById("discount-code").value;
    let foundDiscountCode = isDiscountCodeValid(DiscountCode);

    let hoursRequested = document.getElementById("hours").value;
    hoursRequested = parseInt(hoursRequested);

    if(serviceOpt == "Backend") {
        price = hoursRequested * 20.50;
    } else if (serviceOpt == "Frontend") {
        price = hoursRequested * 15.30;
    } else if (serviceOpt == "Projectanalysis") {
        price = hoursRequested * 33.60;
    }

    if(foundDiscountCode){
        price = price * 0.75;
        alert("Codice sconto applicato!");
    } else {
        alert("Codice sconto non trovato!");
    }

    console.log(price + "€");

}