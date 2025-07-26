export type Attraction = {
  name: string;
  description?: string;
  link: string;
};

export type AttractionCategory = {
  name: string;
  attractions: Attraction[];
};

export const attractions: AttractionCategory[] = [
  {
    name: "Local Attractions",
    attractions: [
      {
        name: "Kents Cavern",
        description: "Prehistory Cave",
        link: "https://www.kents-cavern.co.uk/",
      },
      {
        name: "Babbacome Model Village",
        link: "https://model-village.co.uk/",
      },
      {
        name: "Pennywell",
        description: "Farm & Wildlife Centre",
        link: "https://pennywellfarm.co.uk/",
      },

      {
        name: "Becky Falls",
        description: "Woodland Park",
        link: "https://www.beckyfalls.com/",
      },

      {
        name: "Living Coasts",
        description: "Coastal Zoo and Aquarium",
        link: "https://www.livingcoasts.org.uk/",
      },
      {
        name: "Paignton Zoo",
        link: "https://paigntonzoo.org.uk/",
      },
      {
        name: "The English Riviera Wheel",
        link: "https://englishrivierawheel.co.uk/",
      },
      {
        name: "Torquay Museum",
        link: "https://torquaymuseum.org/",
      },
      {
        name: "Torre Abbey",
        link: "https://www.torre-abbey.org.uk/home",
      },
      {
        name: "Brixham Museum",
        link: "https://www.brixhammuseum.uk/",
      },
      {
        name: "Babbacombe Cliff Railway",
        link: "https://www.babbacombecliffrailway.co.uk/",
      },
      {
        name: "Dartmouth Steam Railway & Riverboat",
        link: "https://www.dartmouthrailriver.co.uk/",
      },
      {
        name: "The Golden Hind @ Brixham",
        link: "https://www.goldenhind.co.uk/",
      },
      {
        name: "Cockington Court",
        link: "https://cockingtoncourt.org/",
      },
    ],
  },
  {
    name: "Local Theatres",
    attractions: [
      { name: "Little Theater", link: "http://toadslittletheatre.co.uk/" },
      { name: "Brixham Theatre", link: "https://www.brixhamtheatre.org.uk/" },
      {
        name: "Palace Theatre",
        link: "https://www.palacetheatrepaignton.co.uk/",
      },
      { name: "Babbacombe Theatre", link: "https://babbacombe-theatre.com/" },
      {
        name: "Princess Theatre",
        link: "https://www.atgtickets.com/venues/princess-theatre-torquay/",
      },
    ],
  },
  {
    name: "Agatha Christie",
    attractions: [
      {
        name: "Agatha Christie Mile",
        description: "South West Coast Walk",
        link: "https://www.southwestcoastpath.org.uk/walksdb/591/",
      },
      {
        name: "Greenway",
        description: "Agatha Christie's holiday home",
        link: "https://www.nationaltrust.org.uk/visit/devon/greenway",
      },
      {
        name: "Agatha Christie Festival",
        link: "https://www.iacf-uk.org/",
      },
    ],
  },
  {
    name: "English Riviera",
    attractions: [
      {
        name: "Full list of things to do in Torbay",
        link: "https://www.englishriviera.co.uk/things-to-do",
      },
      {
        name: "Full list of events in Torbay",
        link: "https://www.englishriviera.co.uk/whats-on",
      },
    ],
  },
];
