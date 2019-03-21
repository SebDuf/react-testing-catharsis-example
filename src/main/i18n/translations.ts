import merge from 'deepmerge';
import i18n from 'i18next';

import authentication from '../../authentication/i18n';
import dashboard from '../../dashboard/i18n';
import jobs from '../../jobs/i18n';
import applied from '../../applied/i18n';

const translations: i18n.Resource = merge.all([
  applied,
  authentication,
  dashboard,
  jobs,
]) as i18n.Resource;

export default translations;
