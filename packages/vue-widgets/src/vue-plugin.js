import * as widgets from '../src/widgets';

const installed = Symbol();
export default Vue => {
  if (Vue[installed]) return;
  const names = Object.keys(widgets);
  for (const name of names) {
    Vue.component(name, widgets[name]);
  }
  Vue[installed] = true;
};
