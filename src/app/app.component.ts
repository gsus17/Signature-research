import { Component, AfterViewInit } from '@angular/core';
declare var SignaturePad;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  private signaturePad = null;

  constructor() { }

  public ngAfterViewInit() {
    this.signaturePad = new SignaturePad(
      document.getElementById('signature-pad'),
      {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
      });


    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = 200;

    this.listenChangeOrientation();
  }

  /**
   * Save the signature.
   */
  public save() {
    const data = this.signaturePad.toDataURL('image/png');
    alert('Firma guardada');
    this.clear();
  }

  /**
   * Clear the signature.
   */
  public clear() {
    this.signaturePad.clear();
  }

  /**
   * Resize the canvas.
   */
  private listenChangeOrientation() {
    window.addEventListener('orientationchange', () => {
      const ca = document.querySelector('canvas');
      const cot = ca.getContext('2d');
      cot.canvas.width = window.innerWidth;
      cot.canvas.height = 200;
    });
  }
}
