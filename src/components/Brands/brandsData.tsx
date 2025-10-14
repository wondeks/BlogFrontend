import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 6,
    name: "Formbold",
    href: "https://formbold.com",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
    imageLight: "/images/brands/lineicons-light.svg",
  },
  {
    id: 4,
    name: "Tailadmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
    imageLight: "/images/brands/tailadmin-light.svg",
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: "/images/brands/plainadmin.svg",
    imageLight: "/images/brands/plainadmin-light.svg",
  },
];

const Brands = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
      {brandsData.map(({ id, name, href, image, imageLight }) => (
        <div key={id} className="flex justify-center items-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
          >
            {/* Light/dark images */}
            <Image
              src={imageLight}
              alt={name}
              fill
              className="hidden dark:block"
            />
            <Image
              src={image}
              alt={name}
              fill
              className="block dark:hidden"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Brands;
