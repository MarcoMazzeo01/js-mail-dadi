const mailList = ["pincoPallino@gmail.com", "omgtheslapper@gmail.com", "kimKardashianDocet@yahoo.com"]
let userMail = prompt("Inserisci la tua email:")

if (mailList.includes(userMail)) { 
    console.log("accesso consentito.")
} else {
    console.log("email non esiste.")
}