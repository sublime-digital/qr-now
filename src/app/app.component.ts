import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './navbar-top-fixed.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'qr-now';
  inputValue = 'google.com';
  myAngularxQrCode: string = '';
  qrInnerHtml = '<qrcode #parent [qrdata]="myAngularxQrCode" [width]="256" [errorCorrectionLevel]="\'M\'"></qrcode>'

ngOnInit () {
  console.log('init');
  //document.getElementById("qrdiv").innerHTML = this.qrInnerHtml;
}

ngDoCheck() {
  console.log('changes');
  console.log(this.myAngularxQrCode);
  document.getElementById("qrdiv").innerHTML = this.qrInnerHtml;
}

saveImage() {
  console.log(document.querySelector("canvas").toBlob(  blob => {
    const anchor = document.createElement('a');
    anchor.download = 'qr-now.jpg'; // optional, but you can give the file a name
    anchor.href = URL.createObjectURL(blob);

    anchor.click(); // ✨ magic!

    URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory! 😎
  },
  'image/jpeg',
  0.9,
));

  /*
  var canvas;
  var link = document.createElement("a");
  link.download = "qr-now.png";
  document.getElementById("my-qr-code").toBlob(function(blob: any){
     link.href = URL.createObjectURL(blob);
     console.log(blob);
     console.log(link.href); // this line should be here
   },'image/png');

  console.log(link.href);
  link.click();
} */
}}
