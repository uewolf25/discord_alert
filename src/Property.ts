import Prop = GoogleAppsScript.Properties.Properties;

export class Property {
  private _properties: Prop = PropertiesService.getScriptProperties();
  private _serverUrl: string;
  private _token: string;

  constructor() {
    this._serverUrl = this._properties.getProperty('SEVER_URL');
    this._token = this._properties.getProperty('TOKEN');
    this.alert();
  }

  /**
   * Get server URL .
   * @returns {string} this._serverUrl
   */
  public get getUrl(): string {
    return this._serverUrl;
  }

  /**
   * Get token ID .
   * @returns {string} this._token
   */
  public get getToken(): string {
    return this._token;
  }

  /**
   * - Notice that is not set serverURL and tokenID .
   */
  private alert() {
    if (!this._serverUrl) {
      throw 'You should set "SEVER_URL" property from [File] > [Project properties] > [Script properties]';
    }
    if (!this._token) {
      throw 'You should set "TOKEN" property from [File] > [Project properties] > [Script properties]';
    }
  }
}
