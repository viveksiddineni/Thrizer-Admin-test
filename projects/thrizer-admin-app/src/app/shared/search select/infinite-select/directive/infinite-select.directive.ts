import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { MatSelect } from "@angular/material/select";
import { Observable, Subscriber } from "rxjs";

@Directive({
  selector: "[appInfiniteSelect]",
})
export class InfiniteSelectDirective {
  @Input() detectHeight: number = 80;
  @Input() apply: boolean = false;
  @Output() enter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private select: MatSelect) {
    // console.log("directive working");

    select.openedChange.subscribe((status) => {
      if (status) {
        const panel: HTMLDivElement = select.panel.nativeElement;
        this.detectInfinite(panel);
      }
    });
  }
  addScrollListener(element: HTMLElement): Observable<any> {
    return new Observable((subscriber: Subscriber<any>) => {
      let prevScroll: number = 0;
      element.addEventListener("scroll", () => {
        subscriber.next({
          prevScroll,
          currentScroll: element.scrollTop,
          direction: element.scrollTop > prevScroll ? "forward" : "backward",
        });
        prevScroll = element.scrollTop;
      });
    });
  }
  detectInfinite(element: HTMLElement) {
    if (element) {
      let isEventEmitted: boolean = false;
      this.addScrollListener(element).subscribe((event: any) => {
        const totalScrollableHeight: number =
          element.scrollHeight - element.clientHeight;

        const remainingScrollableHeight: number =
          totalScrollableHeight - element.scrollTop;
        // console.log(
        //   remainingScrollableHeight,
        //   "\\\\\\\\\\\\",
        //   this.detectHeight,
        //   isEventEmitted
        // );
        // isEventEmitted = false;
        if (
          remainingScrollableHeight < this.detectHeight &&
          event.direction === "forward" &&
          !isEventEmitted
        ) {
          this.enter.emit(true);
          isEventEmitted = true;
        } else if (
          isEventEmitted &&
          remainingScrollableHeight > this.detectHeight
        ) {
          isEventEmitted = false;
        }
      });
    }
  }
}
