import {
  defineConfig,
  jsConfig,
  tsConfig,
  svelteConfig,
  ignoresConfig,
} from "@sveltek/eslint-config";

export default defineConfig([
  jsConfig,
  tsConfig,
  {
    ...svelteConfig,
    rules: {
      ...svelteConfig.rules,
      "svelte/no-navigation-without-resolve": "off",
    },
  },
  ignoresConfig,
]);
