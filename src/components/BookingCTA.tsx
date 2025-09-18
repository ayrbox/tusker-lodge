import clsx from "clsx";
import Link from "next/link";

export const BookingCTA = ({
  href = "",
  variant = "default",
  children,
  className,
}: {
  href?: string;
  variant?: "default" | "booking";
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    target="_blank"
    className={clsx(
      "border rounded-full border border-transparent px-8 py-3 text-base font-medium text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden shadow",
      {
        "bg-[#ffa400] hover:bg-[#009ffd]": variant === "default",
      },
      {
        "bg-[#003b95] hover:bg-[#006ce4]": variant === "booking",
      },
      className,
    )}
  >
    {children}
  </Link>
);
