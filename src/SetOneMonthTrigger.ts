export class SetOneMonthTrigger {
  constructor() {}

  /**
   * Set Trigger for 1 month . Especially, Wednesday and Thursday .
   */
  public SetTrigger() {
    Logger.log('トリガー生成');

    const date: Date = new Date();
    const now: Date = new Date();

    for (let dayCount = 1; dayCount <= 31; dayCount++) {
      date.setDate(dayCount);

      if (now.getDate() > date.getDate()) continue;

      if (date.getDay() == 3) {
        Logger.log('水曜日判定:\t' + date);
        try {
          this.startTrigger(date, 13, 15);
          this.endTrigger(date);
        } catch (e) {
          Logger.log(e);
        }
      } else if (date.getDay() == 4) {
        Logger.log('木曜日判定:\t' + date);
        try {
          this.startTrigger(date, 16, 45);
          this.endTrigger(date);
        } catch (e) {
          Logger.log(e);
        }
      } else {
        Logger.log('飛ばし:\t\t' + date);
        continue;
      }
    }
  }

  /**
   * Call in starting the club activity .
   */
  private startTrigger(date: Date, h: number, m: number) {
    date.setHours(h);
    date.setMinutes(m);
    Logger.log('開始時刻: ' + date);
    try {
      ScriptApp.newTrigger('startCallMessage')
        .timeBased()
        .at(date)
        .create();
    } catch (error) {
      Logger.log('Miss: Cannot delete trigger .');
    }
  }

  /**
   * Call in ending the club activity .
   */
  private endTrigger(date: Date) {
    date.setHours(20);
    date.setMinutes(0);
    Logger.log('終了時刻: ' + date);
    try {
      ScriptApp.newTrigger('endCallMessage')
        .timeBased()
        .at(date)
        .create();
    } catch (error) {
      Logger.log('Miss: Cannot delete trigger .')
    }
  }

  /**
   * Delete old trigger .
   */
  public deleteTrigger() {
    const triggers = ScriptApp.getProjectTriggers();
    for (const trigger of triggers) {
      ScriptApp.deleteTrigger(trigger);
      Utilities.sleep(1000);
    }
    Logger.log('トリガーの削除');
  }
}
