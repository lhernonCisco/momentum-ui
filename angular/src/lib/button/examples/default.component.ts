import { Component } from '@angular/core';

@Component({
  selector: 'example-button-default',
  template: `
    <div>
      <button md-button aria-label="myAriaLabel" (click)="onClick()">
        Test Me
      </button>
    </div>
  `,
})
export class ExampleButtonDefaultComponent {
  onClick() {
    alert('Button Clicked!');
  }
}
