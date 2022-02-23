import { BackButton } from "@components/BackButton";
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
            <h1 className="mb-2">Content Manager</h1>
            <h3>
              Here you can manage your contents by collection types or single
              types.
            </h3>
          </div>
          <Link href={`${router.asPath}/collection-types/product`}>
            <a className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-md py-2 px-4">
              <p className="text-white font-base">View Collection Type</p>
            </a>
          </Link>
        </div>
      </header>
    </ContentManagerLayout>
  );
}
