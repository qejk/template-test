---
sidebar_label: TypeScript
title: TypeScript
---

All custom types in **Eveble** requires class constructor annotation with `@define` decorator. This is requirement of underlying [typend][typend] module that is able to resolve the class properties types from TypeScript declaration by use of wonderful [goloveychuk/tsruntime][tsruntime] module.

```ts
import { Struct, define } from 'eveble';

@define()
class Config extends Struct {
  mySetting: string;
}
```

Additional dependencies in `package.json` MUST be installed:

```json
{
  "dependencies": {
    "reflect-metadata": "^0.1.13",
    "tsruntime": "^3.0.0-beta.1",
    "ttypescript": "^1.5.10",
    "typend": "^0.1.0"
  }
}
```

And also `tsconfig.json` MUST be change to:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "plugins": [
      {
        "transform": "tsruntime/dist/transform/transformer.js",
        "type": "program"
      }
    ]
  }
}
```

Additionally all scripts that deal with TypeScript code MUST use compiler set as ENV `TS_NODE_COMPILER=\"ttypescript\`.

For example this is the script for running tests with [Mocha][mocha]based on configuration provided in `.mocharc.json`:

```json
{
  "scripts": {
    "test": "./node_modules/.bin/cross-env NODE_ENV=test TS_NODE_PROJECT=./test/tsconfig.json TS_NODE_COMPILER=\"ttypescript\" ./node_modules/.bin/mocha --config ./.mocharc.json"
  }
}
```

[typend]: https://github.com/eveble/typend
[tsruntime]: https://github.com/goloveychuk/tsruntime
[mocha]: https://mochajs.org/
