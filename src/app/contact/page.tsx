import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="">
      <h1 className="text-4xl mb-2">Contact Us</h1>
      <p className="text-sm mb-8 text-gray-500">
        You can call us, email us or visit us directly.
      </p>
      <div className="flex gap-4">
        <MapPin />
        <address>
          Tusker Lodge
          <br />
          533 Babbacombe Road
          <br />
          Torquay,
          <br />
          Devon
          <br />
          TQ1 1HQ
        </address>
      </div>

      <div className="mt-8 flex gap-4">
        <Phone />
        <p>01803 292668</p>
      </div>

      <div className="mt-8 flex gap-4">
        <Mail />
        <p>
          <Link href="mailto:info@tuskerlodge.co.uk">
            info@tuskerlodge.co.uk
          </Link>
        </p>
      </div>
    </div>
  );
}
