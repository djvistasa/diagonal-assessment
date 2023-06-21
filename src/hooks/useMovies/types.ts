interface IApiResponse {
  ok: boolean;
  result: unknown;
  error: unknown;
}

interface IMoviePage {
  title: string;
  'total-content-items': string;
  'page-num-requested': string;
  'page-size-requested': string;
  'page-size-returned': string;
  'content-items': IContentItem;
}

interface IContentItem {
  content: IMovie[];
}

interface IMovie {
  name: string;
  id: number;
  'poster-image': string;
}

export type { IApiResponse, IMovie, IMoviePage };
