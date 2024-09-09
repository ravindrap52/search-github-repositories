import { setCssVar } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(() => {
  setCssVar('primary', '#de5d64');
  setCssVar('secondary', '#003349');
});
