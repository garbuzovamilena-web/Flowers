change = document.getElementById('change')

change.addEventListener('click', change_all)

function change_all() {
    if (document.getElementsByTagName('div')[2].innerHTML === "Гарбузова") {
        document.getElementsByTagName('div')[2].innerHTML = "Garbuzova"
        document.getElementsByTagName('div')[3].innerHTML = "Milena"
        document.getElementsByTagName('div')[4].innerHTML = "Ruslanovna"
        document.getElementsByTagName('div')[5].innerHTML = "Female &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03.12.2006"
        document.getElementsByTagName('div')[7].innerHTML = "Main Directorate of the MIA for St. Petersburg"
        document.getElementsByTagName('div')[10].innerHTML = "Saint Petersburg"
        document.getElementsByTagName('div')[11].innerHTML = "Russia"

    }
    else {
        if (document.getElementsByTagName('div')[2].innerHTML === "Garbuzova") {
            document.getElementsByTagName('div')[2].innerHTML = "Гарбузова"
            document.getElementsByTagName('div')[3].innerHTML = "Милена"
            document.getElementsByTagName('div')[4].innerHTML = "Руслановна"
            document.getElementsByTagName('div')[5].innerHTML = "ЖЕН &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03.12.2006"
            document.getElementsByTagName('div')[7].innerHTML = "ГУ МВД РОССИИ ПО Г. САНКТ-ПЕТЕРБУРГУ"
            document.getElementsByTagName('div')[10].innerHTML = "гор. САНКТ-ПЕТЕРБУРГ"
            document.getElementsByTagName('div')[11].innerHTML = "РОССИЯ"
        }
    }
}