

export interface IPagination {
  page               ?: string
  per_page           ?: string
  search             ?: string
  [filterKeys:string] : string
}

export interface IServiceResponse<T>{
  error: null | {
    type?: 'MISSING_PARAMS' | 'ENTITY_NOT_FOUND'
    message : string
  },
  response : T | null
}