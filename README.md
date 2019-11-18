# @web-bee-ru/widgets

## Install
```bash
npm i @web-bee-ru/widgets
```

## Use

1. Make sure you have bootstrap styles in your project.

2a. Import and register all widgets:
```js
import Vue from 'vue';
import { VuePlugin } from '@web-bee-ru/widgets';
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
  import { WButton } from '@web-bee-ru/widgets';
  export default {
    components: { WButton },
  };
</script>
```

## Develop

```bash
npm i # will install dev environment dependencies
npm run bootstrap # will link package dependencies
npm run dev # will start nuxt sandbox
```

If you experience issues, try `npm run clean` and then `npm run bootstrap` again.

# Publish

```bash
npm run publish
```

If you experience issues with ssh key passphrase, try running `start-ssh-agent` before publishing.
