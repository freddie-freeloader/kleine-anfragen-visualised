# [kleineAnfragen](https://kleineanfragen.de/) visualisiert

Visualisierung kleiner und großer Anfragen aus dem Bundestag und aus den Landesparlamenten (Daten von [kleineAnfragen.de](https://kleineanfragen.de/))

Link: https://sophiamersmann.github.io/kleine-anfragen-visualised/

## Daten: Quelle und Aufbereitung

Diese Visualisierung basiert auf Daten von [kleineAnfragen.de](https://kleineanfragen.de/) (Stand: 1.1.2021).
Die heruntergeladenen Daten wurden in zwei Schritten bearbeitet:
- Mit Hilfe von [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) wurden alternative Schreibweisen des Namens einer:eines Abgeordneten vereinheitlicht, indem jede:r Abgeordnete dem entsprechenden Eintrag auf [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) zugeordnet wurde. Diese Zuordnung erfolgte teils automatisch, teils manuell und ist damit fehleranfällig.
- Die Ministerien, an die sich Anfragen richten, wurden ebenfalls in ihrer Schreibweise vereinheitlicht. Gegebenenfalls wurden Abkürzungen für Ministerien ausformuliert.

Anmerkungen zu den Grafiken:
- **Parlamentsgrafik:** Für jede:n Abgeordnete:n wurde ermittelt an wie vielen Anfragen diese:r beteiligt war. Anfragen, an denen mehrere Personen beteiligt waren, wurden also mehrfach gezählt. Nicht in der Grafik aufgeführt sind Anfragen, die keiner Person zugeordnet sind. Oft handelt es sich dabei um große Anfragen, die typischerweise von der gesamten Fraktion gestellt werden. Wenn ein:e Abgeordenete:r für eine:n andere:n nachgerückt ist, werden trotzdem beide getrennt voneinander aufgeführt. Dadurch ist es ist möglich, dass die Anzahl der dargestellten Sitze von der Größe der Fraktion leicht abweicht.
- **Ringgrafik:** Dargestellt sind Anfragen, die während der Legislaturperiode veröffentlicht wurden. Wenn die Legislaturperiode noch nicht beendet ist, dann ist Dezember 2020 der letzte dargestellte Monat. Anfragen, die außerhalb dieser Zeitperiode veröffentlicht wurden, sind nicht aufgeführt. Ebenso sind Anfragen, die keiner Partei und keiner:keinem Abgeordneten zugeordnet sind, nicht aufgeführt. Anfragen, die von mehreren Parteien gestellt wurden, sind auch mehrmals abgebildet (und miteinander verlinkt).

## Code

Dieser Code nutzt die Funktion `forceClusterCollision`, eine Adaption von `d3.forceCollide`, geschrieben von Nadieh Bremer und veröffentlicht auf [Observable](https://observablehq.com/@nbremer/custom-cluster-force-layout).

Die Berechnung der Positionen der Parlamentssitze beruht auf Code gefunden auf [Observable](https://observablehq.com/@yu-emilie/european-parliament-elections-of-2014/2).

Die Farben des Parteienspektrums sind inspiriert von dem politischen Farbschema der [Berliner Morgenpost](https://interaktiv.morgenpost.de/bundestagswahl-2021-umfragen-ergebnisse-wahlkarte/). Die Grautöne basieren auf einer Farbskala von [tailwindcss](https://tailwindcss.com/docs/customizing-colors).

## Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
