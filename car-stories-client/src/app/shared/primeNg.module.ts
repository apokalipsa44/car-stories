import { NgModule } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule, Header, Footer } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';


@NgModule({
  imports: [
    // Footer,
    // Header,
    InputMaskModule,
    SharedModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    MenubarModule,
    ButtonModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    CalendarModule,
    TabViewModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
    InputTextModule,
    // ConfirmDialog,
    // Dialog,
  ],
  exports: [
    // Footer,
    // Header,
    InputMaskModule,
    SharedModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    MenubarModule,
    ButtonModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    CalendarModule,
    TabViewModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
    InputTextModule,
    // ConfirmDialog,
    // Dialog,
  ]
})
export class PrimeNgModule {
}
