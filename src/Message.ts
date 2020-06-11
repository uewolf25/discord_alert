import { Discord } from './discord';

export class Message {
  private _disc: Discord;
  private _rand: number;

  constructor() {
    this._disc = new Discord();
    this._rand = Math.floor(Math.random() * 4);
  }

  /**
   * Message in starting the club activity .
   */
  public startCallMessage() {
    let message: string;
    if (this._rand == 0)
      message =
        '@everyone 部活始まったわよ。べ、別に来て欲しいからメンションしたわけじゃないしっ!!';
    if (this._rand == 1) message = '@everyone 部活始まったよ〜〜〜!!';
    if (this._rand == 2) message = '@everyone ぶ、部活…始まった…よ…？';
    if (this._rand == 3)
      message =
        '@everyone 今日の部活の始まりよ〜。今日来た子にはお姉さんが特別なご褒美あげちゃおうかしら😄';
    this._disc.discord(message);
  }

  /**
   * Message in ending the club activity .
   */
  public endCallMessage() {
    let message: string;
    if (this._rand == 0) message = '@everyone も、もう帰っちゃうの…？';
    if (this._rand == 1) message = '@everyone 今日の部活も終わりだね！おっつかれ〜!!';
    if (this._rand == 2) message = '@everyone 部活、終わりの…時間…';
    if (this._rand == 3) message = '@everyone 今日も来てくれてありがとね〜。はい、ご褒美😄';
    this._disc.discord(message);
  }
}
