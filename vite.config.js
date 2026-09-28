import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const [owner, repository] = (process.env.GITHUB_REPOSITORY || "").split("/");
const pagesBase = repository && repository !== `${owner}.github.io` ? `/${repository}/` : "/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || pagesBase,
  plugins: [react()]
});
