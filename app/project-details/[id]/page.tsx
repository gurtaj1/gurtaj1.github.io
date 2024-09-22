import Link from "next/link";
import Image from "next/image";

import { projects } from "../../constants/global";

export async function generateStaticParams() {
  return projects.map((project: { id: string }) => ({
    id: project.id,
  }));
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ffcc00] text-black dark:bg-black dark:text-[#ffcc00] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 mt-[68px]">
        <Link
          href="/#portfolio"
          className="text-[#660066] dark:text-[#ffcc00] hover:underline mb-4 inline-block"
        >
          &larr; Back to Portfolio
        </Link>
        <div className="bg-white dark:bg-[#660066] rounded-lg shadow-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-100 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Technologies:
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.technologies}
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Background:
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.background}
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Project Details:
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.details}
              </p>
            </div>
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl inline-block bg-[#660066] text-white px-6 py-2 rounded font-semibold hover:bg-[#550055] transition duration-300 mr-[20px]"
            >
              View Site
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl inline-block bg-[#ffcc00] text-black px-6 py-2 rounded font-semibold hover:bg-[#e6b800] transition duration-300"
            >
              {id === "icon-classifer" ? "View Steps" : "View on GitHub"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
