import { VueQueryPlugin } from '@tanstack/vue-query';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  // Set vue query instance on app
  app.use(VueQueryPlugin);
});

