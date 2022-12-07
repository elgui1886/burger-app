import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { BreadType, MeatType, Ingredients } from './models/enums';
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
  readonly _ingredients = Object.values(Ingredients);

  constructor(private fb: FormBuilder, cd: ChangeDetectorRef, private _snackBar: MatSnackBar) {
    this._orderForm = fb.group({
      tableNumber: fb.control(null, [Validators.required, Validators.min(1)]),
      quantity: fb.control(null, [Validators.required, Validators.min(1)]),
      burgers: this.fb.array([]),
    });
    this._orderForm
      .get('quantity')
      ?.valueChanges.pipe(takeUntil(this._destroy$), debounceTime(300), distinctUntilChanged())
      .subscribe((val: number) => {
        if (!val || val < 0) {
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

  _checkRare(burgerForm: AbstractControl<any, any>){
    const meatValue = burgerForm.get('meat')?.value;
    return meatValue === ('Manzo') || meatValue === ('Gluten free')
  }

  _onSubmit() {
    if(this._orderForm.valid) {
      localStorage.setItem('ORDER',  JSON.stringify(this._orderForm.value));
      this._snackBar.open('Ordine salvato correttamente', 'Chiudi', {
        duration: 5000
      })
    }
  }

  private _buildHamburgerForm() {
    const fb = this.fb;
    const hf = fb.group({
      bread: fb.control(null, [Validators.required]),
      meat: fb.control(null, [Validators.required]),
      ingredients: fb.control(null),
      mediumRare: fb.control(false, [Validators.required]),
      note: fb.control(null),
    });
    return hf;
  }
}
