import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { BreadType, MeatType } from './models/enums';
@Component({
  selector: 'app-hambuger-order',
  templateUrl: './hambuger-order.component.html',
  styleUrls: ['./hambuger-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container',
  },
})
export class HambugerOrderComponent implements OnDestroy {
  private _destroy$ = new Subject<void>();
  _orderForm: FormGroup;
  get _burgersFormArray() {
    return this._orderForm?.get('burgers') as FormArray;
  }

  readonly _breads = Object.values(BreadType);
  readonly _meats = Object.values(MeatType);
  readonly _ingredients = Object.values(BreadType);

  constructor(private fb: FormBuilder, cd: ChangeDetectorRef) {
    this._orderForm = fb.group({
      tableNumber: fb.control(null, [Validators.required, Validators.min(1)]),
      quantity: fb.control(null, [Validators.required, Validators.min(1)]),
      burgers: this.fb.array([]),
    });
    this._orderForm
      .get('quantity')
      ?.valueChanges.pipe(takeUntil(this._destroy$), debounceTime(300), distinctUntilChanged())
      .subscribe((val: number) => {
        if (val == null || val < 0) {
          return;
        }
        if (val === this._burgersFormArray?.length) {
          return;
        }
        while (val !== this._burgersFormArray?.length) {
          val < this._burgersFormArray?.length
            ? this._burgersFormArray.removeAt(
                this._burgersFormArray?.length - 1
              )
            : this._burgersFormArray.push(this._buildHamburgerForm());
        }
        cd.markForCheck();
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
  }

  _checkRare(){
    
  }

  private _buildHamburgerForm() {
    const fb = this.fb;
    const hf = fb.group({
      bread: fb.control(null, [Validators.required]),
      meat: fb.control(null, [Validators.required]),
      ingredients: fb.control(null),
      mediumRare: fb.control(null, [Validators.required]),
    });
    return hf;
  }
}
