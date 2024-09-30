import ComponentCard from "@/components/ComponentCard";
import { components } from "@/constants";

const ComponentPage = () => {
  return (
    <div className="">
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold ">Components</h1>
        <p className="text-slate-700 text-lg">
          Components are reusable pieces of code that can be used to build UIs.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 py-4">
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            name={component.name}
            description={component.description}
            link={component.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentPage;
