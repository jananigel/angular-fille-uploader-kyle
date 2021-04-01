import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appDragAndDropFile]"
})
export class DragAndDropFileDirective {
  @HostBinding("class.dragging") isDragging: boolean;
  @Output() fileDropped = new EventEmitter<FileList>();

  @HostListener("dragover", ["$event"])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  @HostListener("dragleave", ["$event"])
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  @HostListener("drop", ["$event"])
  ondrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    let files: FileList = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
