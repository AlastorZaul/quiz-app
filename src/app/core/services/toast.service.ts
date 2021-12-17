import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() { }

  show(text: string, options: any = {}) {
    this.toasts.push({ text, ...options });
  }

  showDanger(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-danger text-danger', ...options });
  }

  showWarning(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-warning text-warning', ...options });
  }

  showSuccess(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-success text-success', ...options });
  }

  showPrimary(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-primary text-primary', ...options });
  }

  showInfo(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-info text-info', ...options });
  }

  showDark(text: string, options: any = {}) {
    this.show(text, { classname: 'bg-dark text-light', ...options });
  }
}
