import RequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import { Property } from './property';

export class Discord {
  constructor() {}

  /**
   * Send data .
   */
  public discord(message: string) {
    const prop: Property = new Property();

    const payload = {
      token: prop.getToken,
      channel: '#aaaaaaaaa',
      content: message,
      username: 'wolf25',
      parse: 'full'
    };

    const options: RequestOptions = {
      method: 'post',
      contentType: 'application/json;multipart/form-data;application/x-www-form-urlencoded',
      payload: JSON.stringify(payload)
    };
    try {
      UrlFetchApp.fetch(prop.getUrl, options);
    } catch (error) {
      Logger.log(JSON.stringify(error));
      return;
    }
    // const response = UrlFetchApp.fetch(prop.getUrl, params);
  }
}
