import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  alias: {
    '@models': 'models',
    '@db': 'db'
  },
  serverAssets: [
    {
      baseName: 'sql',
      dir: './models/sql'
    }
  ]
});
