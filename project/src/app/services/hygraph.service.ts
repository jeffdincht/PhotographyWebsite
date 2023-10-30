import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  CMSPregnantResponse,
  Image,
  CMSFamilyResponse,
  CMSNewBornResponse,
  CMSBabyResponse,
} from '../Models/images.models';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

const queryGravida = {
  query: `query {
    gravidas {
      gravidas {
        id
        url
      }
    }
  }`,
};
const queryBebe = {
  query: `query {
    bebes {
      bebes {
        id
        url
      }
    }
  }`,
};

const queryFamilia = {
  query: `query {
    familias {
      familias {
        id
        url
      }
    }
  }`,
};

const queryRecemNascido = {
  query: `query {
    recemNascidos {
      recemNascidos {
        id
        url
      }
    }
  }`,
};

@Injectable({
  providedIn: 'root',
})
export class HygraphService {
  private hygraph_url: string = environment.HYGRAPH_URL;

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    Authorization: `Bearer ${environment.HYGRAPH_TOKEN}`,
  });

  getPhotoPregnant(): Observable<CMSPregnantResponse> {
    return this.http.post<CMSPregnantResponse>(this.hygraph_url, queryGravida, {
      headers: this.headers,
    });
  }

  getPhotoNewBorn(): Observable<CMSNewBornResponse> {
    return this.http.post<CMSNewBornResponse>(
      this.hygraph_url,
      queryRecemNascido,
      {
        headers: this.headers,
      }
    );
  }

  getPhotoBaby(): Observable<CMSBabyResponse> {
    return this.http.post<CMSBabyResponse>(this.hygraph_url, queryBebe, {
      headers: this.headers,
    });
  }

  getPhotoFamily(): Observable<CMSFamilyResponse> {
    return this.http.post<CMSFamilyResponse>(this.hygraph_url, queryFamilia, {
      headers: this.headers,
    });
  }
}
