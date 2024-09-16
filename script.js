// Define la fecha y hora hacia la que deseas hacer la cuenta regresiva
var countDownDate = new Date("Oct 15, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Cálculos para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra la cuenta regresiva en el elemento con id "countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);

// Lista de personas con el número de invitados que pueden llevar
const guestsList = [
    { name: "Letni", totalGuests: 3 },
    { name: "Oscar", totalGuests: 4 },
    { name: "Juan", totalGuests: 2 },
    { name: "Maria", totalGuests: 5 },
    { name: "Ana", totalGuests: 1 }
];

// Función para buscar el nombre en la lista
function searchName() {
    const nameInput = document.getElementById("nameInput").value.toLowerCase();
    const result = document.getElementById("result");
    
    // Busca en la lista
    const guest = guestsList.find(person => person.name.toLowerCase() === nameInput);

    // Muestra el resultado
    if (guest) {
        result.innerHTML = `¡Hola ${guest.name}! Puedes traer un total de ${guest.totalGuests} personas.`;
    } else {
        result.innerHTML = "Nombre no encontrado en la lista.";
    }
}
