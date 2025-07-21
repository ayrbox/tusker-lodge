import Image from "next/image";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function FamilyRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          Family Room
        </h1>



<p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 6</strong> Family room with 1 doubles bed and a single
          bed. You can use it for two or three person.
        </p>
            <p>
All double rooms are beautifully furnished and stylishly decorated in calm, neutral colours, the bedrooms all benefit from features characteristic of an Edwardian House such as high ceilings and large windows which ensure each room is flooded with natural daylight. Each room offers a comfortable bed with a high quality mattress to ensure a good night’s sleep together with an en-suite shower room, flat screen TV and tea and coffee making facilities.Breakfast is  an optional £8 per person per day,
</p>


        <strong>Facilities</strong>
        <ul>
<li>Internet hotspot</li>
<li>Free WiFi Internet,</li>
<li>Hairdryer</li>
<li>Non-smoking</li>
<li>Freeview TV</li>
<li>Tea and coffee making facilities</li>
<li>Linen provided</li>
</ul>

        <p>(wifi icon here) Free Wifi</p>
<p>
        (icon here) Sleeps up to: 4 
        </p>


        
        
        <Image
          src={FamilyRoomImage}
          alt="Family Room - Room 5"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}
