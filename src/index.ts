import { SetOneMonthTrigger } from './setOneMonthTrigger';

declare var global: any;

global.main = (): void => {
  const setTrigger: SetOneMonthTrigger = new SetOneMonthTrigger();
  Logger.log('----------------- run -----------------');
  setTrigger.deleteTrigger();
  setTrigger.SetTrigger();
  Logger.log('----------------- end -----------------');
};
