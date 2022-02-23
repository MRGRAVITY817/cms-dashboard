import { BackButton } from "@components/BackButton";
import { HelpSectionItem } from "@components/HelpSectionItem";
import { CheckCircleIcon, TableIcon } from "@heroicons/react/outline";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContentManager() {
  const router = useRouter();
  return (
    <ContentManagerLayout>
      <header id={`collection-types header`} className="w-full">
        <BackButton />
        <div className="flex items-start justify-between">
          <div>
            <h1>Content Manager</h1>
            <p className="mt-4 text-xl opacity-80">
              Here you can manage your contents by collection types or single
              types.
            </p>
          </div>
        </div>
      </header>
      <main id="content main" className="mt-20">
        <section id="help-section" className="grid w-2/3 grid-flow-row gap-6">
          <HelpSectionItem
            href="/content/collection-types/product"
            color="teal"
            title="Collection Types"
            description="Collection Types hold multiple fields of data. You can view them on tabular format."
            icon={<TableIcon className="w-6 text-white" />}
          />
          <HelpSectionItem
            href="/content/single-types/title"
            color="orange"
            title="Single Types"
            description="Single Types are a single publish-or-not type of item. Have one input field only."
            icon={<CheckCircleIcon className="w-6 text-white" />}
          />
        </section>
      </main>
    </ContentManagerLayout>
  );
}
