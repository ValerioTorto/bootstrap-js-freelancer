

function previewServ(event) {
    event.preventDefault();
    let serviceType = document.getElementById("serviceType");
    let serviceOpt = serviceType.options[serviceType.selectedIndex].value;

    let hoursRequ = document.getElementById("hours").value;
    parseInt(hoursRequ);
     if(serviceOpt == "Backend") {
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