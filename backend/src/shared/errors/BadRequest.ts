import { ApiError } from "./ApiError";

export class BadRequest extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
