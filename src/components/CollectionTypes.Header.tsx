import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { BackButton } from "./BackButton";

export const CollectionTypesHeader: FC<{ name: string; total: number }> = ({
  name,
  total,
}) => {
  const router = useRouter();
  return (
    <header id={`collection-types header`} className="w-full">
      <BackButton />
      <div className="flex items-start justify-between">
        <div>
          <h1 className="mb-2">{name}</h1>
          <h3>{total} entries found</h3>
        </div>
        <Link href={`${router.asPath}/new`}>
          <a className="rounded-md bg-indigo-600 py-2 px-4 transition-colors hover:bg-indigo-500">
            <p className="font-medium text-white">+ Create new entry</p>
          </a>
        </Link>
      </div>
    </header>
  );
};
