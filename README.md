# Beeogrip - GitHub Pages starter

Base statica pronta per sviluppo e pubblicazione su GitHub Pages.

## Struttura progetto

- `index.html` pagina principale
- `assets/css/styles.css` stile del sito
- `assets/js/main.js` interazioni leggere (menu mobile, header)
- `downloads/` documenti PDF scaricabili
- `resources/` materiale sorgente iniziale (non pubblicato come homepage)

## Avvio locale

Opzione 1:

- Apri la cartella in VS Code
- Usa un server statico (per esempio Live Server)

Opzione 2:

- Da terminale nella root del progetto:
  - `python -m http.server 5500`
- Apri `http://localhost:5500`

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub e fai push del branch principale.
2. In GitHub vai su Settings > Pages.
3. Seleziona Source: Deploy from a branch.
4. Seleziona Branch: `main`, folder: `/ (root)`.
5. Salva e attendi il deploy.

## PDF da aggiungere

Metti in `downloads/` i file finali con questi nomi:

- `Scheda-Tecnica-Beeogrip.pdf`
- `Scheda-di-Sicurezza-Beeogrip.pdf`

I link sono gia collegati in pagina.

## Prossimo step migrazione sito reale

- Definire brand kit (logo definitivo, palette, font istituzionali)
- Collegare dominio e caselle email ufficiali
- Integrare analytics e consenso cookie, se richiesto
- Predisporre SEO avanzata (Open Graph, sitemap, robots, schema)
- Preparare versione multilingua (IT/EN) se necessaria