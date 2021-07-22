import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fileNameFromUrl",
})
export class FileNameFromUrlPipe implements PipeTransform {
  transform(fileUrl: any): any {
    if (this.isFile(fileUrl)) {
      return fileUrl["name"];
    }
    return this.getFilename(fileUrl);
  }

  isFile = (input) => "File" in window && input instanceof File;
  getFilename(url) {
    if (url) {
      const m = url.split("/").pop();
      if (m) {
        return decodeURIComponent(m);
      }
    }
    return "file";
  }
}
