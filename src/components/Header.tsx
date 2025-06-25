"use client";

import { WARBLELIVE_SVG } from "@/assets/svg";

export const Header = () => (
  <header className="w-full py-6 px-4 bg-[var(--header-bg-color)]">
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div>{WARBLELIVE_SVG().Warblelive_Logo()}</div>
      </div>
    </div>
  </header>
);
