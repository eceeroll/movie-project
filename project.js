// Form ve Inputları DOM ile alma işlemi 

let formDom = document.getElementById("film-form");
let titleDom = document.getElementById("title");
let urlDom = document.getElementById("url");
let directorDom = document.getElementById("director");
let fragmanDom = document.getElementById("fragman");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const filterDom = document.getElementById("filter");



// UI Objesini başlatma:
const ui = new UI();
// storage objesi oluşturma:
const storage = new Storage();

eventListeners(); // tüm eventler başlatılır. 

function eventListeners(e) { // Tüm Eventlerin yükleneceği fonksiyon
    formDom.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){ // Sayfa yenilendiğinde filmleri arayüze ekler. 
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click", clearAllFilms);
    // filter.addEventListener("click", filterFilms);
}

function addFilm(e) {

    // inputa girilen değerleri alma işlemi
    const title = titleDom.value;
    const director = directorDom.value;
    const url = urlDom.value;
    const fragman = fragmanDom.value;

    if ( title === "" || director === "" || url === "" || fragman === "") {
        // hata mesajı 
        ui.displayMessages("Lütfen Girdiğiniz Bilgileri Kontrol Ediniz", "danger");
    }
    else {
        // yeni film objesi oluşturarak film ekleme 
        
        const newFilm = new Film(title,director,url,fragman);

        ui.addFilmToUI(newFilm); // filmi arayüze ekleme
        ui.clearInputs(titleDom, urlDom, directorDom,fragmanDom); // inputları temizle 
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film Başarıyla Eklendi..", "success")
    }

    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Film Başarıyla Silindi..", "success")
    }
}

function clearAllFilms() {

    if(confirm("Tüm Filmleri Silmek İstediğinize Emin Misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

    ui.displayMessages("Tüm Filmler Başarıyla Silindi..", "success")
}

// function filterFilms(e) {

//     let filterValue = e.target.value.toLowerCase();
//     let filmList = storage.getFilmsFromStorage();

//     filmList.forEach(function(film){

//         if(film.title.toLowerCase == filterValue) {
            
//         }
//     })



// }