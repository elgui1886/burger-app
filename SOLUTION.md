## Burger app - Elia

La solutione proposta prevede:

- modulo lazy loaded [hamburger.module.ts](./src/app/hamburger/hamburger.module.ts). Il modulo contiene:

	- descrizione [modello](./src/app/hamburger/models);
	- descrizione [stati ngrx](./src/app/hamburger/state/);
	- componente [hamburger order](./src/app/hamburger/hambuger-order/);

  Tecnicamente la soluzione implementata nel componente `hamburger order` prevede un unico _formGroup_ cosi composto:
  - input _numero tavolo_;
  - input _numero hamburger_;
  - _formArray_ per gestire il valore inserito nel campo _numero hamburger_: tale _formArray_ crea dinamicamente n _formGroup_, ciascuno descrivente un hamburger;

  Al variare del campo _numero hamburger_ vengono quindi creati tanti  _formGroup_ quanto il numero inserito.
  E' importante notare come, diminuendo il numero di hamburger selezionati il form non venga
  ripopolato ma mantenga le eventuali selezioni.
  > Usecase: Dopo aver richiesto 5 hamburger tramite apposito input ed averne composti 4 il cliente realizza che il quinto non è necessario. 
  > Modifica quindi il valore del campo da 5 a 4. Vogliamo che i 4 hamburger che ha gia composto vengano mantenuti.

  Al salvataggio i dati possono venire salvati:
  - come array nel _localStorage_ con chiave `ORDERS`: alla chiusura del tab o del browser la chiave viene cancellata e ricreata con l'ordine successivo;
  - nello stato dello `Store`_ngrx_: in questo caso viene loggato in console lo stato attuale di tutti gli ordini presi fino a quel momento

Si mette a disposizione del programmatore la possibilità di switchare tra questi due comportamenti semplicemente modificando l'apposito file di conigurazione `config.json` (opzionale).   
Questo consentirebbe, una volta in produzione, di modificare il comportamento dell'app senza necessita di una nuova build.
Se non presente, l'applicativo usera il _localStorage_ come `default`.
Se presente, valorizzando la chiave _enableStore_ a `true` (come da commit finale) l'applicativo salvera lo stato nell'apposito `Store`_ngrx_.

La parte di [configurazione](./src/app/config/) è composta da:
- [servizio](./src/app/config/config.service.ts) per lettura file configurazione;
- [modello](./src/app/config/config.ts) previsto (estendibile);

L'app è pensata per essere reattiva a livello di layout, è quindi usurfuibile sia ridimensionando il browser, sia simulando visualizzazioni da tablet/telefono tramite `devTools`.


