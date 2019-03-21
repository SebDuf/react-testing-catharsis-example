import merge from 'deepmerge';
import i18n from 'i18next';

import authentication from '../../authentication/i18n';
import dashboard from '../../dashboard/i18n';

const translations: i18n.Resource = merge.all([
  authentication,
  dashboard,
]) as i18n.Resource;

export default translations;
