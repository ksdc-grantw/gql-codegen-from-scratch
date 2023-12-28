
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "./**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true
      },
    }
  }
};

export default config;
