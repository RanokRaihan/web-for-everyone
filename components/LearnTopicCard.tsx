import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface LearnTopicCardProps {
  name: string;
  description: string;
  link: string;
}

const LearnTopicCard = ({ name, description, link }: LearnTopicCardProps) => {
  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-slate-600">{description}</p>
      <Link
        className="mt-2 flex-1 text-blue-700 flex items-center gap-2"
        href={link}
      >
        <span>{`explore about ${name}`} </span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default LearnTopicCard;
