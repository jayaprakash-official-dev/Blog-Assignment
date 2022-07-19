export class SuccessResponse<T,S={}> {
  public success: Boolean = false;
  public data?: T;
  public user?: S;
  public error?: String = '';
}

