import { Robot } from "@phosphor-icons/react";
import SpaceBackground from "./SpaceBackground";

export default function NotFoundPage() {
  return (
    <SpaceBackground>
      <div className="text-center">
        <Robot className="mx-auto mb-6 h-20 w-20 text-white" weight="fill" />
        <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">404</h1>
        <p className="mt-4 text-2xl text-white/85 sm:text-3xl">
          You&apos;ve reached a page that is science fiction.
        </p>
      </div>
    </SpaceBackground>
  );
}
