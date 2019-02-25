import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private bCodeData:string;
  
  constructor(private barcodeScanner: BarcodeScanner){
    this.bCodeData = '';
  }

  public bScan() {
    this.barcodeScanner.scan().then(data => {
      this.bCodeData = '';
      if( !data.cancelled ){
        this.bCodeData = `Format: ${data.format} - Data: ${data.text}`;
      }

     }).catch(err => {
         console.log('Error', err);
     });
  }

}


