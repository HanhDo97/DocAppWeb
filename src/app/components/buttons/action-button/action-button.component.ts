import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent implements OnChanges {
  @Input() name: string = "";
  @Input() isDisable: boolean = false;
  @Output() buttonClicked = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if ('isDisable' in changes) {
      this.isDisable = changes['isDisable'].currentValue;
    }
  }

  buttonClick(): void {
    this.buttonClicked.emit();
  }
}