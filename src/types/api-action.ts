export type GuitarRequest = {
  start: number,
  end: number,
  rest?: string,
}

export type ReviewRequest = {
  id: number,
  start: number,
  end: number,
}

export type Params = {
  [key: string] : string,
}

export type ParamsWithString = {
  params: Params,
  rest?: string,
}
