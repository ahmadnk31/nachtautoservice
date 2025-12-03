export type Language = "nl" | "en" | "fr";

export const translations = {
  nl: {
    // Header
    location: "Gent, België",
    brandName: "Nachtautoservice Gent",
    brandNameShort: "Nachtautoservice",
    nav: {
      diensten: "Diensten",
      werkwijze: "Werkwijze",
      regio: "Regio Gent",
      faq: "FAQ",
      contact: "Contact",
      bekijkDiensten: "Bekijk diensten",
      belNu: "Bel nu",
    },
    // Hero
    hero: {
      badge: "Nachtelijke pechhulp en herstellingen in en rond Gent",
      badgeMobile: "Pechhulp en herstellingen in Gent",
      title: "Nachtautoservice in Gent voor autopech als de stad slaapt.",
      description:
        "Gestrand na je late shift, avondje uit of nachtwerk? Ik kom ter plaatse in Gent en omgeving om je snel en veilig weer op weg te helpen, precies wanneer de meeste garages gesloten zijn.",
      callToAction: "Bel direct voor dringende hulp",
      formCta: "Offerte of vraag via formulier",
      features: {
        hours: "Nachturen",
        hoursDesc: "Elke dag van 18u tot 7u beschikbaar, ook in het weekend.",
        region: "Regio Gent",
        regionDesc: "Stad Gent en nabije gemeenten zoals Destelbergen en Merelbeke.",
        experience: "Ervaren technieker",
        experienceDesc: "Jarenlange ervaring met diagnose, elektriciteit en mechaniek.",
      },
      imageAlt: "Nachtautoservice die 's nachts een auto herstelt in een Gentse werkplaats",
      nightShift: "Nachtshift",
      nightShiftDesc: "Voor dringende hulp langs de weg of op je oprit in Gent.",
      quickIntervention: "Snelle interventie",
    },
    // Services
    services: {
      badge: "Diensten",
      title: "Wat ik 's nachts voor je wagen kan doen.",
      description:
        "Geen wachtrijen, geen file voor de garagepoort. Als zelfstandige nachtautoservice kom ik ter plaatse om je wagen weer rij-klaar te maken, zodat jij veilig thuis geraakt.",
      items: {
        diagnosis: {
          title: "Snelle diagnose ter plaatse",
          description:
            "Uitlezen van foutcodes, controle van batterij, lichten en ontsteking om snel te weten wat er mis is.",
        },
        breakdown: {
          title: "Pechhulp en noodreparaties",
          description:
            "Hulp bij platte batterij, kleine lekken, vastgelopen sloten, kapotte lampen en andere dringende problemen.",
        },
        preparation: {
          title: "Voorbereiding voor de volgende werkdag",
          description:
            "Ideaal voor nachtwerkers en zelfstandigen: je wagen wordt 's nachts gefikst zodat je overdag weer zorgeloos kan vertrekken.",
        },
        maintenance: {
          title: "Onderhoud buiten de kantooruren",
          description:
            "Kleine onderhoudswerken en controles kunnen op je oprit of parking gebeuren wanneer jij thuis bent en niet met de wagen moet rijden.",
        },
        onLocation: {
          title: "Herstellingen op locatie",
          description:
            "Thuis, op het werk of ergens langs de weg in Gent en directe omgeving: ik kom naar jouw locatie.",
        },
        unsure: {
          title: "Twijfel je of ik kan helpen?",
          description:
            "Bel kort je situatie door en ik zeg meteen wat mogelijk is en welke kosten je ongeveer mag verwachten.",
          button: "Bel vrijblijvend",
        },
      },
    },
    // Process
    process: {
      badge: "Werkwijze",
      title: "Zo verloopt een nachtinterventie in Gent.",
      description:
        "Geen callcenter of wachtruimte: je spreekt meteen met de technieker die ook effectief langskomt. Een transparant proces zodat je op elk moment weet waar je aan toe bent.",
      steps: {
        step1: {
          title: "Je belt of vult het formulier in",
          description:
            "Leg kort uit wat er gebeurd is, waar je staat en met welk type wagen je rijdt. Op basis daarvan krijg je een inschatting van de mogelijke oplossing.",
        },
        step2: {
          title: "Ik kom ter plaatse in Gent en omgeving",
          description:
            "Binnen de mate van het mogelijke ben ik snel ter plaatse. Ik voer een diagnose uit en bespreek meteen de opties en richtprijs met jou.",
        },
        step3: {
          title: "Noodreparatie of oplossing tot aan de garage",
          description:
            "Waar mogelijk wordt de wagen ter plekke hersteld. Als dat niet kan, zorg ik voor een tijdelijke oplossing zodat je veilig thuis of tot bij je vaste garage geraakt.",
        },
      },
      ideal: {
        title: "Ideaal voor nachtwerkers, horeca en zelfstandigen.",
        description:
          "Werken jouw uren niet samen met de openingsuren van klassieke garages? Dan is een gespecialiseerde nachtautoservice in Gent een groot voordeel.",
        benefits: [
          "Geen vrije dag moeten nemen voor een garagebezoek.",
          "Herstellingen wanneer je wagen toch stilstaat.",
          "Transparante communicatie rechtstreeks met de technieker.",
          "Flexibel af te spreken op jouw locatie in Gent.",
        ],
      },
    },
    // Region
    region: {
      badge: "Regio Gent",
      title: "Nachtelijke interventies in Gent en randgemeenten.",
      description:
        "Ik vertrek vanuit Gent en richt mij vooral op de stad en directe omgeving zodat ik snel kan schakelen bij dringende oproepen.",
      situations: {
        title: "Typische situaties waarin ik help",
        description:
          "Een nachtautoservice is ideaal wanneer je onverwachts vastzit en niet tot morgen kan wachten.",
        items: [
          "Na de late shift rijdt je wagen niet meer aan je werkplek.",
          "Na een avondje Gent kom je terug op een auto die niet meer start.",
          "Je bedrijfswagen moet tegen de ochtend opnieuw inzetbaar zijn.",
          "Je voelt je onveilig langs de weg en wil zo snel mogelijk geholpen worden.",
        ],
        note: "Opgelet: ik bied geen takeldienst aan. Wanneer slepen nodig is, verwijs ik door naar een erkende partner.",
      },
    },
    // FAQ
    faq: {
      badge: "Veelgestelde vragen",
      title: "Veelgestelde vragen over nachtelijke herstellingen.",
      description:
        "Heb je nog vragen of twijfel je of ik met jouw probleem kan helpen? Hieronder vind je antwoorden op de meest gestelde vragen.",
      items: {
        pricing: {
          question: "Hoe worden de tarieven berekend?",
          answer:
            "Ik werk met een nachttoeslag en een duidelijke basisprijs per interventie, aangevuld met eventuele onderdelen. Tijdens het telefoongesprek geef ik altijd een transparante indicatie zodat je niet voor verrassingen komt te staan.",
        },
        payment: {
          question: "Hoe kan ik betalen?",
          answer:
            "Betalen kan ter plaatse via Bancontact-app of klassieke bankoverschrijving. Contant betalen is ook mogelijk. Je ontvangt altijd een duidelijke factuur.",
        },
        response: {
          question: "Hoe snel kan je ter plaatse zijn?",
          answer:
            "Dat hangt af van waar ik mij op het moment van je oproep bevind. In de meeste gevallen ben ik binnen 30 tot 60 minuten ter plaatse in Gent en directe omgeving.",
        },
        vehicles: {
          question: "Met welke voertuigen werk je?",
          answer:
            "Ik help voornamelijk met personenwagens en lichte bestelwagens op benzine of diesel. Bij twijfel mag je altijd kort bellen om je situatie te bespreken.",
        },
      },
    },
    // Contact
    contact: {
      badge: "Contact",
      title: "Dringend hulp nodig? Bel meteen.",
      description:
        "Voor echte noodgevallen is bellen altijd de snelste manier. Gebruik het formulier vooral voor afspraken of vragen die niet tijdsgebonden zijn.",
      phone: "Telefoon",
      hours: "Nachturen",
      hoursDesc: "Elke dag tussen 18u en 7u, ook in het weekend.",
      address: "Adres",
      addressValue: "Dendermondesteenweg 428\n9040 Sint-Amandsberg",
      region: "Regio",
      regionDesc: "Gent en directe randgemeenten.",
      form: {
        title: "Stel je vraag of plan een interventie.",
        description:
          "Vul zo volledig mogelijk in, dan kan ik sneller inschatten hoe ik je het best help.",
        name: "Naam",
        namePlaceholder: "Je naam",
        email: "E-mailadres",
        emailPlaceholder: "jij@example.com",
        phone: "Telefoonnummer",
        phonePlaceholder: "Bijv. 0466 19 56 22",
        location: "Locatie in of rond Gent",
        locationPlaceholder: "Bijv. Sint-Amandsberg, parking, thuisadres...",
        message: "Wat is er precies gebeurd?",
        messagePlaceholder: "Beschrijf kort het probleem, type wagen en waar je staat.",
        note: "Dit formulier verzendt nog geen automatische aanvraag. Voor dringende hulp raden we aan om altijd te bellen.",
        submit: "Verstuur vraag",
        callInstead: "Bel in plaats daarvan",
      },
      toast: {
        title: "Bericht nog niet verzonden",
        description: "Voor de snelste hulp bel je best even naar 0466 19 56 22.",
      },
    },
    // Footer
    footer: {
      copyright: "© {year} Nachtautoservice Gent. Alle rechten voorbehouden.",
      tagline: "Werkt wanneer andere garages slapen.",
      backToTop: "Terug naar boven",
    },
  },
  en: {
    location: "Ghent, Belgium",
    brandName: "Nachtautoservice Ghent",
    brandNameShort: "Nachtautoservice",
    nav: {
      diensten: "Services",
      werkwijze: "How it works",
      regio: "Region Ghent",
      faq: "FAQ",
      contact: "Contact",
      bekijkDiensten: "View services",
      belNu: "Call now",
    },
    hero: {
      badge: "24/7 Nighttime breakdown assistance and repairs in and around Ghent",
      badgeMobile: "Breakdown assistance and repairs in Ghent",
      title: "Night auto service in Ghent for car breakdowns when the city sleeps.",
      description:
        "Stranded after your late shift, night out, or night work? I come on-site in Ghent and surrounding areas to get you back on the road quickly and safely, exactly when most garages are closed.",
      callToAction: "Call immediately for urgent help",
      formCta: "Quote or question via form",
      features: {
        hours: "Night hours",
        hoursDesc: "Available every day from 6 PM to 7 AM, including weekends.",
        region: "Region Ghent",
        regionDesc: "City of Ghent and nearby municipalities such as Destelbergen and Merelbeke.",
        experience: "Experienced technician",
        experienceDesc: "Years of experience with diagnostics, electrical, and mechanical work.",
      },
      imageAlt: "Night auto service repairing a car at night in a Ghent workshop",
      nightShift: "Night shift",
      nightShiftDesc: "For urgent help on the road or on your driveway in Ghent.",
      quickIntervention: "Quick intervention",
    },
    services: {
      badge: "Services",
      title: "What I can do for your car at night.",
      description:
        "No queues, no traffic jam at the garage gate. As an independent night auto service, I come on-site to get your car road-ready again, so you can get home safely.",
      items: {
        diagnosis: {
          title: "Quick on-site diagnosis",
          description:
            "Reading error codes, checking battery, lights, and ignition to quickly know what's wrong.",
        },
        breakdown: {
          title: "Breakdown assistance and emergency repairs",
          description:
            "Help with flat battery, small leaks, stuck locks, broken lights, and other urgent problems.",
        },
        preparation: {
          title: "Preparation for the next workday",
          description:
            "Ideal for night workers and self-employed: your car gets fixed at night so you can leave carefree during the day again.",
        },
        maintenance: {
          title: "Maintenance outside office hours",
          description:
            "Small maintenance work and checks can be done on your driveway or parking when you're home and don't need to drive.",
        },
        onLocation: {
          title: "Repairs on location",
          description:
            "At home, at work, or somewhere along the road in Ghent and immediate area: I come to your location.",
        },
        unsure: {
          title: "Not sure if I can help?",
          description:
            "Call briefly to explain your situation and I'll immediately tell you what's possible and what costs you can roughly expect.",
          button: "Call without obligation",
        },
      },
    },
    process: {
      badge: "How it works",
      title: "How a night intervention in Ghent works.",
      description:
        "No call center or waiting room: you speak directly with the technician who actually comes. A transparent process so you always know where you stand.",
      steps: {
        step1: {
          title: "You call or fill in the form",
          description:
            "Briefly explain what happened, where you are, and what type of car you drive. Based on that, you'll get an estimate of the possible solution.",
        },
        step2: {
          title: "I come on-site in Ghent and surrounding area",
          description:
            "Within the realm of possibility, I'm quickly on-site. I perform a diagnosis and immediately discuss the options and indicative price with you.",
        },
        step3: {
          title: "Emergency repair or solution to the garage",
          description:
            "Where possible, the car is repaired on the spot. If that's not possible, I provide a temporary solution so you can safely get home or to your regular garage.",
        },
      },
      ideal: {
        title: "Ideal for night workers, hospitality, and self-employed.",
        description:
          "Don't your hours align with the opening hours of traditional garages? Then a specialized night auto service in Ghent is a big advantage.",
        benefits: [
          "No need to take a day off for a garage visit.",
          "Repairs when your car is standing still anyway.",
          "Transparent communication directly with the technician.",
          "Flexible scheduling at your location in Ghent.",
        ],
      },
    },
    region: {
      badge: "Region Ghent",
      title: "Night interventions in Ghent and surrounding municipalities.",
      description:
        "I start from Ghent and focus mainly on the city and immediate surroundings so I can respond quickly to urgent calls.",
      situations: {
        title: "Typical situations where I help",
        description:
          "A night auto service is ideal when you're unexpectedly stuck and can't wait until tomorrow.",
        items: [
          "After your late shift, your car won't start at your workplace.",
          "After a night out in Ghent, you return to a car that won't start.",
          "Your company car needs to be operational again by morning.",
          "You feel unsafe on the road and want help as quickly as possible.",
        ],
        note: "Note: I don't offer towing service. When towing is needed, I refer to a recognized partner.",
      },
    },
    faq: {
      badge: "Frequently asked questions",
      title: "Frequently asked questions about night repairs.",
      description:
        "Do you have more questions or are you unsure if I can help with your problem? Below you'll find answers to the most frequently asked questions.",
      items: {
        pricing: {
          question: "How are rates calculated?",
          answer:
            "I work with a night surcharge and a clear base price per intervention, supplemented with any parts. During the phone call, I always give a transparent indication so you won't be surprised.",
        },
        payment: {
          question: "How can I pay?",
          answer:
            "Payment can be made on-site via Bancontact app or traditional bank transfer. Cash payment is also possible. You always receive a clear invoice.",
        },
        response: {
          question: "How quickly can you be on-site?",
          answer:
            "That depends on where I am at the time of your call. In most cases, I'm on-site within 30 to 60 minutes in Ghent and immediate area.",
        },
        vehicles: {
          question: "What vehicles do you work with?",
          answer:
            "I mainly help with passenger cars and light commercial vehicles on petrol or diesel. If in doubt, you can always call briefly to discuss your situation.",
        },
      },
    },
    contact: {
      badge: "Contact",
      title: "Urgent help needed? Call immediately.",
      description:
        "For real emergencies, calling is always the fastest way. Use the form mainly for appointments or questions that aren't time-sensitive.",
      phone: "Phone",
      hours: "Night hours",
      hoursDesc: "Every day between 6 PM and 7 AM, including weekends.",
      address: "Address",
      addressValue: "Dendermondesteenweg 428\n9040 Sint-Amandsberg",
      region: "Region",
      regionDesc: "Ghent and immediate surrounding municipalities.",
      form: {
        title: "Ask your question or schedule an intervention.",
        description:
          "Fill in as completely as possible, then I can better estimate how to best help you.",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email address",
        emailPlaceholder: "you@example.com",
        phone: "Phone number",
        phonePlaceholder: "E.g. 0466 19 56 22",
        location: "Location in or around Ghent",
        locationPlaceholder: "E.g. Sint-Amandsberg, parking, home address...",
        message: "What exactly happened?",
        messagePlaceholder: "Briefly describe the problem, car type, and where you are.",
        note: "This form doesn't send an automatic request yet. For urgent help, we recommend always calling.",
        submit: "Send question",
        callInstead: "Call instead",
      },
      toast: {
        title: "Message not yet sent",
        description: "For the fastest help, please call 0466 19 56 22.",
      },
    },
    footer: {
      copyright: "© {year} Nachtautoservice Ghent. All rights reserved.",
      tagline: "Works when other garages sleep.",
      backToTop: "Back to top",
    },
  },
  fr: {
    location: "Gand, Belgique",
    brandName: "Nachtautoservice Gand",
    brandNameShort: "Nachtautoservice",
    nav: {
      diensten: "Services",
      werkwijze: "Comment ça marche",
      regio: "Région Gand",
      faq: "FAQ",
      contact: "Contact",
      bekijkDiensten: "Voir les services",
      belNu: "Appeler maintenant",
    },
    hero: {
      badge: "Assistance panne et réparations nocturnes 24/7 à Gand et environs",
      badgeMobile: "Assistance panne et réparations à Gand",
      title: "Service auto de nuit à Gand pour les pannes quand la ville dort.",
      description:
        "En panne après votre shift tardif, soirée ou travail de nuit ? Je me déplace sur place à Gand et environs pour vous remettre rapidement et en sécurité sur la route, exactement quand la plupart des garages sont fermés.",
      callToAction: "Appelez immédiatement pour une aide urgente",
      formCta: "Devis ou question via formulaire",
      features: {
        hours: "Heures de nuit",
        hoursDesc: "Disponible tous les jours de 18h à 7h, y compris le week-end.",
        region: "Région Gand",
        regionDesc: "Ville de Gand et communes proches comme Destelbergen et Merelbeke.",
        experience: "Technicien expérimenté",
        experienceDesc: "Années d'expérience en diagnostic, électricité et mécanique.",
      },
      imageAlt: "Service auto de nuit réparant une voiture la nuit dans un atelier gantois",
      nightShift: "Shift de nuit",
      nightShiftDesc: "Pour une aide urgente sur la route ou sur votre allée à Gand.",
      quickIntervention: "Intervention rapide",
    },
    services: {
      badge: "Services",
      title: "Ce que je peux faire pour votre voiture la nuit.",
      description:
        "Pas de files d'attente, pas d'embouteillage devant le garage. En tant que service auto de nuit indépendant, je me déplace sur place pour remettre votre voiture en état de rouler, afin que vous puissiez rentrer en sécurité.",
      items: {
        diagnosis: {
          title: "Diagnostic rapide sur place",
          description:
            "Lecture des codes d'erreur, contrôle de la batterie, des lumières et de l'allumage pour savoir rapidement ce qui ne va pas.",
        },
        breakdown: {
          title: "Assistance panne et réparations d'urgence",
          description:
            "Aide pour batterie à plat, petites fuites, serrures bloquées, phares cassés et autres problèmes urgents.",
        },
        preparation: {
          title: "Préparation pour le jour de travail suivant",
          description:
            "Idéal pour les travailleurs de nuit et indépendants : votre voiture est réparée la nuit pour que vous puissiez repartir sereinement le jour.",
        },
        maintenance: {
          title: "Entretien en dehors des heures de bureau",
          description:
            "Petits travaux d'entretien et contrôles peuvent être effectués sur votre allée ou parking quand vous êtes à la maison et n'avez pas besoin de conduire.",
        },
        onLocation: {
          title: "Réparations sur site",
          description:
            "À domicile, au travail ou quelque part sur la route à Gand et environs immédiats : je me déplace à votre emplacement.",
        },
        unsure: {
          title: "Vous doutez que je puisse aider ?",
          description:
            "Appelez brièvement pour expliquer votre situation et je vous dirai immédiatement ce qui est possible et quels coûts vous pouvez approximativement attendre.",
          button: "Appeler sans engagement",
        },
      },
    },
    process: {
      badge: "Comment ça marche",
      title: "Comment se déroule une intervention de nuit à Gand.",
      description:
        "Pas de centre d'appels ni de salle d'attente : vous parlez directement avec le technicien qui se déplace effectivement. Un processus transparent pour que vous sachiez toujours où vous en êtes.",
      steps: {
        step1: {
          title: "Vous appelez ou remplissez le formulaire",
          description:
            "Expliquez brièvement ce qui s'est passé, où vous êtes et quel type de voiture vous conduisez. Sur cette base, vous obtiendrez une estimation de la solution possible.",
        },
        step2: {
          title: "Je me déplace sur place à Gand et environs",
          description:
            "Dans la mesure du possible, je suis rapidement sur place. J'effectue un diagnostic et discute immédiatement des options et du prix indicatif avec vous.",
        },
        step3: {
          title: "Réparation d'urgence ou solution jusqu'au garage",
          description:
            "Lorsque c'est possible, la voiture est réparée sur place. Si ce n'est pas possible, je fournis une solution temporaire pour que vous puissiez rentrer en sécurité ou atteindre votre garage habituel.",
        },
      },
      ideal: {
        title: "Idéal pour les travailleurs de nuit, l'horeca et les indépendants.",
        description:
          "Vos horaires ne correspondent pas aux heures d'ouverture des garages classiques ? Alors un service auto de nuit spécialisé à Gand est un grand avantage.",
        benefits: [
          "Pas besoin de prendre un jour de congé pour une visite au garage.",
          "Réparations quand votre voiture est de toute façon à l'arrêt.",
          "Communication transparente directement avec le technicien.",
          "Planification flexible à votre emplacement à Gand.",
        ],
      },
    },
    region: {
      badge: "Région Gand",
      title: "Interventions de nuit à Gand et communes environnantes.",
      description:
        "Je pars de Gand et me concentre principalement sur la ville et les environs immédiats pour pouvoir réagir rapidement aux appels urgents.",
      situations: {
        title: "Situations typiques où j'aide",
        description:
          "Un service auto de nuit est idéal quand vous êtes bloqué de manière inattendue et ne pouvez pas attendre jusqu'à demain.",
        items: [
          "Après votre shift tardif, votre voiture ne démarre plus sur votre lieu de travail.",
          "Après une soirée à Gand, vous revenez à une voiture qui ne démarre plus.",
          "Votre véhicule de société doit être à nouveau opérationnel le matin.",
          "Vous vous sentez en insécurité sur la route et voulez de l'aide le plus rapidement possible.",
        ],
        note: "Attention : je n'offre pas de service de remorquage. Quand le remorquage est nécessaire, je renvoie vers un partenaire reconnu.",
      },
    },
    faq: {
      badge: "Questions fréquentes",
      title: "Questions fréquentes sur les réparations nocturnes.",
      description:
        "Avez-vous d'autres questions ou n'êtes-vous pas sûr que je puisse aider avec votre problème ? Ci-dessous, vous trouverez des réponses aux questions les plus fréquemment posées.",
      items: {
        pricing: {
          question: "Comment les tarifs sont-ils calculés ?",
          answer:
            "Je travaille avec un supplément de nuit et un prix de base clair par intervention, complété par d'éventuelles pièces. Pendant l'appel téléphonique, je donne toujours une indication transparente pour que vous ne soyez pas surpris.",
        },
        payment: {
          question: "Comment puis-je payer ?",
          answer:
            "Le paiement peut être effectué sur place via l'application Bancontact ou virement bancaire classique. Le paiement en espèces est également possible. Vous recevez toujours une facture claire.",
        },
        response: {
          question: "À quelle vitesse pouvez-vous être sur place ?",
          answer:
            "Cela dépend d'où je me trouve au moment de votre appel. Dans la plupart des cas, je suis sur place dans les 30 à 60 minutes à Gand et environs immédiats.",
        },
        vehicles: {
          question: "Avec quels véhicules travaillez-vous ?",
          answer:
            "J'aide principalement avec les voitures particulières et les véhicules utilitaires légers à essence ou diesel. En cas de doute, vous pouvez toujours appeler brièvement pour discuter de votre situation.",
        },
      },
    },
    contact: {
      badge: "Contact",
      title: "Besoin d'aide urgente ? Appelez immédiatement.",
      description:
        "Pour les vraies urgences, appeler est toujours le moyen le plus rapide. Utilisez le formulaire principalement pour les rendez-vous ou les questions qui ne sont pas urgentes.",
      phone: "Téléphone",
      hours: "Heures de nuit",
      hoursDesc: "Tous les jours entre 18h et 7h, y compris le week-end.",
      address: "Adresse",
      addressValue: "Dendermondesteenweg 428\n9040 Sint-Amandsberg",
      region: "Région",
      regionDesc: "Gand et communes environnantes immédiates.",
      form: {
        title: "Posez votre question ou planifiez une intervention.",
        description:
          "Remplissez le plus complètement possible, alors je peux mieux estimer comment vous aider au mieux.",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Adresse e-mail",
        emailPlaceholder: "vous@example.com",
        phone: "Numéro de téléphone",
        phonePlaceholder: "Par ex. 0466 19 56 22",
        location: "Emplacement à Gand ou environs",
        locationPlaceholder: "Par ex. Sint-Amandsberg, parking, adresse domicile...",
        message: "Que s'est-il exactement passé ?",
        messagePlaceholder: "Décrivez brièvement le problème, le type de voiture et où vous êtes.",
        note: "Ce formulaire n'envoie pas encore de demande automatique. Pour une aide urgente, nous recommandons de toujours appeler.",
        submit: "Envoyer la question",
        callInstead: "Appeler à la place",
      },
      toast: {
        title: "Message pas encore envoyé",
        description: "Pour l'aide la plus rapide, veuillez appeler le 0466 19 56 22.",
      },
    },
    footer: {
      copyright: "© {year} Nachtautoservice Gand. Tous droits réservés.",
      tagline: "Fonctionne quand les autres garages dorment.",
      backToTop: "Retour en haut",
    },
  },
} as const;

