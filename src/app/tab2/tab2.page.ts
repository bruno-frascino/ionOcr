import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private barcodeScanner: BarcodeScanner){}

  private bCodeData;

  public bScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      this.bCodeData = barcodeData;
      console.log(`bCdata ${this.bCodeData}`);

     }).catch(err => {
         console.log('Error', err);
     });
  }

}


