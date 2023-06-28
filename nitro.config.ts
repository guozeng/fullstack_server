import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  alias: {
    '@models': 'models',
    '@db': 'db',
    '@u': 'utils',
  },
  serverAssets: [
    {
      baseName: 'sql',
      dir: './models/sql'
    }
  ]
});
