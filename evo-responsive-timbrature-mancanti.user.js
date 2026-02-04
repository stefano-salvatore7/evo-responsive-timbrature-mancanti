// ==UserScript==
// @name          EVO - Responsive Timbratura Manuale
// @namespace     https://unibo.it/
// @version       1.1
// @description   Rende responsive la pagina "Timbratura Manuale" (Timbrature Mancanti) su smartphone con font grandi e layout ottimizzato
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// @run-at        document-end
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Inietta il CSS responsive per la pagina Timbratura Manuale
     */
    function injectResponsiveCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            /* Media query per dispositivi mobile */
            @media (max-width: 1024px) and (orientation: portrait),
                   (max-width: 768px) {
                
                /* Container principale più largo */
                .d-flex.flex-wrap.justify-content-center {
                    padding: 0.5rem !important;
                }

                /* Card bianche più larghe */
                .bg-white.m-2 {
                    margin: 0.5rem 0 !important;
                    width: 100% !important;
                    max-width: 100% !important;
                }

                .bg-white.p-4 {
                    padding: 1.5rem !important;
                }

                /* Testo obbligatorio più grande */
                .bg-white {
                    font-size: 1.7rem !important;
                    line-height: 1.6 !important;
                }

                /* Tabella form responsive */
                .formTable {
                    font-size: 1.8rem !important;
                }

                .formTable td {
                    display: block !important;
                    width: 100% !important;
                    padding: 0.8rem 0 !important;
                    border: none !important;
                }

                .formTable td.desc {
                    font-weight: bold !important;
                    font-size: 1.9rem !important;
                    padding-left: 0 !important;
                    margin-bottom: 0.5rem !important;
                    width: 100% !important;
                }

                .formTable tr {
                    display: block !important;
                    margin-bottom: 1.5rem !important;
                    border-bottom: 1px solid #ddd !important;
                    padding-bottom: 1rem !important;
                }

                /* Radio buttons molto più grandi - ora 4 opzioni */
                .form-check {
                    margin-bottom: 1rem !important;
                    padding: 0.5rem !important;
                    display: block !important;
                    width: 100% !important;
                }

                .form-check-input {
                    width: 2.5rem !important;
                    height: 2.5rem !important;
                    margin-top: 0 !important;
                    margin-right: 0.8rem !important;
                    cursor: pointer !important;
                    flex-shrink: 0 !important;
                }

                .form-check-label {
                    font-size: 2rem !important;
                    margin-left: 0.8rem !important;
                    padding-left: 0.5rem !important;
                    cursor: pointer !important;
                    display: inline-flex !important;
                    align-items: center !important;
                }

                /* Input date e time più grandi */
                .input-group {
                    width: 100% !important;
                    margin: 0.5rem 0 !important;
                }

                .input-group .form-control {
                    font-size: 1.8rem !important;
                    padding: 0.9rem !important;
                }

                input[type="time"] {
                    font-size: 1.8rem !important;
                    padding: 0.9rem !important;
                    width: 100% !important;
                }

                /* Icona calendario */
                .icon-datapicker {
                    font-size: 2.5rem !important;
                }

                .input-group-text {
                    padding: 0.6rem !important;
                }

                /* Select più grandi */
                .form-select {
                    width: 100% !important;
                    max-width: 100% !important;
                    font-size: 1.7rem !important;
                    padding: 0.9rem !important;
                    margin: 0.5rem 0 !important;
                }

                /* Input text (Motivo) più grande */
                input[type="text"].w-100 {
                    font-size: 1.7rem !important;
                    padding: 0.9rem !important;
                    margin: 0.5rem 0 !important;
                }

                /* Bottoni enormi */
                .bottone,
                .bottone-plus,
                .bottone_indietro,
                .bottone-indietro-plus {
                    font-size: 1.9rem !important;
                    padding: 1rem 1.5rem !important;
                    margin: 0.5rem 0.5rem 0.5rem 0 !important;
                    width: 100% !important;
                    display: block !important;
                }

                /* Icone nei bottoni */
                .bottone .material-symbols-outlined,
                .bottone-plus .material-symbols-outlined,
                .bottone_indietro .material-symbols-outlined,
                .bottone-indietro-plus .material-symbols-outlined {
                    font-size: 2.2rem !important;
                }

                /* Sezione "Contesto del giorno" */
                .titoletto {
                    font-size: 2rem !important;
                    font-weight: bold !important;
                    margin-bottom: 1rem !important;
                }

                /* Tabella contesto responsive */
                .table-striped {
                    font-size: 1.6rem !important;
                }

                .table-striped th,
                .table-striped td {
                    padding: 0.8rem !important;
                    font-size: 1.6rem !important;
                }

                .table-striped th {
                    font-size: 1.7rem !important;
                }

                /* Fix per il layout dei radio buttons: 2 per riga (sinistra / destra) */
                .formTable td.d-flex {
                    flex-wrap: wrap !important;
                    padding-left: 0 !important;
                }

                .formTable td.d-flex .form-check {
                    width: 50% !important;
                    margin-bottom: 0.6rem !important;
                }

                /* Messaggi di errore */
                .errors {
                    font-size: 1.7rem !important;
                    padding: 1rem !important;
                }

                .errors .material-symbols-outlined {
                    font-size: 2rem !important;
                }

                /* Accordion più grande */
                .accordion {
                    font-size: 1.6rem !important;
                }
            }

            /* Media query per schermi molto piccoli */
            @media (max-width: 480px) and (orientation: portrait),
                   (max-width: 640px) and (orientation: portrait) and (max-height: 800px) {
                
                .bg-white.p-4 {
                    padding: 1rem !important;
                }

                .bg-white {
                    font-size: 1.6rem !important;
                }

                .formTable {
                    font-size: 1.6rem !important;
                }

                .formTable td.desc {
                    font-size: 1.7rem !important;
                }

                .form-check-input {
                    width: 2.2rem !important;
                    height: 2.2rem !important;
                }

                .form-check-label {
                    font-size: 1.8rem !important;
                }

                .input-group .form-control,
                input[type="time"] {
                    font-size: 1.6rem !important;
                }

                .form-select {
                    font-size: 1.5rem !important;
                }

                input[type="text"].w-100 {
                    font-size: 1.5rem !important;
                }

                .bottone,
                .bottone-plus,
                .bottone_indietro,
                .bottone-indietro-plus {
                    font-size: 1.7rem !important;
                    padding: 0.9rem 1.3rem !important;
                }

                .titoletto {
                    font-size: 1.8rem !important;
                }

                .table-striped {
                    font-size: 1.4rem !important;
                }

                .table-striped th,
                .table-striped td {
                    font-size: 1.4rem !important;
                    padding: 0.6rem !important;
                }
            }

            /* Rilevamento touch screen */
            @media (hover: none) and (pointer: coarse) {
                .bg-white.m-2 {
                    width: 100% !important;
                }

                .formTable td {
                    display: block !important;
                    width: 100% !important;
                }

                .form-select,
                input[type="text"].w-100 {
                    width: 100% !important;
                    font-size: 1.7rem !important;
                }
            }
        `;
        document.head.appendChild(style);
        console.log("CSS responsive per Timbratura Manuale iniettato con successo.");
    }

    // Aspetta che il DOM sia completamente caricato
    const waitForPageLoad = setInterval(() => {
        // Verifica che siamo sulla pagina Timbratura Manuale (form Movim)
        const isTimbraturaManuPage = document.querySelector('form[name="Movim"]') !== null;
        const hasFormTable = document.querySelector('.formTable') !== null;
        const hasTitoletto = document.querySelector('.titoletto') !== null;
        
        if (isTimbraturaManuPage && hasFormTable) {
            clearInterval(waitForPageLoad);
            injectResponsiveCSS();
            console.log("Layout responsive attivato per Timbratura Manuale.");
        }
    }, 500);

    // Timeout di sicurezza dopo 10 secondi
    setTimeout(() => {
        clearInterval(waitForPageLoad);
    }, 10000);

})();
