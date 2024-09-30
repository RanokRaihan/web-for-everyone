import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import SkipToMainContent from "./SkipToMainContent";

const Navbar = () => {
  return (
    <header className="w-full h-[80px] bg-slate-50 border-b border-slate-100">
      {<SkipToMainContent />}
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={300} height={100} />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/learn">Learn</NavLink>
            </li>
            <li>
              <NavLink href="/learn/components">Components</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
