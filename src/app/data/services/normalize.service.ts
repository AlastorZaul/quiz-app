import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

interface StrapiEntry { id: number, attributes: any }
interface StrapiSingleEntryData { data: StrapiEntry }
interface StrapiMultiEntryData { data: StrapiEntry[] }

@Injectable({
  providedIn: 'root'
})
export class NormalizeService {

  constructor() { }

  restructureData(source$: Observable<StrapiSingleEntryData>): Observable<any> {
    return source$.pipe(map(v => v.data));
  }

  restructureAttributes(source$: Observable<StrapiSingleEntryData>): Observable<any> {
    return source$.pipe(map(v => ({ id: v.data.id, ...v.data.attributes })));
  }

  restructureArrayedAttributes(nestedAttribute?: string): (source$: Observable<StrapiMultiEntryData>) => Observable<any> {
    return source$ => source$.pipe(
      map(v => v.data),
      switchMap(v => v),
      map(v => {
        if (nestedAttribute) {
          v.attributes[nestedAttribute] = v.attributes[nestedAttribute].data.map((nv: StrapiEntry) => ({ id: nv.id, ...nv.attributes }));
        }

        return { id: v.id, ...v.attributes };
      }),
      toArray()
    );
  }
}
