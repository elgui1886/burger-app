export interface Config {
  enableStore: boolean;
}
 

export const Config: Config = {
    enableStore: false
}

export const LOCAL_STORAGE_ORDERS_KEY = 'ORDERS';