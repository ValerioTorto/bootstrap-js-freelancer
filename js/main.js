let basePriceBack = 20.50;
let basePriceFront = 15.30;
let baseAnal = 33.60;
let hoursRequ = prompt("ore da lavorare");
parseInt(hoursRequ);

let totalPriceBack = (basePriceBack * hoursRequ);
console.log(totalPriceBack)

function previewServ(event) {
    event.preventDefault();
    let serviceType = document.getElementById("serviceType");
    let serviceOpt = serviceType.options[categoryType.selectedIndex].value;

    

}