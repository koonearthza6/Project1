import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  // @Input() counter = 0;
  // @Input() step: number = 1;
  // @Output() numberChange = new EventEmitter

  // EP.4-5
  // decrease() {
  //   if (this.counter - this.step > 0) {
  //     this.counter = this.counter - this.step;
  //     this.numberChange.emit();//ปล่อย Event แบบ emit ออกไปเพื่อแสดง
  //   }
  // }
  // increase() {
  //   if (this.counter + this.step < 101) {
  //     this.counter = this.counter + this.step;
  //     this.numberChange.emit();
  //   }
  // }

  //EP.7 ส่งค่า counter เพื่อแสดงการเปลี่ยนแปลง
  // decrease() {
  //   if (this.counter - this.step > 0) {
  //     this.counter = this.counter - this.step;
  //     this.numberChange.emit(this.counter);//ปล่อย Event ออกไปเพื่อแสดง
  //   }
  // }
  // increase() {
  //   if (this.counter + this.step < 101) {
  //     this.counter = this.counter + this.step;
  //     this.numberChange.emit(this.counter);
  //   }
  // }

  // Ep 10.1---------------------------------
  // @Input() counter = 0;
  // @Input() step = 1;
  // @Output() numberChange = new EventEmitter();

  // decrease() {
  //   if (this.counter - this.step > 0) {
  //     this.counter = this.counter - this.step;
  //     this.numberChange.emit(this.counter);//ปล่อย Event ออกไปเพื่อแสดง
  //   }
  // }
  // increase() {
  //   if (this.counter + this.step < 101) {
  //     this.counter = this.counter + this.step;
  //     this.numberChange.emit(this.counter);
  //   }
  // }

  //Ep 10.2  two ways binding
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter();
  @Input() step = 1;


  decrease() {
    if (this.counter - this.step > 0) {
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter); //ปล่อย Event ออกไปเพื่อแสดง
    }
  }
  increase() {
    if (this.counter + this.step < 101) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }
  
}
