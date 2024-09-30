import { ArrowRight } from "lucide-react";
import Link from "next/link";
interface ComponentCardProps {
  name?: string;
  description?: string;
  link?: string;
}
const ComponentCard = ({ name, description, link }: ComponentCardProps) => {
  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-slate-600">{description}</p>
      <Link
        className="mt-2 flex-1 text-blue-700 flex items-center gap-2"
        href={`/learn/components/${link}`}
      >
        <span>{`Learn ${name}`} </span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ComponentCard;
