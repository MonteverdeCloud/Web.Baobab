/**
 * WhatsApp Reservation Functionality
 */

function reservarServicio(nombreServicio) {
    const phoneNumber = '50660131525';
    const message = `Hola, me gustaría hacer una reservación para ${nombreServicio}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, '_blank');
}
