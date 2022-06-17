/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato 
sull’esito del controllo.
Prima di partire a scrivere 
codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

const mailAddressList = ["mail1", "mail2", "mail3", "mail4"];

const userMailAddress = prompt("Enter your Email:");

//let addressList = false;
//let addressList = true;

//for cicle?

if (userMailAddress == mailAddressList) {
  console.log("You can Enter");
} else if (userMailAddress == mailAddressList) {
  console.log("your mail is not in the list");
} else {
  console.log("404");
}

/* for (let index = 0; index < mailAddressList.length; index++){
    //const "" = mailAddressList[index];
    if (userMailAddress == mailAddressList) {
        console.log("You can Enter");
    } else if (userMailAddress !== mailAddressList) {
        console.log("404");
    } else {
        console.log("your mail is not in the list");
    }
    
} */
