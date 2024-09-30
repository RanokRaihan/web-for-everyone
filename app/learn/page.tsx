import LearnTopicCard from "@/components/LearnTopicCard";
import { topics } from "@/constants";

const LearnPage = () => {
  return (
    <main id="main-content">
      <div className="container mx-auto">
        <h1 className="font-bold text-3xl mt-6 mb-4">start learning now</h1>
        <div className="grid grid-cols-4 items-stretch gap-10">
          {topics.map((topic) => (
            <LearnTopicCard
              key={topic.name}
              name={topic.name}
              description={topic.description}
              link={topic.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LearnPage;
