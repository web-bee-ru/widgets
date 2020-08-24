import Vue from 'vue';
import { VuePlugin } from '@web-bee-ru/vue-widgets';
Vue.use(VuePlugin);
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
global.VuelidateValidators = require('vuelidate/lib/validators');
