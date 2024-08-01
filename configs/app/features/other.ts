import { getEnvValue } from '../utils';

const activeStage = getEnvValue('NEXT_PUBLIC_OTHER');

const title = 'Blockchain statistics';

const config = (() => {
  if (activeStage === 'true') {
    return Object.freeze({
      title,
      isEnabled: true,
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
