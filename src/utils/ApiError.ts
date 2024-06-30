// src/utils/ApiError.ts

class ApiError extends Error {
    public statusCode: number;
    public error: string;
  
    constructor(statusCode: number, error: string) {
      super(error);
      this.statusCode = statusCode;
      this.error = error;
      Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
      Error.captureStackTrace(this);
    }
  }
  
  export default ApiError;
  