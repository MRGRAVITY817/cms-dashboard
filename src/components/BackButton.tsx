import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-indigo-600 text-sm mb-4"
    >
      &larr; Back
    </button>
  );
};
