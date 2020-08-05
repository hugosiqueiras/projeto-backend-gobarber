export default class AppError {
  public readonly message: string;

  public readonly statusCode: number; // 404.. 401...

  constructor(message: string, statuscode = 400) {
    this.message = message;
    this.statusCode = statuscode;
  }
}
