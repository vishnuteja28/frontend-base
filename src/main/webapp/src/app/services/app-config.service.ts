import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public defaultConfig: any = {
    serviceUrls: {
      uiServiceUrl: "http://localhost:8080",
    }
  };

  constructor() {
  }

  getConfig() {
    return this.defaultConfig;
  }
}

