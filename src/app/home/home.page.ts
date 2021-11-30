import { Component } from '@angular/core';
import { Response, WebServer } from '@ionic-native/web-server/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private webServer: WebServer) { }

  startServer()
  {

    this.webServer.onRequest().subscribe(data => {
      console.log(data);
      const res: Response = {
         status: 200,
         body: 'test',
         headers: {
            'Content-Type': 'text/html'
         }
      };

      this.webServer.sendResponse(data.requestId, res)
         .catch((error: any) => console.error(error));
   });
    
    this.webServer.start(8585)
      .catch((error: any) => console.error(error));
  }

}
