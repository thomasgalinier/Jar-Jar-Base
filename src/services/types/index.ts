export interface IResponse<TResult> {
  count: number;
  next: string | null;
  previous: string | null;
  results: TResult[];
}
