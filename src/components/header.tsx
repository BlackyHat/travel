import LogoIcon from "@public/icons/logo.svg";
import Link from "next/link";
import content from "@/lib/content/hero.json";
import BurgerMenu from "./burger-menu";

export default function Header() {
  return (
    <header className="flex justify-between py-8 align-middle">
      <Link href="/" className="p-2">
        <LogoIcon aria-label="Logo Carpatian Travel" width={62} height={32} />
      </Link>
      {/* <button className="p-2 text-sm font-normal uppercase tracking-[1.4px] text-white md:hidden">
        menu
      </button> */}
      <BurgerMenu navElements={content.nav} />
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-6 align-middle">
          {content.nav.map((el) => (
            <li key={el}>
              <a
                href={`#${el}`}
                className="hover:font-outline focus:font-outline active:font-outline duration-250 p-1 text-sm/[17px] font-normal capitalize tracking-widest"
                title={`Navigate to ${el}-section`}
              >
                {el}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
