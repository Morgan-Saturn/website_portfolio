/**
 * 
 * @param {Event} event 
 */
function handleSubmit(event) {
    let baliseObjet = document.querySelector('input[type="text"]');
    let baliseMessage = document.querySelector("textarea");
    let objet = baliseObjet.value;
    let message = baliseMessage.value;
    const encodedMessage = encodeURIComponent(message);
    const  encodedObjet = encodeURIComponent(objet);
    
    window.location=`mailto:morgan.tunteva@proton.me?subject=${encodedObjet}&body=${encodedMessage}`
}