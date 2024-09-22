"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { projects } from "./constants/global";

import Profile from "./assets/profile.jpg";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type PortfolioItemProps = {
  id: string;
  title: string;
  image: StaticImageData;
  link: string;
  site: string;
};

function PortfolioItem({ id, title, image, link }: PortfolioItemProps) {
  return (
    <div className="bg-[#660066] dark:bg-[#ffcc00] rounded-lg shadow-2xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-white dark:text-black">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <Link
            href={`/project-details/${id}`}
            className="text-[#ffcc00] dark:text-[#660066] hover:underline"
          >
            View Details
          </Link>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffcc00] dark:text-[#660066] hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

type MainContentProps = {
  projects: PortfolioItemProps[];
};

function MainContent({ projects }: MainContentProps) {
  return (
    <main>
      <section
        id="home"
        className="bg-[#ffcc00] dark:bg-black text-black dark:text-[#ffcc00] py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <Image
            src={Profile}
            alt="Gurtaj Kang"
            width={150}
            height={150}
            className="rounded-2xl shadow-2xl mx-auto mb-6 border-5 border-black dark:border-[#ffcc00]"
          />
          <h1 className="text-4xl font-bold mb-2">GURTAJ KANG</h1>
          <h2 className="text-2xl mb-6">Front End Developer</h2>
          <Link
            href="#portfolio"
            className="shadow-2xl bg-[#660066] text-white dark:bg-[#ffcc00] dark:text-black px-6 py-2 rounded-full font-semibold hover:bg-[#550055] dark:hover:bg-[#e6b800] transition duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      <section
        id="about"
        className="py-20 bg-black dark:bg-[#ffcc00] text-[#ffcc00] dark:text-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">ABOUT ME</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6">
              I am a Front End Developer with 7 years of experience in{" "}
              <strong>React</strong>, along with extensive use of{" "}
              <strong>GraphQL</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Next.js</strong>, and related technologies.
            </p>
            <p>
              I&apos;m expanding my AI/ML expertise, building models with{" "}
              <strong>PyTorch</strong> and <strong>fast.ai</strong>, and
              implementing content moderation models from{" "}
              <strong>Microsoft Azure</strong> and <strong>AWS</strong>.
              I&apos;ve integrated generative AI tools like{" "}
              <strong>v0.dev</strong> into my recent projects along with the use
              of <strong>GitHub Copilot</strong>.
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-[#ffcc00] dark:bg-black text-black dark:text-[#ffcc00] py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">PORTFOLIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <PortfolioItem key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#ffcc00] text-black dark:bg-black dark:text-[#ffcc00] transition-colors duration-300">
      <div className="mt-[68px]">
        <MainContent projects={projects} />
      </div>

      <footer className="bg-[#660066] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LOCATION</h3>
              <p className="flex items-center">
                <MapPin size={18} className="mr-2" /> London
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">NETWORK</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:gurtajkang@yahoo.co.uk"
                  className="hover:text-[#ffcc00]"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://github.com/gurtaj1"
                  className="hover:text-[#ffcc00]"
                >
                  <Github size={24} />
                </a>
                <a
                  href="http://www.linkedin.com/in/gurtaj-singh-kang-6883515b"
                  className="hover:text-[#ffcc00]"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">CREDITS</h3>
              <p>This page was developed using Next.js and Tailwind CSS.</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Gurtaj Kang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
