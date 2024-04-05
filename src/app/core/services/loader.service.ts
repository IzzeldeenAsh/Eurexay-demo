import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: boolean = false;

  constructor() {}

  setLoading(load: boolean) {
    this.loading = load;
  }
  getLoading(): boolean {
    return this.loading;
  }
}
