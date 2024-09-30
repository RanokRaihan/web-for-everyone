import { components } from "@/constants";
import SideMenuLink from "./SideMenuLink";

const SideMenu = () => {
  return (
    <aside className="hidden md:block md:w-[250px] bg-slate-50 border-r border-slate-100">
      <ul className="p-4 space-y-1">
        <li>
          <SideMenuLink href="/learn/components">All Components</SideMenuLink>
        </li>
        {components.map((component) => (
          <li key={component.name}>
            <SideMenuLink href={`/learn/components/${component.link}`}>
              {component.name}
            </SideMenuLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
