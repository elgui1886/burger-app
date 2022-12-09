import { Order } from './../models/order';
import { Config, LOCAL_STORAGE_ORDERS_KEY } from './../../config/config';
import { order } from './../state/actions';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { INGREDIENTS, MEATS, BREADS } from '../models/enums';
import { orderStateSelector, pipeableOrders } from '../state/selector';
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
  // #region readonly
  public readonly _breads = BREADS;
  public readonly _meats = MEATS;
  public readonly _ingredients = INGREDIENTS;
  private readonly _storeEnabled = Config.enableStore;
  private readonly _orderList: Order[] = [];
  // #endregion

  // #region private variables
  private _destroy$ = new Subject<void>();
  // #endregion

  // #region public variables
  _orderForm: FormGroup;
  get _burgersFormArray() {
    return this._orderForm.get('burgers') as FormArray;
  }
  // #endregion

  constructor(
    private fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _store: Store<{ order: Order }>
  ) {
    this._orderForm = this._buildOrderFormGroup();
    this._observeQuantity();
    this._observeState();
  }
  //#region Component lifecyle hook
  ngOnDestroy(): void {
    this._destroy$.next();
  }
  //#endregion

  //#region Template methods

  /**
   * Check for mediumRare formControl visibility
   * @param burgerForm target element of form array group
   * @returns
   */
  _checkRare(burgerForm: AbstractControl<any, any>) {
    const meatValue = burgerForm.get('meat')?.value;
    return meatValue === 'Manzo' || meatValue === 'Gluten free';
  }

  /**
   * Submit form hook
   */
  _onFormSubmit() {
    if (this._orderForm.valid) {
      this._storeEnabled
        ? this._store.dispatch(order({ order: this._orderForm.value }))
        : (this._orderList.push(this._orderForm.value),
          localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(this._orderList)));

      this._snackBar.open('Ordine salvato correttamente', 'Chiudi', {
        duration: 5000,
      });
    }
  }
  //#endregion

  //#region Private form methods

  /**
   * Build order form group with empty burgers form array
   * @returns order form group
   */
  private _buildOrderFormGroup() {
    const fb = this.fb;
    return fb.group({
      tableNumber: fb.control(null, [Validators.required, Validators.min(1)]),
      quantity: fb.control(null, [Validators.required, Validators.min(1)]),
      burgers: this.fb.array([]),
    });
  }
  /**
   * Build hamburger form group
   * @returns burger form group
   */
  private _buildHamburgerForm() {
    const fb = this.fb;
    const hf = fb.group({
      bread: fb.control(null, [Validators.required]),
      meat: fb.control(null, [Validators.required]),
      ingredients: fb.control(null),
      mediumRare: fb.control(false, [Validators.required]),
      note: fb.control(null, Validators.maxLength(50)),
    });
    return hf;
  }
  //#endregion

  //#region Private subscription methods

  /**
   * Observe quantity form control value changes
   */
  private _observeQuantity() {
    this._orderForm
      .get('quantity')
      ?.valueChanges.pipe(
        takeUntil(this._destroy$),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((val: number) => {
        if (!val || val < 0) {
          return;
        }
        if (val === this._burgersFormArray?.length) {
          return;
        }
        this._addOrRemoveBurgers(val);
        this._cd.markForCheck();
      });
  }
  /**
   * Observe application feature 'order' state
   */
  private _observeState() {
    if (this._storeEnabled) {
      this._store
        .select(orderStateSelector)
        .pipe(takeUntil(this._destroy$), pipeableOrders())
        .subscribe((val) => {
          console.log(val);
        });
    }
  }

  /**
   * Add o remove items from burgher form array dinamically
   * @param burgerNumber target numbers of burghers in form array
   */
  private _addOrRemoveBurgers(burgerNumber: number) {
    while (burgerNumber !== this._burgersFormArray?.length) {
      burgerNumber < this._burgersFormArray?.length
        ? this._burgersFormArray.removeAt(this._burgersFormArray?.length - 1)
        : this._burgersFormArray.push(this._buildHamburgerForm());
    }
  }
  //#endregion
}
