import {Component, ViewChild} from '@angular/core';
import {SignaturePadModule} from 'angular2-signaturepad';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'signature';
  @ViewChild('sp', {static: false}) signaturePad: SignaturePad;

  public signaturePadOptions = {
    minWidth: 2,
    backgroundColor: 'rgb(255,255,255)',
    penColor: 'rgb(66,133,244)',
    canvasWidth: 450,
    canvasHeight: 150
  };
  drawClear() {
    // this.signaturePad.clear();
    // console.log(this.signaturePad);
    // sp.clear();
  }
  drawComplete() {
    const s = document.getElementById('sp');
    console.log(s);
    const signaturePad = new SignaturePad(this.signaturePad.queryPad());
    const base64 = this.signaturePad.toDataURL('image/png', 0.5);

    console.log(base64);
    const blob = this.base64toblob(base64);
    console.log(blob);
  }
  base64toblob(base64) {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
    const byteNumbers = new Array(byteString.length);
    for (let i = 0 ; i < byteString.length; i++) {
      byteNumbers[i] = byteString.charAt(i);

    }
    const ia = new Uint8Array(byteNumbers);
    return new Blob([ia], {type: mimeString});
  }
}

