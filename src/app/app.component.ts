import { Component, HostListener } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  files = [];
  isDragging = false;

  // @HostListener("body:dragover", ["$event"])
  // onBodyDragOver(event: any) {
  //   this.isDragging = true;
  // }

  onUploadFile(fileList: FileList) {
    this.fileHandle(fileList);
  }

  // onDrop(event: any) {
  //   this.isDragging = false;
  //   console.log("drop = ", event);
  // }

  onDragover(event: any) {
    this.isDragging = true;
    console.log("drag over = ", event.dataTransfer.files);
  }

  onDragleave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDelete(index: number) {
    this.files.splice(index, 1);
  }

  @HostListener("drop", ["$event"])
  onDrop(event: any): void {
    console.log(event.dataTransfer.files[0]?.name);
    this.isDragging = false;
    this.fileHandle(event.dataTransfer.files);
  }

  @HostListener("dragover", ["$event"])
  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  @HostListener("body:dragover", ["$event"])
  onBodyDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  // @HostListener("body:drop", ["$event"])
  // onBodyDrop(event: any) {
  //   this.fileHandle(event.dataTransfer.files);
  //   this.isDragging = false;
  // }

  // @HostListener("window:dragleave", ["$event"])
  // onWindowDragLeave(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (!event.clientX && !event.clientY) {
  //     this.isDragging = false;
  //   }
  // }

  private fileHandle(fileList: FileList) {
    event.stopPropagation();
    event.preventDefault();
    this.files = this.files.concat(
      Array.from(fileList)
    );
    const fileCount = this.files.length;
    for (let i = 0; i < fileCount; ++i) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.files[i]);
      fileReader.onload = _event => {
        this.files[i]["imageUrl"] = fileReader.result;
      };
    }
  }
}
