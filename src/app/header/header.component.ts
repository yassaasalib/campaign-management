  // import { Component, EventEmitter, Output } from '@angular/core';
  // import { faMagnifyingGlass } from '@fortawesome/sharp-solid-svg-icons';
  // import type { IconProp } from '@fortawesome/fontawesome-svg-core';

  // @Component({
  //   selector: 'app-header',
  //   templateUrl: './header.component.html',
  //   styleUrls: ['./header.component.sass']
  // })
  // export class HeaderComponent {
  //   @Output() searchChanged = new EventEmitter<string>();
  //   searchTerm: string = '';
  //   faMagnifyingGlass: IconProp =faMagnifyingGlass

  //   onSearchInput() {
  //     this.searchChanged.emit(this.searchTerm);
  //   }
  //   isInputFocused: boolean = false

  //   onFocus() {
  //     this.isInputFocused = true;
  //   }

  //   onBlur() {
  //     this.isInputFocused = false;
  //   }
  // }
  import { Component, EventEmitter, Output } from '@angular/core';
  import { faMagnifyingGlass } from '@fortawesome/sharp-solid-svg-icons';
  import type { IconProp } from '@fortawesome/fontawesome-svg-core';
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
  })
  export class HeaderComponent {
    @Output() searchChanged = new EventEmitter<string>();
    searchTerm: string = '';
    faMagnifyingGlass: IconProp = faMagnifyingGlass;
    isInputFocused: boolean = false;
  
    onSearchInput() {
      this.searchChanged.emit(this.searchTerm);
    }
  
    onFocus() {
      this.isInputFocused = true;
    }
  
    onBlur() {
      this.isInputFocused = false;
    }
  }
  