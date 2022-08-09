// Filmleri ekleyeceğimiz arayüz için UI Constructor 

function UI() {

}

UI.prototype.addFilmToUI = function(newFilm) {

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr class="bg-info">
    <td><img style="width:270px;height:200px;vertical-align:middle" src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td style="text-align:center; vertical-align:middle; font-size: 29px">${newFilm.title}</td>
    <td style="text-align:center; vertical-align:middle; font-size: 29px">${newFilm.director}</td>
     <td style="vertical-align:middle"> <video width="320" height="240" controls>
     <source src="media/fragman.mp4" type="video/mp4"> </video>
    </td>
    <td style="vertical-align:middle; width:140px; height:100px;"><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
    </tr>  
    `;
}

// Film ekleme işlemi yapıldıktan sonra Inputların içini temizler
UI.prototype.clearInputs = function(a,b,c,d) {
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}

// Bilgilendirme Mesajlarını arayüzde gösterme 
UI.prototype.displayMessages = function(message,type) {

    const firstCardBody = document.querySelector(".card-body");

    // alert bloğu oluşturma:
    const alertDiv = document.createElement("div");

    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message; 

    firstCardBody.appendChild(alertDiv);

    setTimeout(function(){
        alertDiv.remove();
    },2500);
}

// Sayfa yüklendiğinde local storage dan alınan arrayi arayüze yükleme
UI.prototype.loadAllFilms = function(films) {

    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += ` <tr class="bg-info">
        <td><img style="width:370px;height:260px;vertical-align:middle" src="${film.url}" class="img-fluid img-thumbnail bg-info"></td>
        <td class="bg-info" style="text-align:center; vertical-align:middle; font-size: 29px">${film.title}</td>
        <td class="bg-info" style="text-align:center; vertical-align:middle; font-size: 29px"> ${film.director}</td>
        <td class="bg-info" style="vertical-align:middle;">    <video width="320" height="240" controls>
        <source src="media/fragman.mp4" type="video/mp4"> </video>
        </td>
        <td class="bg-info" style="vertical-align:middle; width:120px; height:50px;"><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
        </tr>     
        `
    })
}

UI.prototype.deleteFilmFromUI = function(element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function() {
    const filmList = document.getElementById("films");
    while(filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }

}




