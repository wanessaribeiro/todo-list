import { LocationStrategy } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler{

  constructor(private httpClient: HttpClient,
    private locationStategy: LocationStrategy){
    super()
  }

  override handleError(error: any): void {

    var errorEvent = {
      path: this.locationStategy.path(),
      message: error.message?? error.toString(),
      handler: 'GlobalErrorHandler',
      user: 'the-id-of-the-current-user',
      time: new Date(),
      stack: error.stack
    }

    this.httpClient.post('htttp://localhost:3002/errors', error.message).subscribe(() => {})
  }
}
