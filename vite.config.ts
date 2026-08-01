import vinext from "vinext";
import { defineConfig } from "vite";
import { sites } from "./lib/sites-vite-plugin";

export default defineConfig(async () => {
  const isVercel =
    process.env.VERCEL === "1" || process.env.NITRO_PRESET === "vercel";

  if (isVercel) {
    const { nitro } = await import("nitro/vite");

    return {
      plugins: [vinext(), nitro()],
    };
  }

  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: {
          main: "./worker/index.ts",
          compatibility_flags: ["nodejs_compat"],
        },
      }),
    ],
  };
});
