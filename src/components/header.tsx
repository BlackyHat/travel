import Link from "next/link";
import LogoIcon from "@public/icons/logo.svg";
import content from "@/lib/content/hero.json";

import BurgerMenu from "@/components/burger-menu";
import ScrollLink from "@/components/ui/scroll-link";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-9 md:pt-6 xl:pt-8">
      <Link href="/" className="p-2">
        <LogoIcon aria-label="Logo Carpatian Travel" width={62} height={32} />
      </Link>
      <BurgerMenu navElements={content.nav} />
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-4 xl:gap-x-12">
          {content.nav.map((el) => (
            <li key={el}>
              <ScrollLink
                href={`#${el}`}
                className="text-decoration p-1 text-sm/[17px] font-normal capitalize tracking-widest"
                title={`Navigate to ${el}-section`}
              >
                {el}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
