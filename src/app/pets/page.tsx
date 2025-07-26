import Link from "next/link";

export default function AttractionsPage() {
  return (
    <div className="">
      <h1 className="text-4xl mb-2">
        We welcome well behaved dogs at Tusker Lodge.
      </h1>
      <p className="text-sm mb-8 text-gray-500">
        One small/medium sized dog is allowed per room (size guide: max 20kgs).
      </p>
      <p>
        Please be advised that we have two dogs and therefore guest’s dogs must
        be kept on a lead at all times in common areas of the Guest House. Dogs
        are not allowed on beds or other furniture, should not be left
        unattended in rooms under any circumstances.
      </p>
      <p className="mt-10">
        We generally charge a one off fee per stay (fee dependant on the length
        of stay but starts at £10 for 1-5 nights) to cover cleaning costs, this
        may increase if the room requires more time. We also ask that you
        dispose of your pets waste (yes, you’d be surprised!) off the premises
        in dog litter bins which are across the road in the park.
      </p>
      <p className="mt-10">We do not accept any pets other than dogs.</p>

      <p className="mt-10">
        For a list of dog friendly beaches in the area please
        <Link href="https://www.torbay.gov.uk/asb-environment-and-nuisance/dogs/dogs-on-the-beach/">
          click here
        </Link>
      </p>
      <p className="mt-10">
        Most bars and pubs around the harbour are dog friendly, however the
        following site is quite useful...
        <Link href="http://www.doggiepubs.org.uk/" target="_blank">
          www.doggiepubs.org.uk
        </Link>
      </p>
      <p className="mt-10">
        For our four legged furry friends who have enjoyed your breakfast liver
        cake treat, here is the recipe (make sure they make you some)
      </p>
    </div>
  );
}
