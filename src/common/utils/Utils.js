import Environment from '../env/Environment';

export const isPro = () => {
  return Environment.isPro === 'true';
};

export const isLocal = () => {
  return Environment.isLocal === 'true';
};
export const showAppName = () => {
  if (isLocal()) {
    console.log(
      `%c${Environment.appName}`,
      'color: #FFFFFF; background: #333333; text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00; font-size: 42px;',
    );
  }
};
