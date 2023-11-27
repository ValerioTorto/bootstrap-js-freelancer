
//Creo array dei discount
let codesDis = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24"
];
let i = 0;

let discount = false;

function DiscountedPrice(putDiscount) {
    for (i = 0; i < codesDis.length; i++){
        if (putDiscount == codesDis[i]);
        discount = true;
        break;
    };
    return discount;
}



function previewServ(event) {
    event.preventDefault();
    let serviceType = document.getElementById("serviceType");
    let serviceOpt = serviceType.options[serviceType.selectedIndex].value;
    let price = 0;
    let putDiscount=document.getElementById("discount-code").value;
    let discount = DiscountedPrice(putDiscount);

    let hoursRequ = document.getElementById("hours").value;
    parseInt(hoursRequ);
     if (discount){
        if(serviceOpt == "Backend") {
        price = hoursRequ * 20.50;
        price = price * 0.75;
        price = price.toFixed(2);
        console.log(price);
     }
     else if (serviceOpt == "Frontend") {
        price = hoursRequ * 15.30;
        price = price * 0.75;
        price = price.toFixed(2);
        console.log(price)
     }
     else if (serviceOpt == "Projectanalysis") {
        price = hoursRequ * 33.60;
        price = price * 0.75;
        price = price.toFixed(2);
        console.log(price)
     }
    }

    else{
        alert("Attenzione codice sconto non valido!");

        if (serviceOpt == "Backend") {
            price = hoursRequ * 20.50;
            price = price.toFixed(2);
            console.log(price);
        }
        else if (serviceOpt == "Frontend") {
            price = hoursRequ * 15.30;
            price = price.toFixed(2);
            console.log(price);
        }
        else if (serviceOpt == "Projectanalysis") {
            price = hoursRequ * 33.60;
            price = price.toFixed(2);
            console.log(price);
        }
    }
}