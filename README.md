# git-crash-course

Corso di base su Git per RaspiBO.

## English version

An English translation is available at https://git.lattuga.net/alberanid/git-crash-course-en

## Build & run

Requisiti: Git e Python 3. Non sono necessari Node.js, npm o una compilazione:
il sottomodulo reveal.js contiene già i file JavaScript e CSS pronti all'uso.

Lanciate:

    $ ./run.sh

Al primo avvio viene scaricato il sottomodulo reveal.js (serve una connessione
Internet). Aprite <http://127.0.0.1:8000> nel browser; per fermare il server
premete Ctrl+C. Lo script funziona anche se lanciato da un'altra directory.

Per cambiare porta: `PORT=8080 ./run.sh`. Per rendere il server accessibile
anche dalla rete locale: `HOST=0.0.0.0 ./run.sh`.

Il launcher serve direttamente i file del progetto, senza copiarli o creare
collegamenti nel sottomodulo. Per pubblicare le slides su un server statico,
includete anche il sottomodulo reveal.js inizializzato.

## Oppure...

Le slides sono in formato markdown, e possono essere [visualizzate direttamente](git-crash-course.md)

## Licenza

Copyright 2017-2026 Davide Alberani <da@mimante.net>, RaspiBO <info@raspibo.org>

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License: http://creativecommons.org/licenses/by-sa/4.0/
