
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
    let finalPrice = 0;
    let putDiscount = DiscountedPrice(putDiscount);

    let hoursRequ = document.getElementById("hours").value;
    parseInt(hoursRequ);
     if (discount){
     (serviceOpt == "Backend") {
        let price = hoursRequ * 20.50
        console.log(price)
     }
     else if (serviceOpt == "Frontend") {
        let price = hoursRequ * 15.30
        console.log(price)
     }
     else if (serviceOpt == "Projectanalysis") {
        let price = hoursRequ * 33.60
        console.log(price)
     }
    }
}