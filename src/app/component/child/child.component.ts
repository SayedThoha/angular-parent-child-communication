import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input()
  msgFromParent: string = '';

  @Output()
  emitMsg: EventEmitter<string> = new EventEmitter<string>();

  sendMsgToParent(event: Event) {
    let target = event.target as HTMLInputElement;
    this.emitMsg.emit(target.value);
  }
}
