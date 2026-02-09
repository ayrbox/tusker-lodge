import QueenRoomImage from "@/images/rooms/queen.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

const facilities = [
  { key: "no-of-people", text: "Sleeps up to 2 person" },
  { key: "wifi", text: "Free Wifi" },
  { key: "flat-screen-tv", text: '50"  Flat Screen TV' },
  { key: "cable", text: "Cable Television Channels" },
  { key: "pet-friendly", text: "Pet Friendly" },
  { key: "tea-and-coffee", text: "Tea and Coffee" },
  { key: "hair-dryer", text: "Hair Dryer" },
  { key: "no-smoking", text: "No Smoking" },
  { key: "complimentary-toiletries", text: "Complimentary Toiletries" },
  { key: "daily-housekeeping", text: "Daily Housekeeping" },
  { key: "ironing-board", text: "Iron and Ironing Board (On request)" },
  { key: "kettle", text: "Kettle" },
  { key: "linen-towels", text: "Linen & Towels Supplied" },
  { key: "ensuit-shower", text: "Shower EnSuite" },
  { key: "bottle-water", text: "Bottled Water" },
];

export default function QueenRoom() {
  const images = [
    { src: QueenRoomImage, alt: "Queen Room - Room 3" },
    { src: QueenRoomImage, alt: "Queen Room - Room 3 (2)" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Wrapper title="Queen Room">
        <Sidebar>
          <Facilities facilities={facilities} />
        </Sidebar>
        <Content>
          <p className="text-gray-500 text-3xl py-2">
            Spacious En-Suite Double Room - Room 07
          </p>
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-500">
                Escape to the comfort of Room 07, our generously proportioned
                super king-sized double room that combines classic elegance with
                modern amenities. Located on the first floor of Tusker Lodge,
                this bright and airy accommodation offers the perfect sanctuary
                for couples seeking a peaceful getaway on the English Riviera.
              </p>
              <p className="sr-only">
                <strong>Room 07</strong> is our super king sized double room, a
                spacious north facing, first floor en-suite with a 6&apos;
                double bed. Tea and coffee making facilities with complimentary
                bottled water. It features an en-suite shower room with free
                toiletries.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <RoomCarousel images={images} />
          </div>
          <div>
            <h3 className="text-2xl">Sleep in Comfort</h3>
            <p className="text-gray-900">
              At the heart of this spacious room lies a sumptuous 6-foot super
              king-sized double bed, dressed in crisp, high-quality linens and
              plump pillows to ensure you drift off into a restful night's
              sleep. Whether you're recovering from a day exploring Torquay's
              stunning coastline or simply enjoying a leisurely morning lie-in,
              our premium mattress guarantees the ultimate comfort experience.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Breakfast</h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                Start your day right with our delicious breakfast, an optional
                extra at just £10 per person per day.
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
