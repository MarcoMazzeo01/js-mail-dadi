# Mail List

## Processo:

1. Dichiaro un array con tutte le email necessarie.
2. Chiedo all'utente di inserire la propria email, inizializzandola come variabile.
3. Uso `array.includes(string)` per controllare se l'email inserita è presente nell'array.
    - Se presente, garantisco l'accesso.
    - Altrimenti lo nego.



# Gioco di dadi

## Processo:

1. Dichiaro un array vuoto;
2. Dichiaro il numero minimo (1) e il numero massimo (6);
3. Dichiaro la funzione per ottenere un numero intero random con la formula `Math.floor(Math.random() * (max - min + 1) ) + min`;
4. Genero due numeri (primo è del giocatore, secondo è del computer), inserendoli nell'array vuoto precedentemente dichiarato.
5. Se array[0] è più grande, allora vince il giocatore
    - Se array[1] è più grande invece, vince il computer.