import { CommunityItem } from "@components/CommunityItem";
import { HelpSectionItem } from "@components/HelpSectionItem";
import {
  CodeIcon,
  InformationCircleIcon,
  MapIcon,
  PencilAltIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import { COMMUNITIES } from "@utils/constants";
import Link from "next/link";
import { MainLayout } from "../layouts/Main.Layout";

export default function Home() {
  return (
    <MainLayout title="Home">
      <header id="home-welcome" className="p-6">
        <h1>Welcome 👋</h1>
        <p className="text-xl opacity-80 w-2/3 mt-4">
          We guarantee safety of your data - all you need is to focus on your
          project! Feel free to read the latest news about SecureCMS. We are
          giving our best to improve the product based on your feedback.
        </p>
        <Link href="#">
          <a className="mt-4 text-indigo-600 flex items-center gap-2 text-sm font-light">
            See more on the blog{" "}
            <PencilAltIcon className="w-4 h-4 text-indigo-600" />
          </a>
        </Link>
      </header>
      <article className="pt-12 flex items-start justify-between gap-6">
        <section id="help-section" className="grid grid-flow-row gap-6 w-2/3">
          <HelpSectionItem
            color="indigo"
            icon={<InformationCircleIcon className="text-white w-6" />}
            title="Documentation"
            description="Discover the essential concepts, guides and instructions."
          />
          <HelpSectionItem
            color="orange"
            icon={<CodeIcon className="text-white w-6" />}
            title="Code examples"
            description="Learn by testing real projects developed by the community."
          />
          <HelpSectionItem
            color="teal"
            icon={<PlayIcon className="text-white w-6" />}
            title="Tutorials"
            description="Follow step-by-step instructions to use and customize SecureCMS."
          />
          <HelpSectionItem
            color="purple"
            icon={<PencilAltIcon className="text-white w-6" />}
            title="Blog"
            description="Read the latest news about SecureCMS and the ecosystem."
          />
        </section>
        <section
          id="community-section"
          className="shadow-md rounded-md bg-white p-6 w-1/3"
        >
          <div>
            <h3>Join the community</h3>
            <p>
              Discuss with team members, contributors and developers on
              different channels.
            </p>
            <Link href="#">
              <a className="mt-4 text-indigo-600 flex items-center gap-2 text-sm font-light">
                See our roadmap <MapIcon className="w-4 h-4 text-indigo-600" />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 px-2 pt-6 gap-6">
            {COMMUNITIES.map((c) => (
              <CommunityItem
                src={c.src}
                href={c.href}
                title={c.title}
                key={c.href}
              />
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
