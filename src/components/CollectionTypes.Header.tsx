import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { BackButton } from "./BackButton";

export const CollectionTypesHeader: FC<{ name: string }> = ({ name }) => {
  const router = useRouter();
  return (
    <header id={`collection-types header`} className="w-full">
      <BackButton />
      <div className="flex items-start justify-between">
        <div>
          <h1 className="mb-2">{name}</h1>
          <h3>0 entries found</h3>
        </div>
        <Link href={`${router.asPath}/new`}>
          <a className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-md py-2 px-4">
            <p className="text-white font-base">+ Create new entry</p>
          </a>
        </Link>
      </div>
    </header>
  );
};
