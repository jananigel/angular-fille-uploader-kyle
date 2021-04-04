import { Component } from "@angular/core";
import { fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

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

  onMouseDown(item, mouseDown: MouseEvent) {
    fromEvent(item, "mousemove")
      .pipe(takeUntil(fromEvent(item, "mouseup")))
      .subscribe((event: MouseEvent) => {
        item.style.position = "absolute";
        item.style.userSelect = "none";
        item.style.left = event.clientX - mouseDown.offsetX + "px";
        item.style.top = event.clientY - mouseDown.offsetY + "px";
      });
  }

  private fileHandle(fileList: FileList) {
    this.files = this.files.concat(Array.from(fileList));
    const fileCount = this.files.length;
    for (let i = 0; i < fileCount; ++i) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.files[i]);
      fileReader.onload = _event => {
        this.files[i][IMAGE_URL] = fileReader.result;
      };
    }
  }
}
