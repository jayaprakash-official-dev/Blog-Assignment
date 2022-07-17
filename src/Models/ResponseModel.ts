export class SuccessResponse<T> {
  public success: Boolean = false;
  public data?: T;
  public error?: String = '';
}

