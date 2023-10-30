export interface Image {
  image: string;
}

export interface CMSImage {
  id: string;
  url: string;
}

export interface CMSPregnantImage {
  gravidas: CMSImage;
}

export interface CMSPregnantResponse {
  data: {
    gravidas: CMSPregnantImage[];
  };
}

export interface CMSBabyImage {
  bebes: CMSImage[];
}

export interface CMSBabyResponse {
  data: {
    bebes: CMSBabyImage[];
  };
}

export interface CMSFamilyImage {
  familias: CMSImage[];
}

export interface CMSFamilyResponse {
  data: {
    familias: CMSFamilyImage[];
  };
}

export interface CMSNewBornImage {
  recemNascidos: CMSImage[];
}

export interface CMSNewBornResponse {
  data: {
    recemNascidos: CMSNewBornImage[];
  };
}
