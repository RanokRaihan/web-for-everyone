import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main id="main-content">
      <div className="container mx-auto mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-xl italic text-gray-700">
            {`"Internet is for everyone, but it won't be unless WE make it so."  `}
          </p>
          <p className="text-lg font-semibold text-gray-900 mt-4">
            Vint Cerf, 7. April 1999
          </p>
          <Link
            href="/learn"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md"
          >
            <span className="flex gap-2 items-center">
              <span>Start learning</span> <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
