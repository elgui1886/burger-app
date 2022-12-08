import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  /**
   * This method enable external game configuration for robot tabletop
   * @param path path where to read game configuration shaped as GameConfig interface
   */
  async loadConfig(path: string) {
    const res = await fetch(path, {
      method: 'GET',
    })
      .then((res) => res.json())
      .catch((err) => {
        return null;
      });

    if (res) {
      Config.enableStore = res.enableStore;
    }
  }
}
