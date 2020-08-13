# @web-bee-ru/widgets

## Install
```bash
npm i @web-bee-ru/vue-widgets
```

## Use

1. Make sure you have bootstrap styles and sass support in your project.

2a. Import and register all widgets:
```js
import Vue from 'vue';
import { VuePlugin } from '@web-bee-ru/vue-widgets';
Vue.use(VuePlugin);
```

2b. Import only ones you need:
```vue
<template>
  <div>
    <w-button>Click me</w-button>
  </div>
</template>
<script>
  import { WButton } from '@web-bee-ru/vue-widgets';
  export default {
    components: { WButton },
  };
</script>
```

## Develop

```bash
npm run bootstrap # install dependencies
npm run dev:vue # start dev sandbox
```

Refer to [widget design guidelines](./docs/guidelines_widgets.md) and [widget registry](./docs/widgets.md) (currently only available in Russian).

If you experience issues, try `npm run clean` and then `npm run bootstrap` again.

# Publish

```bash
npm run publish
```

If you experience issues with ssh key passphrase, try running `start-ssh-agent` before publishing.
