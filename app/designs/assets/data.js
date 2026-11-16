/* ------------------------------------------------------------------
   Inhoud die in de echte site uit het CMS (Sanity) komt.
------------------------------------------------------------------- */

/* Vacatures. Velden: titel, sector (Bouw/Vastgoed), locatie, uren, type (optioneel),
   salaris (optioneel), img (Unsplash-id, optioneel), url (optioneel), uitgelicht + intro (optioneel),
   interim (true voor interim/zzp-opdrachten).
   De eerste is de echte vacature van de klant; de rest zijn placeholders. */
const VACATURES = [
  { titel: 'Senior Projectmanager Bedrijfsmatig Vastgoed', sector: 'Vastgoed', locatie: 'Regio Eindhoven', uren: 'Fulltime', salaris: '€ 7.500 – € 9.500', opdrachtgever: 'Next Level Development', img: 'photo-1586528116311-ad8dd3c8310d', url: 'vacature.html', uitgelicht: true,
    intro: 'Ben jij een ervaren projectmanager met een sterke bouwtechnische achtergrond en krijg je energie van het realiseren van grootschalige logistieke en bedrijfsmatige vastgoedprojecten?' },
  { titel: 'Projectmanager Vastgoed', sector: 'Vastgoed', locatie: 'Randstad', uren: '36–40 uur', type: 'Vast dienstverband', salaris: '€ 5.500 – € 7.000', img: 'photo-1545324418-cc1a3fa10c00' },
  { titel: 'Tendermanager Bouw', sector: 'Bouw', locatie: 'Utrecht', uren: '40 uur', type: 'Vast dienstverband', salaris: '€ 5.000 – € 6.500' },
  { titel: 'Werkvoorbereider Utiliteitsbouw', sector: 'Bouw', locatie: 'Eindhoven', uren: '40 uur', type: 'Vast dienstverband', img: 'photo-1621905251189-08b45d6a269e' },
  { titel: 'Projectontwikkelaar', sector: 'Vastgoed', locatie: 'Amsterdam', uren: '36–40 uur', type: 'Vast dienstverband', salaris: '€ 6.000 – € 8.000' },
  { titel: 'BIM Coördinator', sector: 'Bouw', locatie: 'Rotterdam', uren: '32–40 uur', type: 'Vast dienstverband' },
  { titel: 'Assetmanager Wonen', sector: 'Vastgoed', locatie: 'Utrecht', uren: '36 uur', type: 'Vast dienstverband', salaris: '€ 5.200 – € 6.800', img: 'photo-1600585154340-be6161a56a0c' },
  { titel: 'Hoofduitvoerder Woningbouw', sector: 'Bouw', locatie: 'Amersfoort', uren: '40 uur', type: 'Vast dienstverband', salaris: '€ 4.800 – € 6.200', img: 'photo-1504917595217-d4dc5ebe6122' },
  { titel: 'Calculator B&U', sector: 'Bouw', locatie: 'Zwolle', uren: '40 uur', type: 'Vast dienstverband', salaris: '€ 4.200 – € 5.600' },
  { titel: 'Uitvoerder Renovatie', sector: 'Bouw', locatie: 'Amsterdam', uren: '40 uur', type: 'Vast dienstverband', salaris: '€ 4.000 – € 5.200' },
  { titel: 'Projectmanager Bouw', sector: 'Bouw', locatie: 'Den Haag', uren: '40 uur', type: 'Vast dienstverband' },
  { titel: 'Planner Bouwprojecten', sector: 'Bouw', locatie: 'Breda', uren: '32–40 uur', type: 'Vast dienstverband' },
  { titel: 'Interim Projectleider Nieuwbouw', sector: 'Bouw', locatie: 'Utrecht', uren: '36–40 uur', type: '6 maanden', interim: true, img: 'photo-1429497419816-9ca5cfb4571a' },
  { titel: 'Interim Assetmanager Wonen', sector: 'Vastgoed', locatie: 'Amsterdam', uren: '24–32 uur', type: '4 maanden', interim: true },
  { titel: 'Interim Werkvoorbereider Utiliteitsbouw', sector: 'Bouw', locatie: 'Eindhoven', uren: '40 uur', type: '3 maanden', interim: true }
];

/* Referenties opdrachtgevers.
   LET OP: placeholder-teksten, vervangen door echte referenties vóór livegang.
   Velden: quote, naam, functie, bedrijf, sector. */
const REFERENTIES = [
  { quote: 'Binnen drie weken zaten er twee sterke kandidaten aan tafel voor onze vacature hoofduitvoerder. Heupers kent de markt en weet wat er op de bouwplaats speelt.', naam: 'Marieke Jansen', functie: 'HR-manager', bedrijf: 'Bouwbedrijf Van der Linden', sector: 'Bouw' },
  { quote: 'Geen stapel cv’s, maar een shortlist van drie. Alle drie waren raak. Onze nieuwe assetmanager zit hier inmiddels anderhalf jaar en is niet meer weg te denken.', naam: 'Jeroen Bakker', functie: 'Directeur', bedrijf: 'Stadsas Vastgoed', sector: 'Vastgoed' },
  { quote: 'Ze nemen echt de tijd om je organisatie te begrijpen. Dat merk je aan de kandidaten: ze passen niet alleen op papier, maar ook in het team.', naam: 'Sandra Mulder', functie: 'Manager Bedrijfsvoering', bedrijf: 'Bouwcombinatie Rivierenland', sector: 'Bouw' },
  { quote: 'We hadden op korte termijn een interim projectmanager nodig voor een renovatieproject. Binnen een week stond er iemand op de bouw die direct kon meedraaien.', naam: 'Erik de Groot', functie: 'Projectdirecteur', bedrijf: 'De Groot Renovatie', sector: 'Bouw' },
  { quote: 'Eerlijk advies, ook als dat betekende dat we ons functieprofiel moesten bijstellen. Die openheid heeft ons uiteindelijk de juiste ontwikkelaar opgeleverd.', naam: 'Anouk Visser', functie: 'Hoofd HR', bedrijf: 'Woonstede Ontwikkeling', sector: 'Vastgoed' },
  { quote: 'Al vijf jaar onze vaste partner voor lastig te vervullen functies. Snel, persoonlijk en altijd bereikbaar, ook als het een keer tegenzit.', naam: 'Mark Smit', functie: 'Algemeen directeur', bedrijf: 'Smit Bouw & Onderhoud', sector: 'Bouw' }
];

/* Team. Namen en nummers uit de klantdocumenten; rollen en foto's zijn placeholders. */
const TEAM = [
  { naam: 'Jens Heupers', rol: 'Werving & selectie · Bouw en vastgoed', tel: '06 3989 0060', mail: 'info@heupers.nl', img: 'photo-1560250097-0b93528c311a' },
  { naam: 'Marc Heupers', rol: 'Werving & selectie · Management en directie', tel: '06 5477 7862', mail: 'info@heupers.nl', img: 'photo-1472099645785-5658abf4ff4e' }
];
