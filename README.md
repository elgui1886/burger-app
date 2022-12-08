# burger-app-guidi

Un applicativo web Angular per la creazione e la gestione di comande relative a un’attività di ristoro.


## Requisiti funzionali

Creare una pagina con relativa form per la creazione di un ordine di hamburger.
La form dovrà presentare i seguenti campi:

- Numero di hamburger


- Tavolo

Sotto a questo primo gruppo di campi, per ogni hamburger ordinato, dovrà essere mostrato il seguente gruppo di campi:

- Tipo di pane:
  - Classico
  - Integrale
  - Farina di riso


- Hamburger:
  - Manzo
  - Pollo
  - Vegetale
  - Gluten-free


- Ingredienti:
  - Lattuga
  - Cheddar
  - Ketchup
  - Maionese
  - Cipolla


- Cottura al sangue


- Note

Quindi, il numero di gruppi di questi ultimi campi sarà pari al numero specificato nel campo “Numero di hamburger”.

Inoltre, i campi dovranno rispettare i seguenti requisiti:
-	Il campo “Cottura al sangue” dovrà apparire ed essere obbligatorio solo in caso di selezione dei valori “Manzo” o “Gluten-free” del campo “Hamburger”
-	Tutti i campi sono obbligatori, fatta eccezione per i campi “Ingredienti” e “Note”
-	Il campo “Numero di hamburger” deve avere un valore maggiore o uguale a 1

In fondo alla form sarà presente il pulsante “Invia” che sarà sempre attivo.
Se l’utente preme questo pulsante, ma uno o più campi della form non sono validi, l’interfaccia dovrà mostrare il relativo errore sotto ogni campo non valido.

Se l’utente rimuove il focus da un campo e questo non è valido, l’interfaccia dovrà mostrare il relativo errore sotto il campo in questione.

Una volta premuto il pulsante "Invia" e se la form è valida, allora i dati dovranno essere inseriti memorizzati nell’applicativo. Dovrà inoltre essere mostrato un messaggio di avviso di avvenuta creazione dell’ordine.


## Requisiti tecnici

L'applicativo dovrà essere sviluppato utilizzando il seguente stack tecnologico:

- **Angular** framework versione 12.2.17 o superiore
- **Qualsiasi libreria o framework UI** (e.g. PrimeNG, Angular Material, ...)

Dovranno inoltre essere rispettati i paradigmi del **responsive design**, quindi l'applicativo dovrà essere fruibile con qualsiasi risoluzione di schermo.

L'aspetto puramente estetico dell'applicativo non sarà oggetto di valutazione, perciò lo sviluppatore è libero di implementare gli stili che desidera.

La form dovrà essere implementata utilizzando le classi [Angular Reactive forms](https://angular.io/guide/reactive-forms).

Gli input della form dovranno rispettare le seguenti tipologie:

- Numero di hamburger (input number)
- Tavolo (input number)
- Tipo di pane (dropdown)
- Hamburger (dropdown)
- Ingredienti (checkbox)
- Cottura al sangue (switch button)
- Note (textarea)

Al submit della form, i dati dovranno essere memorizzati all'interno del localStorage del browser.

Lo sviluppatore può utilizzare ogni altro tipo di strumento o accorgimento che ritiene necessario, purché non sia in conflitto con i requesiti descritti.

Buona programmazione! 😀

**OPTIONAL BONUS:** Utilizzare la tecnologia [NgRx Store](https://ngrx.io/guide/store) (versione 12.5.1 o superiore) per la memorizzazione dei dati della form in sostituzione al localStorage. Quindi creare le azioni e lo stato necessari per la memorizzazione degli ordini.

## Descrizione soluzione

Vedi [Solution.md](SOLUTION.md)


