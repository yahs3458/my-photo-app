import { Component } from '@angular/core';
import { Plugins} from '@capacitor/core';
import { CameraResultType } from '@capacitor/camera';

const { Camera } = Plugins;

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.css']
})
export class PhotoUploaderComponent {
  photoData: string | undefined;

  async capturePhoto() {
    const image = await Camera['getPhoto']({
      resultType: CameraResultType.DataUrl
    });

    this.photoData = image && image.dataUrl;
    console.log(image);

  }

  uploadPhoto() {
    // Implement the logic to upload the photo here
    // You can use HttpClient to make a request to your server API
  }

}
