import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  CHARACTERS_CONTEXT = 'characters';
  constructor(private http: HttpClient) {}

  getCharacters(params: string) {
    const queryParams = this.getQueryString({
      ts: 1,
      name: params,
      apikey: environment.apiKey,
      hash: environment.hash,
    });
    return this.http.get<any>(
      `${environment.API_URL}/${this.CHARACTERS_CONTEXT}?${queryParams}`
    );
  }
  getQueryString(queryParams: { [key: string]: any }) {
    const queryEntries = Object.entries(queryParams);
    const filteredQuery = queryEntries.filter(
      ([key, value]) =>
        typeof value !== 'undefined' && value !== '' && value !== null
    );
    return filteredQuery
      .map(([key, value]) => {
        if (value === 'null' || typeof value === 'undefined') return '';
        return `${key}=${value}`;
      })
      .join('&');
  }
}
