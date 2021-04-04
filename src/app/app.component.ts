import { Component } from "@angular/core";

const IMAGE_URL = "imageUrl";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  files = [];

  onUploadFile(fileList: FileList) {
    this.fileHandle(fileList);
  }

  onDelete(index: number) {
    this.files.splice(index, 1);
  }

  onDrop(files: FileList): void {
    this.fileHandle(files);
  }

  private fileHandle(fileList: FileList) {
    this.files = this.files.concat(Array.from(fileList));
    const fileCount = this.files.length;
    for (let i = 0; i < fileCount; ++i) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.files[i]);
      fileReader.onload = _event => {
        console.log("type = ", fileReader);
        this.files[i][IMAGE_URL] = fileReader.result;
      };
    }
  }
}
