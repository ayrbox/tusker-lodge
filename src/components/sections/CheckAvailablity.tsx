import ButtonLink from "../ButtonLink";

export default function CheckAvailablity() {
  return (
    <section>
      <div className="container mx-auto p-8 md:py-16">
        <form className="flex flex-col md:flex-row gap-3 md:items-center md:justify-center">
          <label htmlFor="arrival">Arrival Date:</label>
          <input
            id="arrival"
            type="date"
            className="border rounded rounderd-sm border-gray-400 px-4"
          />

          <label htmlFor="departure">Departure Date:</label>
          <input
            id="departure"
            type="date"
            className="border rounded rounderd-sm border-gray-400 px-4"
          />
          <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
            Check Availability
          </ButtonLink>
        </form>
      </div>
    </section>
  );
}
