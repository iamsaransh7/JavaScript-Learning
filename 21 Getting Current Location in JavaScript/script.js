const getLocationBtn = document.getElementById("getLocationBtn");

function gotLocation(position){
    console.log(position);
}

function failedToGetLocation(){
    console.log("There was some issue.");
}

getLocationBtn.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
});