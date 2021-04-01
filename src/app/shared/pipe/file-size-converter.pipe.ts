import { Pipe, PipeTransform } from "@angular/core";

const BYTES = "bytes";
const KB = "kb";
const MB = "mb";
const GB = "gb";
const TB = "tb";
const BASIC_BYTES = 1024;
const DEFAULT_SIZE = 0;
const UNITS = [BYTES, KB, MB, GB, TB];

@Pipe({
  name: "fileSizeConverter"
})
export class FileSizeConverterPipe implements PipeTransform {
  transform(
    fileSize: number,
    decimal: number = 1,
    minumUnit: string = KB
  ): string {
    if (!fileSize) {
      return `${DEFAULT_SIZE} minumUnit`;
    }
    const baseLog = Math.floor(Math.log(fileSize) / Math.log(BASIC_BYTES));
    const resultValue = (fileSize / Math.pow(BASIC_BYTES, baseLog)).toFixed(
      decimal
    );
    const unit = UNITS[baseLog];
    return `${resultValue} ${unit}`;
  }
}
