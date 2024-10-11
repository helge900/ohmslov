//Get All Quotes
const quotes = [
    { 
        quote:
             "Hva er forskjellen mellom en lov, en forskrift og en standard?",
        author: "En lov er vedtatt av Stortinget, en forskrift er vedtatt av regjeringen, og en standard er utformet av bransjen."
    },
    {
        quote:
            "Hva står FEL for?",
        author: "Forskrift for elektriske lavspenningsanlegg"
    },
    {
        quote:
            "Hva står i FEL§16?",
        author: "Elektriske anlegg skal planlegges og utføres slik at mennesker, husdyr og eiendom er beskyttet mot fare og skader ved normal bruk og slik at anlegget blir egnet til den forutsatte bruk."
    },
    {
        quote: "Hvor mange deler er NEK400 delt inn i?",
        author: "8"
    },
    {
        quote:
            "Hvilken del i NEK400 omhandler sluttkontroll og verifikasjon? ",
        author: "Del 6"
    },
    {
        quote:
            "Hva står forkortelsen FSE for?",
        author: "Forskrift om sikkerhet ved arbeid i og drift av elektriske anlegg"
    },
    {
        quote:
            "I hvilken paragraf i FSE kan man lese om arbeid på frakoblet anlegg?",
        author: "Paragraf 14"
    },
    {
        quote:
            "Hva sier FSE §14 at du må gjøre før du begynner å jobbe på et frakoblet anlegg?",
        author: "Koble fra, sikre mot innkobling og måle."
    },
    {
        quote:
            "I Norge brukes 3 ulike nettsystem, hva er navnet på disse?",
        author: "IT, TN og TT"
    } , {
        quote:
            "Hva står bokstavene IT for?",
        author: "Isolert og Terra"
    }, {
        quote:
            "Hva står bokstavene TN for?",
        author: "Terra og Nøytral"
    }, {
        quote:
            "Hvilken spenning måles mellom fase og fase i TN-nett?",
        author: "400V"
    }, {
        quote:
            "Hvilken spenning måles mellom fase og jord i IT-nett?",
        author: "133V"
    }, {
        quote:
            "Hvilken spenning måles mellom fase og null i TN-nett?",
        author: "230V"
    }, {
        quote:
            "Hvilken spenning måles mellom null og jord i TN-nett?",
        author: "0V"
    }, {
        quote:
            "I hvilket nettsystem kan man oppnå lavest berøringsspenning ved jordfeil?",
        author: "It-nett"
    }, {
        quote:
            "Hva skjer ved en jordfeil i TN-nett?",
        author: "Kortslutning, vernet løser ut"
    }, {
        quote:
            "Hva er fordelene med å bytte fra IT-nett til TN-nett?",
        author: "Bl.a. høyere effekt på samme tversnitt, mer brannsikkert, mindre stående jordfeiler, både 400V og 230V tilgjengelig."
    }, {
        quote:
            "Hvor skal PEN-leder splittes?",
        author: "I første fordeling, som regel i TKS."
    }, {
        quote:
            "Hva er hensikten med jording?",
        author: "Forsikre samme potensiale i ledende deler, skape vei for feilstrøm utenom mennesker og dyr, og avlede overspenninger."
    }, {
        quote:
            "Hva er en jordelektrode?",
        author: "En jordingsleder som skaper kontakt med jorden og jordingsanlegget."
    }, {
        quote:
            "Hva skal jordes via utjevningsforbindelser?",
        author: "Annen ledende deler, primært metalliske rør inn og ut av bygget og ledende deler av bygningskonstruksjonen."
    }, {
        quote:
            "Hva er en utsatt ledende del?",
        author: "Del av metall til utstyr som er en del av det elektriske anlegget, men som normalt ikke er spenningssatt. For eksempel dekselet på en panelovn."
    }, {
        quote:
            "Hvilken standard gjelder for tilknytning av elektriske lavspenningsanlegg?",
        author: "NEK 399"
    }, {
        quote:
            "Hvilken metode for tilknytning gjelder som oftest for boliger?",
        author: "Metode A"
    }, {
        quote:
            "Hvor mange ampere angir den øvre grensen for tilknytning metode A?",
        author: "80-125A"
    }, {
        quote:
            "Hvor mange felter skal et tilknytningsskap minimum ha? Og hva hører til i disse feltene?",
        author: "Minimum tre felt; felt for måler, elkraft og ekom."
    }, {
        quote:
            "Hvordan skal målersløyfen merkes?",
        author: "Nett og anlegg"
    }, {
        quote:
            "Hvilke vern skal plasseres i feltet for elkraft?",
        author: "Kortslutningsvern og overspenningsvern"
    }, {
        quote:
            "Skal tilknytningsskap bygget etter metode A være utformet for ussakkyndig betjening?",
        author: "Ja"
    }, {
        quote:
            "I forbindelse med overspenningsvern; hva menes med tennspenning?",
        author: "Det er spenningsnivået som gjør at overspenningsvernet åpner forbindelse til jord."
    }, {
        quote:
            "Hva er kravet til minimum tennspenning på overspenningsvern i IT-nett?",
        author: "350V"
    }, {
        quote:
            "Hva er kravet til overspenningsvernets tennspenning i TN-nett?",
        author: "1,1 * 230V"
    }, {
        quote:
            "Når man kobler overspenningsvern, er det viktig med lange eller korte ledere?",
        author: "Korte ledere og minst mulig svinger"
    }, {
        quote:
            "Hva angir en automatsikrings I2-verdi?",
        author: "Det angir øvre prøvestrøm, altså hvor mye strøm som kan gå før vernet garantert har koblet ut innen en time."
    }, {
        quote:
            "Hva angir en automatsikrings I5-verdi?",
        author: "Det angir strømverdi som garanterer momentan utkobling."
    }, {
        quote:
            "Enkelt forklart; Hvordan virker en jordfeilbryter?",
        author: "Den måler at den får samme strøm tilbake som den slipper gjennom. Ved avvik tyder det på jordfeil, og vernet løser ut."
    }, {
         quote:
            "Hva er kravet til utløserstrøm for jordfeilvern installert i bolig?",
        author: "30mA"
    }, {
        quote:
            "Hva er et “Type-B” jordfeilvern?",
        author: "Det er et jordfeilvern som kan detektere DC jordfeilstrømmer i tillegg til AC jordfeilstrømmer"
    }, {
        quote:
            "Er det krav til bruk av jordfeilvern i boliger?",
        author: "Ja, så lenge man benytter automatisk utkobling som beskyttelsesmetode"
    }, {
        quote:
            "Hvilken tabell i NEK400 handler om installasjonsmetoder?",
        author: "Tabell 52A"
    }, {
        quote:
            "I hvilken tabell i NEK400 finner du ulike kablers strømføringsevner?",
        author: "Tabell 52B"
    }, {
        quote:
            "Er en PR-kabel en dobbelisolert kabel?",
        author: "Nei"
    }, {
        quote:
            "Hvilken ref.inst.metode er kabel klamret på vegg?",
        author: "C"
    }, {
        quote:
            "Hvilken ref.inst.metode er PN trukket i rør i isolert vegg?",
        author: "A1"
    }, {
        quote:
            "Hva er strømføringsevnen til en PFXP 3g1,5 klamret på vegg?",
        author: "19,5A"
    }, {
        quote:
            " Hva er strømføringsevnen til PN i rør 3g2,5 i isolert vegg?",
        author: "19,5A"
    }, {
        quote:
            "Hvilken tabell i NEK400 angir klassifiseringer for omgivelser/ytre påvirkninger?",
        author: "Tabell 51A"
    }, {
        quote:
            "Hva angir det første tallet i IP klassifisering?",
        author: "Tetthet mot faste legemer/partikler."
    }, {
        quote:
            "Hva angir det andre tallet i IP klassifisering?",
        author: "Tetthet mot vann"
    }, {
        quote:
            "Hva er i normale tilfeller kravet til minimum IP-grad?",
        author: "IP2X"
    }, {
        quote:
            "Hva er navnet på den mest brukte beskyttelsesmetoden mot elektrisk sjokk?",
        author: "Automatisk utkobling (NEK400.411)"
    }, {
        quote:
            "Er man absolutt nødt til å alltid bruke jordfeilbryter?",
        author: "Nei"
    }, {
        quote:
            "Hvorfor skal som regel målersløyfen i IT-nett dobbelisoleres?",
        author: "Den skal dobbelisoleres fordi den skal være beskyttet mot elektrisk sjokk ved feil. I mangel på jf-vern i foranliggende nett kan man løse dette med dobbelisolerte kabler."
    }, {
        quote:
            "Hva er det generelle kravet til beskyttelse mot overbelastning?",
        author: "Ib≤In≤Iz og I2≤1,45*Iz"
    }, {
        quote:
            "Hva er I5-verdien på en C-automat?",
        author: "10*In"
    }, {
        quote:
            "Hva er I5-verdien på en B-automat?",
        author: "5*In"
    }, {
        quote:
            "Er PFXP en dobbelisolert kabel?",
        author: "Ja"
    }, {
        quote:
            "Hva er kravet til beskyttelse mot overbelastning i bolig?",
        author: "Ib≤In og I2≤Iz"
    }, {
        quote:
            "Hva er I2-verdien til en 16A/C jordfeilautomat?",
        author: "1.45*16=23,2A"
    }, {
        quote:
            "Hva er I2-verdien til en 13A/B jordfeilautomat?",
        author: "1,45*13=18,85A"
    }, {
        quote:
            "Hva er I2-verdien på en Eaton 15A/C OL (boligautomat) jordfeilautomat?",
        author: "1,3*15=19,5A"
    }, {
        quote:
            "Hva er kravet til vernets bryteevne?",
        author: "Vernets bryteevne skal være større eller lik største kortslutningsstrøm"
    }, {
        quote:
            "Hvilken tabell i montørhåndboka kan brukes for å finne maks lengde som garanterer momentan utkobling av vernet?",
        author: "Tabell side 165-166"
    }, {
        quote:
            "På hvilket punkt i installasjonen gjelder everkets oppgitte kortslutningsverdier?",
        author: "På tampen av stikkledningen"
    }, {
        quote:
            "I hvilken tabell i montørhåndboka kan du finne jordelektrodens omtrentlige overgangsmotstand til jord?",
        author: "Tabell side 53"
    }, {
        quote:
            "Hvilken tabell i NEK400 angir anbefalte verdier for spenningsfall??",
        author: "Tabell 52F"
    }, {
        quote:
            "Hva er anbefalt maksimalt spenningsfall i prosent for en forbrukerkurs?",
        author: "5%"
    }, {
        quote:
            "Hva er anbefalt maksimalt spenningsfall i prosent for en belysningskurs?",
        author: "3%"
    }, {
        quote:
            "Hvilke spesielle krav gjelder for stikkontakt for platetopp i en bolig?",
        author: "Komfyrvakt"
    }, {
        quote:
            "Hvilke krav gjelder for tilkobling av varmtvannsberedere i bolig?",
        author: "Fast tilkoblet eller via rundstift plugg og kontakt"
    }, {
        quote:
            "Hvilken tabell i montørhåndboka kan du finne jordelektrodens omtrentlige overgangsmotstand til jord?",
        author: "Tabell side 53"
    }, {
        quote:
            "Regnes området rundt vask på bad som våtsone av NEK400?",
        author: "Nei"
    },  {
        quote:
            "Stilles det strengest krav til sone 0 eller sone 2 på bad?",
        author: "Sone 0 er strengest"
    },  {
        quote:
            "Er det lov å montere stikkontakter i dysjen?",
        author: "Nei"
    },  {
        quote:
            "Hvilket kapittel i NEK400 handler om områder med dysj?",
        author: "NEK400.701"
    },  {
        quote:
            "Hvilket kapittel i NEK400 handler om boliginstallasjoner?",
        author: "NEK400.823"
    },  {
        quote:
            "Hvilket kapittel i NEK400 handler om lading av elbil?",
        author: "NEK400.722"
    },  {
        quote:
            "Hva er kravet til IP-grad til elbilladere?",
        author: "IP54"
    },  {
        quote:
            "Hva kan du finne i NEK400 del 6?",
        author: "Krav til sluttkontroll/verifikasjon"
    },  {
        quote:
            "Hvilken måling skal utføres først: kontinuitetsmåling eller isolasjonsmåling?",
        author: "Kontinuitetsmåling først"
    },  {
        quote:
            "Hva måler du når du foretar en kontinuitetsmåling?",
        author: "Man måler om beskyttelseslederen er hel i hele sin lengde"
    },  {
        quote:
            "Hva måler du når du foretar en isolasjonsmåling?",
        author: "Man måler om det er lekkasje fra faseledere til jord"
    },  {
        quote:
            "Hva er kravet til kontinuitetsmåling?",
        author: "Kravet er at det skal være samsvar mellom målt verdi, og lederens lengde og tversnitt."
    },  {
        quote:
            "Hva er kravet til isolasjonsmåling?",
        author: "Mer enn 1MΩ"
    },  {
        quote:
            "Hva er en samsvarserklæring?",
        author: "Det er en garanti om at det elektriske anlegget er bygget i henhold til gjeldende regelverk"
    },  {
        quote:
            "Hva består 'de fem sikre' av?",
        author: "Rapport fra risikovurdering, rapport fra sluttkontroll, samsvarserklæring, kursfortegnelse og utstyrsdokumentasjon (FDV og bruksanvisninger)"
    },  {
        quote:
            "Hva er 'de fem sikre'?",
        author: "Det er et sett med standarisert dokumentasjon som skal tilfredstille gjeldende krav."
    },  {
        quote:
            "Er det lov å bruke Plejd på fagprøven?",
        author: "Tja.."
    }, 
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;

    document.querySelector('.author').innerText = quotes[random].author;

});

