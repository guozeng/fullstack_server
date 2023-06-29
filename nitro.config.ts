import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  alias: {
    '@models': 'models',
    '@db': 'db',
    '@u': 'utils',
    '@c': 'config',
  },
  serverAssets: [
    {
      baseName: 'sql',
      dir: './models/sql'
    }
  ]
});
