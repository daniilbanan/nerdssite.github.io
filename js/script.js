var link = document.querySelector (".link");
var writeUs = document.querySelector (".writeUs");
var close = document.querySelector (".close")
var send = document.querySelector('.send');

link.addEventListener("click", function(){
  writeUs.classList.toggle("show");
})

close.addEventListener("click", function(){
  writeUs.classList.remove("show")
})
send.addEventListener('click', function () {
    if(nameField.value && emailField.value && textField.value){
        success.classList.add('--success-display')
    }
    if(!nameField.value && !emailField.value && !textField.value){
        alertP.innerText = "Заполните Ваше Имя, Email и текст письма!";
        alertWarning.classList.add('--alert-display')
    }
    if(nameField.value && !emailField.value && !textField.value){
        alertP.innerText = "Заполните Email и текст письма!";
        alertWarning.classList.add('--alert-display')
    }
    if(nameField.value && emailField.value && !textField.value){
        alertP.innerText = "Заполните текст письма!";
        alertWarning.classList.add('--alert-display')
    }
    if(!nameField.value && emailField.value && textField.value){
        alertP.innerText = "Заполните Ваше Имя!";
        alertWarning.classList.add('--alert-display')
    }
    if(nameField.value && !emailField.value && textField.value){
        alertP.innerText = "Заполните Email!";
        alertWarning.classList.add('--alert-display')
    }

    if(!nameField.value && !emailField.value && textField.value){
        alertP.innerText = "Заполните Ваше Имя и Email!";
        alertWarning.classList.add('--alert-display')
    }

});
function initMap() {
    var uluru = {lat: 59.937657, lng:30.325219};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: {
            url: "img/map-marker.png"
        }
    });
}