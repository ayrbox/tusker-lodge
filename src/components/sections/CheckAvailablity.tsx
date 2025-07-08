import ButtonLink from "../ButtonLink";

export default function CheckAvailablity() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex align-items justify-center pt-5">
          <form className="flex gap-3">
            <input
              type="date"
              className="border rounded rounderd-sm border-gray-400 px-4 py-1"
            />
            <input
              type="date"
              className="border rounded rounderd-sm border-gray-400 px-4 py-1"
            />
            <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
              Check Availability
            </ButtonLink>
          </form>
        </div>
        <div className="flex align-items justify-center text-sm text-gray-400 pb-5">
          <p>* This is just prototype</p>
        </div>
      </div>
    </section>
  );
}
