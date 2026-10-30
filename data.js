// Content sourced from mccarthysparty.com (2027 season).
const SITE = "https://www.mccarthysparty.com";
const IMG = "assets/img/";

const TOURS = [
  {
    id: "nl13",
    cat: ["nl"],
    badge: "Bestseller",
    days: 13,
    len: "long",
    title: "Comprehensive Newfoundland & Labrador",
    region: "Deer Lake → Labrador → St. John's",
    price: 5090,
    single: 1090,
    deposit: 400,
    img: "d13-2.jpg",
    gallery: ["d13-2.jpg", "grosmorne.jpg", "d13-4.jpg", "twillingate.jpg", "trinity.jpg", "whale.jpg"],
    map: "map13.jpg",
    months: [5, 6, 7, 8, 9],
    departures: {
      May: "26, 27*, 31",
      June: "2, 4, 7, 9, 11, 14, 17*, 18, 21, 23, 28",
      July: "5, 9, 12, 16, 23, 28",
      August: "2, 9, 13, 18, 20, 27",
      September: "1, 3, 6, 8"
    },
    summary: "Our most complete tour of the province and our most popular. Two weeks with the culture and everyday life of Newfoundland and a crossing to Labrador, at an easy pace with plenty of people to meet along the way.",
    highlights: [
      ["Gros Morne National Park", "UNESCO fjords, the Tablelands and a boat tour across Bonne Bay."],
      ["L'Anse aux Meadows", "Walk the site where Leif Erikson's Vikings landed around 1000 AD."],
      ["Red Bay, Labrador", "Cross the Strait of Belle Isle, watching for whales, to see a 1500s Basque whaling station."],
      ["Twillingate & Salvage", "Lighthouses on the 'Road to the Isles' and conversations on the fishing wharf."],
      ["Trinity & Bonavista", "One of North America's best-restored towns, and the cliffs where John Cabot landed."],
      ["Witless Bay & St. John's", "Puffins and humpbacks by boat, then finish in North America's oldest city."]
    ],
    includes: ["Local Newfoundland guide throughout", "12 nights' accommodation, private bath", "12 breakfasts, 9 midday meals, 5 dinners", "Ferry to & from Labrador, Red Bay tour", "Bonne Bay & whale/puffin boat tours*", "L'Anse aux Meadows, Grenfell Mission, Ryan Premises", "Entrance fees to National Historic Sites", "Baggage handling & ground transportation"],
    note: "*September departures swap the Witless Bay boat tour for a full-day Conception Bay coastal tour.",
    url: SITE + "/multi-day-tours/13-day-tours/"
  },
  {
    id: "sp10",
    cat: ["east"],
    days: 10,
    len: "mid",
    title: "East Coast Newfoundland & St. Pierre",
    region: "St. John's → St. Pierre (France)",
    price: 4550,
    single: 1035,
    deposit: 400,
    img: "stpierre.jpg",
    gallery: ["stpierre.jpg", "stpierre2.jpg", "rooms.jpg", "narrows.jpg", "stpierre3.jpg", "birdisland.jpg"],
    map: "map10.png",
    months: [6, 7, 8],
    departures: { June: "26", July: "3, 17", August: "7" },
    summary: "A little piece of Europe on your Newfoundland trip. Spend time in North America's oldest city and along the coastal outports, then cross to Saint-Pierre, the French archipelago just 90 minutes offshore, for French food, wine and culture.",
    highlights: [
      ["St. John's", "Signal Hill, The Rooms and the view of the Narrows."],
      ["Saint-Pierre et Miquelon", "Cafés, wine and real French hospitality, without crossing the Atlantic."],
      ["Witless Bay Bird Islands", "Puffins, murres and kittiwakes by the hundreds of thousands."],
      ["Coastal outports", "Historic fishing villages and some of the best views on the island."]
    ],
    includes: ["Local Newfoundland guide", "Nine nights' accommodation, private bath", "Trip to the French islands of St. Pierre", "Welcome reception", "9 breakfasts, 6 midday meals, 6 dinners", "Bay Bulls boat tour (weather permitting)", "Admiral's Coast, Conception Bay, Ferryland", "Entrance fees, baggage handling & motor coach"],
    note: "This tour involves more walking (7–10,000 steps per day in St. Pierre).",
    url: SITE + "/multi-day-tours/10-day-tours/"
  },
  {
    id: "nl9",
    cat: ["nl"],
    days: 9,
    len: "mid",
    title: "Island Wide Newfoundland",
    region: "Gros Morne → Twillingate → St. John's",
    price: 3960,
    single: 835,
    deposit: 400,
    img: "trinity.jpg",
    gallery: ["trinity.jpg", "grosmorne.jpg", "twillingate.jpg", "d13-5.jpg", "whale.jpg", "capespear-aerial.jpg"],
    map: "map9.jpg",
    months: [5, 6, 7, 9],
    departures: { May: "26, 28*", June: "7, 11, 16", July: "7, 16, 19", September: "6" },
    summary: "Cross the whole island, west to east. Start with two nights in Gros Morne, continue through the fishing villages of Twillingate, Trinity and Bonavista, see whales and puffins at Witless Bay, and finish with two nights in St. John's.",
    highlights: [
      ["Gros Morne", "Two nights on the Viking Trail and a Bonne Bay boat tour."],
      ["Gander", "Where the 'Come From Away' story of 9/11 kindness happened."],
      ["Twillingate", "Crow Head lighthouse, and icebergs if you're lucky."],
      ["Trinity & Bonavista", "Restored heritage towns and Cabot's 'Buenavista'."],
      ["Witless Bay", "Humpback, minke and fin whales feeding among the seabirds."],
      ["St. John's", "Cabot Tower, Signal Hill and an afternoon free downtown."]
    ],
    includes: ["Local Newfoundland guide", "8 nights' accommodation, private bath", "8 breakfasts, 6 midday meals, 4 dinners", "Bonne Bay & Witless Bay boat tours*", "Entrance fees to historic sites & museums", "Baggage handling & ground transportation"],
    note: "*September departures swap the Witless Bay boat tour for a full-day Conception Bay coastal tour.",
    url: SITE + "/multi-day-tours/9-day-tour/"
  },
  {
    id: "e5",
    cat: ["east"],
    days: 5,
    len: "short",
    title: "Eastern Newfoundland",
    region: "St. John's & the Avalon",
    price: 1585,
    single: 445,
    deposit: 200,
    img: "capespear-stairs.jpg",
    gallery: ["capespear-stairs.jpg", "ferryland-harbour.jpg", "portdegrave.jpeg", "group3.jpg", "group1.jpg", "hero2.jpg"],
    map: "map5.jpg",
    months: [5, 6, 7, 8, 9, 10],
    departures: {
      May: "6, 13, 17, 20, 24, 27, 31",
      June: "3, 7, 10, 14, 17, 21, 24, 28",
      July: "1, 5, 8, 12, 15, 19, 22, 26, 29",
      August: "2, 5, 9, 12, 16, 19, 23, 26, 30",
      September: "2, 6, 9, 13, 16, 20, 23, 27, 30",
      October: "7"
    },
    summary: "Five days based in St. John's, the City of Legends, with no driving and no planning to worry about. Visit coastal communities, eat traditional food, hear live music and enjoy the city's arts scene and pubs.",
    highlights: [
      ["Jellybean Row", "A welcome walk through the historic downtown on day one."],
      ["Cape Spear", "The easternmost point in North America."],
      ["Witless Bay boat tour", "Puffins, whales and, in spring, icebergs."],
      ["Excursion Around the Bay", "A full day among the Conception Bay outports."],
      ["The Irish Loop to Ferryland", "Outports and the 17th-century Colony of Avalon."],
      ["Optional add-on", "Outports & Lucky Rocks tour for $65."]
    ],
    includes: ["Local Newfoundland guide", "Airport meet & greet", "4 nights in a four-star downtown hotel", "4 breakfasts, 2 lunches", "Excursion Around the Bay & Irish Loop tours", "Historic St. John's & Cape Spear tour", "Whale/puffin boat tour & ground transportation"],
    url: SITE + "/multi-day-tours/5-day-tour/"
  },
  {
    id: "ennis7",
    cat: ["music", "east"],
    badge: "One departure",
    days: 7,
    len: "mid",
    title: "The Ennis Sisters' Musical Bus Tour",
    region: "St. John's, the Irish Loop & Trinity Bay",
    price: 3995,
    single: 825,
    deposit: 400,
    img: "ennis.jpg",
    gallery: ["ennis.jpg", "capespear-sunrise.jpg", "whale.jpg", "ferryland.jpg", "brigus-white.jpg", "rooms.jpg"],
    months: [6],
    departures: { June: "12" },
    summary: "Seven days with the Juno-winning Ennis Sisters and a McCarthy's guide. Expect jam sessions every day, a concert on George Street, a Screech-In, and the Southern Shore the sisters call home.",
    highlights: [
      ["Meet & greet", "Day one starts with the Ennis Sisters and their musical friends."],
      ["Cape Spear & Petty Harbour", "A few songs at the lighthouse and cod stew in the harbour."],
      ["Witless Bay", "Puffin and whale boat tour, followed by a lunch with live entertainment."],
      ["Ferryland & Cape Broyle", "A traditional Newfoundland dinner in the sisters' home turf."],
      ["The Rooms & Quidi Vidi", "High tea with guest musicians, then a stop at the brewery."],
      ["Brigus & Dildo", "Village walks, a brewery visit, and the famous sign."]
    ],
    includes: ["Local Newfoundland guide", "6 nights at the JAG Hotel", "Concerts, jams & performances", "6 breakfasts, 5 lunches, 4 dinners", "Boat tour & entrance fees", "Airport transfers"],
    note: "Tour minimum 25 guests.",
    url: SITE + "/ennis_sisters/"
  },
  {
    id: "mar13",
    cat: ["maritimes"],
    badge: "New",
    days: 13,
    len: "long",
    title: "Atlantic Maritimes",
    region: "Nova Scotia · New Brunswick · PEI",
    price: 6985,
    single: 1925,
    deposit: 500,
    img: "peggys.jpg",
    gallery: ["peggys.jpg", "hopewell.jpg", "cabot-trail.jpg", "lunenburg.jpg"],
    months: [9],
    departures: { September: "1" },
    summary: "The best of the Maritimes with a McCarthy's Party host. See the world's highest tides, red-cliffed beaches, lobster suppers and the Cabot Trail across Nova Scotia, New Brunswick and Prince Edward Island.",
    highlights: [
      ["Halifax & Peggy's Cove", "Breakfast overlooking one of the world's most-photographed lighthouses."],
      ["Lunenburg", "A UNESCO town with a long Grand Banks schooner history."],
      ["Hopewell Rocks", "The flowerpot rocks shaped by the highest tides on Earth."],
      ["St. Andrews by-the-Sea", "Whale watching and seaside architecture."],
      ["Prince Edward Island", "Anne of Green Gables and a hall-style lobster supper."],
      ["Cape Breton & the Cabot Trail", "Highland scenery and the Alexander Graham Bell site."]
    ],
    includes: ["McCarthy's Party host + Tour Director", "12 nights' accommodation", "22 meals", "Entrance fees", "Luggage handling", "Airport transfers"],
    note: "This tour involves more walking (7–10,000 steps per day).",
    url: SITE + "/atlantic_maritimes_tour/"
  },
  {
    id: "sp4",
    cat: ["east"],
    badge: "Add-on",
    days: 4,
    len: "short",
    title: "St. Pierre Add-On",
    region: "Self-guided · Fortune → Saint-Pierre",
    price: 1595,
    from: true,
    single: 375,
    deposit: 200,
    img: "stpierre2.jpg",
    gallery: ["stpierre2.jpg", "stpierre.jpg", "stpierre3.jpg"],
    months: [5, 6, 7, 8, 9],
    departures: { "2027": "Flexible, call to arrange" },
    summary: "Add a taste of France to any Newfoundland trip. We'll take you by shuttle from St. John's to the Fortune ferry. After that you have three nights to explore French cuisine and wine on Saint-Pierre at your own pace.",
    highlights: [
      ["Shuttle to Fortune", "Return McCarthy's shuttle from St. John's."],
      ["Ferry crossing", "About 90 minutes to Saint-Pierre."],
      ["Three nights in France", "Bakeries, bistros and coloured houses, with suggestions from us on what to see."]
    ],
    includes: ["Return shuttle St. John's ⇄ Fortune", "Return ferry to St. Pierre", "Three nights' accommodation", "Three breakfasts", "Airport transfer"],
    note: "Self-guided; you'll need to be able to walk unassisted.",
    url: SITE + "/multi-day-tours/4-day-tour/"
  }
];

const DAY_TOURS = [
  { title: "Historic St. John's & Cape Spear", img: "dt-historic.jpg", dur: "3 hours", when: "Daily", adult: 75, child: 45, blurb: "The easternmost point in North America, Signal Hill, Quidi Vidi and Jellybean Row. The best way to get to know St. John's in a morning.", url: SITE + "/st-johns-newfoundland-day-tours/historic-st-johns-and-cape-spear/", tag: "Most popular" },
  { title: "Outports & Lucky Rocks", img: "dt-outports.jpg", dur: "3 hours", when: "Mon & Fri · 9:30 AM", adult: 75, child: 45, blurb: "Drive Marine Drive past Logy Bay's finger rocks and look for lucky stones on Middle Cove beach. In season, watch for icebergs and capelin.", url: SITE + "/st-johns-newfoundland-day-tours/outports-and-lucky-rocks/" },
  { title: "Bird Island", img: "dt-bird.jpg", dur: "4 hours", when: "Daily · 10:30 AM (+1 PM Jun–Aug)", adult: 120, child: 75, blurb: "Take a boat from Bay Bulls to the Witless Bay reserve, home to millions of puffins, murres and kittiwakes. Whales are often seen here too.", url: SITE + "/st-johns-newfoundland-day-tours/bird-island/", tag: "Wildlife" },
  { title: "The Irish Loop to Ferryland", img: "dt-irish.jpg", dur: "Full day", when: "Wed & Sat · 9:30 AM", adult: 155, child: 105, blurb: "Follow the Southern Shore to the Colony of Avalon, a 17th-century settlement still being excavated. Pan-fried cod lunch included.", url: SITE + "/st-johns-newfoundland-day-tours/irish-loop-to-ferryland-2/", tag: "Lunch included" },
  { title: "Excursion Around the Bay", img: "dt-excursion.jpg", dur: "Full day", when: "Thu & Sun · 9:30 AM", adult: 145, child: 105, blurb: "Tour the Conception Bay outports and see where a wartime submarine attacked and where early aviators took off. Includes a homemade three-course meal.", url: SITE + "/st-johns-newfoundland-day-tours/excursion-around-the-bay/", tag: "Lunch included" },
  { title: "French Forts & Dildo Flights", img: "dt-dildo.jpg", dur: "Full day", when: "Select dates · 8:30 AM", adult: 175, child: 125, blurb: "Visit Castle Hill's French fort over Placentia Bay, then the town of Dildo for a tasting flight at the brewery.", url: SITE + "/st-johns-newfoundland-day-tours/french_forts_dildo_flights/", tag: "New" },
  { title: "Cruise Ship Tours", img: "dt-cruise.jpg", dur: "Timed to your ship", when: "Pickup at the pier", adult: null, blurb: "A guide with a sign meets you at the pier. Groups are 20 or fewer in a mini-coach, and you get a full refund if your ship doesn't dock.", url: SITE + "/st-johns-newfoundland-day-tours/cruise-ship/", tag: "Cruise guests" },
  { title: "Corner Brook & the Bay of Islands", img: "dt-cornerbrook.jpg", dur: "3 hours", when: "West coast · from the Glynmill Inn", adult: 115, child: null, blurb: "Panoramic views over Humber Arm and the Bay of Islands on Newfoundland's west coast.", url: SITE + "/st-johns-newfoundland-day-tours/corner_brook_bay_of_islands/" }
];

const SEASONS = [
  { m: "May", n: 5, title: "Iceberg season", img: "group1.jpg", text: "May and June give you the best chance of seeing icebergs. These 10,000-year-old pieces of Greenland drift down 'Iceberg Alley' and sometimes ground right in the harbours.", tags: ["Icebergs", "Quiet roads", "Spring seabirds"] },
  { m: "June", n: 6, title: "Bergs and puffins", img: "whale.jpg", text: "Icebergs are still around, the puffin colonies are busy, and the first whales arrive late in the month to feed on capelin.", tags: ["Icebergs", "Puffins", "Long evenings"] },
  { m: "July", n: 7, title: "Whale season", img: "birdisland.jpg", text: "Late June through July is the best time for whales. Humpbacks, minkes and fins feed close to shore, and you can often watch them from the clifftops.", tags: ["Humpbacks", "Festivals", "Puffins"] },
  { m: "August", n: 8, title: "Warmest weather", img: "trinity.jpg", text: "August is usually our warmest month. It's ideal for coastal hikes, swimming at the pebble beaches and long evenings on the patio on George Street.", tags: ["Warm days", "Hiking", "Berry picking"] },
  { m: "September", n: 9, title: "The island to yourself", img: "grosmorne.jpg", text: "By September most summer visitors have gone home. The light is golden, the barrens turn red and gold, and the outports feel like your own.", tags: ["Fewer crowds", "Fall colour", "Harvest food"] },
  { m: "October", n: 10, title: "Last call", img: "ferryland-harbour.jpg", text: "Our final 5 Day departure is on October 7. Expect dramatic skies, cozy pubs and the last warm bowls of fish chowder of the year.", tags: ["Moody skies", "Cozy pubs"] }
];

const REVIEWS = [
  { q: "I have had many experiences with 'good' tour companies in the world, however there are few 'exceptional' ones and McCarthy's Party is one of them.", who: "Multi-day guest", tour: "13 Day Newfoundland & Labrador" },
  { q: "It covers the major sights around St. John's in 3 hours. But it was our tour guide Leo who made it such a great experience. Informative and entertaining at the same time.", who: "Shannon M", tour: "Historic St. John's & Cape Spear" },
  { q: "Money well spent. Better value than excursions booked with the cruise line. Bill was our guide and driver, and we enjoyed his love for the area and his passion for the stories.", who: "Karin M", tour: "Cruise Ship Tour" },
  { q: "Cliff was our guide and he was fabulous, and he could answer any obscure question we threw at him. We are determined to return and visit everywhere from Gander to Gros Morne!", who: "Sara H", tour: "Day Tour" },
  { q: "Tim was knowledgeable, friendly and set a good pace for our tour. Would recommend this experience.", who: "Jay G", tour: "Day Tour" }
];

const GUIDES = [
  ["Andrew McCarthy", "andrew-mccarthy"], ["Bill Brophy", "bill-brophy"], ["Regina McCarthy", "regina-mccarthy"],
  ["Francis Corrigan", "francis-corrigan"], ["Larry Hann", "larry-hann"], ["Mike Edmunds", "mike-edmonds"],
  ["Peter Laracy", "peter-laracy"], ["Rex Hillier", "rex-hillier"], ["Steve Gosse", "steve-gosse"],
  ["Tom Hounsell", "tom-hounsell"], ["Eugene Flynn", "eugene-flynn"], ["Phil Mercer", "phil-mercer"]
];
