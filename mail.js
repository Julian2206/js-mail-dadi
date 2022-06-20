/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato 
sull’esito del controllo.
Prima di partire a scrivere 
codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

const mailAddressList = ["mail1", "mail2", "mail3", "mail4"];

//console.log(typeof mailAddressList);

const userMailAddress = prompt("Enter your Email:");

let addressListFound = false;

for (let index = 0; index < mailAddressList.length; index++) {
  const email = mailAddressList[index];

  if (email === userMailAddress) {
    addressListFound = true;
  }
}

if (addressListFound) {
  console.log("You can Enter");
} else {
  console.log("your mail is not in the list");
}
