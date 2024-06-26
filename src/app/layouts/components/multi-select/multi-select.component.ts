import { Component, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Output() selectedItemsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  isSelectWrapVisible: boolean = false;
  selectedItems: string[] = [];
  keyword: string = '';

  items: { value: string; label: string }[] = [
    { value: 'Prakraykarn Wongkuenkaew', label: 'Prakraykarn Wongkuenkaew' },
    { value: 'Phakkhawat Teksuwan', label: 'Phakkhawat Teksuwan' },
    { value: 'Khanut Duongkaew', label: 'Khanut Duongkaew' },
    { value: 'Saksikorn Thoumpudsa', label: 'Saksikorn Thoumpudsa' },
    { value: 'Peerawit Suktorn', label: 'Peerawit Suktorn' },
    { value: 'Phanuwat N.', label: 'Phanuwat N.' },
    { value: 'Comson Choochomklin', label: 'Comson Choochomklin' },
    { value: 'Dumrongrit Yensai', label: 'Dumrongrit Yensai' },
    { value: 'Pornnuwat Kaewrat', label: 'Pornnuwat Kaewrat' },
    { value: 'Adisak Wongsing', label: 'Adisak Wongsing' },
    { value: 'Waiyavit Nonviangkae', label: 'Waiyavit Nonviangkae' },
    { value: 'Sujittra Nukmai', label: 'Sujittra Nukmai' },
    { value: 'Kittiya Mahachai', label: 'Kittiya Mahachai' },
    { value: 'Theeranai Ratsirikon', label: 'Theeranai Ratsirikon' },
    { value: 'Thanaphum Kawijai', label: 'Thanaphum Kawijai' },
    { value: 'Surachest Klompong', label: 'Surachest Klompong' },
    { value: 'Piyatat Nopchao', label: 'Piyatat Nopchao' },
    { value: 'Nuntawut Chuchomklin', label: 'Nuntawut Chuchomklin' },
    { value: 'Teerapong Chan-on', label: 'Teerapong Chan-on' },
    { value: 'Peerawit SaeLim', label: 'Peerawit SaeLim' },
    { value: 'Pricha Detma', label: 'Pricha Detma' },
    { value: 'Panipak Phansoda', label: 'Panipak Phansoda' },
    { value: 'Supattra Taweekote', label: 'Supattra Taweekote' },
    { value: 'Pakkapon Wongyai', label: 'Pakkapon Wongyai' },
    { value: 'Sahachat Tanomgen', label: 'Sahachat Tanomgen' },
    { value: 'Wong Sye Shin', label: 'Wong Sye Shin' },
    { value: 'Admin Naja', label: 'Admin Naja' },
    { value: 'Wimon Sriamprai', label: 'Wimon Sriamprai' },
    { value: 'Siriyaporn Klangla', label: 'Siriyaporn Klangla' },
    { value: 'Supakin Sriboonvong', label: 'Supakin Sriboonvong' },
    { value: 'Amnat Thongpasert', label: 'Amnat Thongpasert' },
    { value: 'Kamonphan', label: 'Kamonphan' },
    { value: 'Chanachai Viangsamut', label: 'Chanachai Viangsamut' },
    { value: 'Atchareeya Krutsangwal', label: 'Atchareeya Krutsangwal' },
    { value: 'Starkrit Nilapatsookwised', label: 'Starkrit Nilapatsookwised' },
    { value: 'Sutalinee Saiklin', label: 'Sutalinee Saiklin' },
    { value: 'Mintapong Sareeh', label: 'Mintapong Sareeh' },
    { value: 'Natthakid Nambut', label: 'Natthakid Nambut' },
    { value: 'Worawat Kanchan', label: 'Worawat Kanchan' },
    { value: 'Teerapon Singda', label: 'Teerapon Singda' },
    { value: 'Tadtai Ribruamsap', label: 'Tadtai Ribruamsap' },
    { value: 'Sittiphorn Yamsri', label: 'Sittiphorn Yamsri' },
    { value: 'Suchat Sankasern', label: 'Suchat Sankasern' },
    { value: 'Patcharida Ngoenngam', label: 'Patcharida Ngoenngam' },
    { value: 'Chinnawat Pana', label: 'Chinnawat Pana' },
    { value: 'Papawadee Paungdokma', label: 'Papawadee Paungdokma' },
    { value: 'Vutthipong Banthupa', label: 'Vutthipong Banthupa' },
    { value: 'Panjapon Sriwanish', label: 'Panjapon Sriwanish' },
    { value: 'Withun Siraphatsa', label: 'Withun Siraphatsa' },
    { value: 'Pipat Klomkluam', label: 'Pipat Klomkluam' },
    { value: 'Udomchai Chaiyo', label: 'Udomchai Chaiyo' },
    { value: 'Kamonporn Pothisen', label: 'Kamonporn Pothisen' },
    { value: 'Sirikhwan Kinchun', label: 'Sirikhwan Kinchun' },
    { value: 'Noppadon Khantipong', label: 'Noppadon Khantipong' },
    { value: 'Isaraporn Namchan', label: 'Isaraporn Namchan' },
    { value: 'Sujin Thawarn', label: 'Sujin Thawarn' },
    { value: 'Pongsathorn Thanommit', label: 'Pongsathorn Thanommit' },
    { value: 'Phasin Maiseekhiao', label: 'Phasin Maiseekhiao' },
    { value: 'Panyakorn Rojanapan', label: 'Panyakorn Rojanapan' },
    { value: 'Rachata Chuenchom', label: 'Rachata Chuenchom' },
    { value: 'Ajalaya Kaenkaeo', label: 'Ajalaya Kaenkaeo' }
    
  ];

  _items: { value: string; label: string }[] = [
    { value: 'Prakraykarn Wongkuenkaew', label: 'Prakraykarn Wongkuenkaew' },
    { value: 'Phakkhawat Teksuwan', label: 'Phakkhawat Teksuwan' },
    { value: 'Khanut Duongkaew', label: 'Khanut Duongkaew' },
    { value: 'Saksikorn Thoumpudsa', label: 'Saksikorn Thoumpudsa' },
    { value: 'Peerawit Suktorn', label: 'Peerawit Suktorn' },
    { value: 'Phanuwat N.', label: 'Phanuwat N.' },
    { value: 'Comson Choochomklin', label: 'Comson Choochomklin' },
    { value: 'Dumrongrit Yensai', label: 'Dumrongrit Yensai' },
    { value: 'Pornnuwat Kaewrat', label: 'Pornnuwat Kaewrat' },
    { value: 'Adisak Wongsing', label: 'Adisak Wongsing' },
    { value: 'Waiyavit Nonviangkae', label: 'Waiyavit Nonviangkae' },
    { value: 'Sujittra Nukmai', label: 'Sujittra Nukmai' },
    { value: 'Kittiya Mahachai', label: 'Kittiya Mahachai' },
    { value: 'Theeranai Ratsirikon', label: 'Theeranai Ratsirikon' },
    { value: 'Thanaphum Kawijai', label: 'Thanaphum Kawijai' },
    { value: 'Surachest Klompong', label: 'Surachest Klompong' },
    { value: 'Piyatat Nopchao', label: 'Piyatat Nopchao' },
    { value: 'Nuntawut Chuchomklin', label: 'Nuntawut Chuchomklin' },
    { value: 'Teerapong Chan-on', label: 'Teerapong Chan-on' },
    { value: 'Peerawit SaeLim', label: 'Peerawit SaeLim' },
    { value: 'Pricha Detma', label: 'Pricha Detma' },
    { value: 'Panipak Phansoda', label: 'Panipak Phansoda' },
    { value: 'Supattra Taweekote', label: 'Supattra Taweekote' },
    { value: 'Pakkapon Wongyai', label: 'Pakkapon Wongyai' },
    { value: 'Sahachat Tanomgen', label: 'Sahachat Tanomgen' },
    { value: 'Wong Sye Shin', label: 'Wong Sye Shin' },
    { value: 'Admin Naja', label: 'Admin Naja' },
    { value: 'Wimon Sriamprai', label: 'Wimon Sriamprai' },
    { value: 'Siriyaporn Klangla', label: 'Siriyaporn Klangla' },
    { value: 'Supakin Sriboonvong', label: 'Supakin Sriboonvong' },
    { value: 'Amnat Thongpasert', label: 'Amnat Thongpasert' },
    { value: 'Kamonphan', label: 'Kamonphan' },
    { value: 'Chanachai Viangsamut', label: 'Chanachai Viangsamut' },
    { value: 'Atchareeya Krutsangwal', label: 'Atchareeya Krutsangwal' },
    { value: 'Starkrit Nilapatsookwised', label: 'Starkrit Nilapatsookwised' },
    { value: 'Sutalinee Saiklin', label: 'Sutalinee Saiklin' },
    { value: 'Mintapong Sareeh', label: 'Mintapong Sareeh' },
    { value: 'Natthakid Nambut', label: 'Natthakid Nambut' },
    { value: 'Worawat Kanchan', label: 'Worawat Kanchan' },
    { value: 'Teerapon Singda', label: 'Teerapon Singda' },
    { value: 'Tadtai Ribruamsap', label: 'Tadtai Ribruamsap' },
    { value: 'Sittiphorn Yamsri', label: 'Sittiphorn Yamsri' },
    { value: 'Suchat Sankasern', label: 'Suchat Sankasern' },
    { value: 'Patcharida Ngoenngam', label: 'Patcharida Ngoenngam' },
    { value: 'Chinnawat Pana', label: 'Chinnawat Pana' },
    { value: 'Papawadee Paungdokma', label: 'Papawadee Paungdokma' },
    { value: 'Vutthipong Banthupa', label: 'Vutthipong Banthupa' },
    { value: 'Panjapon Sriwanish', label: 'Panjapon Sriwanish' },
    { value: 'Withun Siraphatsa', label: 'Withun Siraphatsa' },
    { value: 'Pipat Klomkluam', label: 'Pipat Klomkluam' },
    { value: 'Udomchai Chaiyo', label: 'Udomchai Chaiyo' },
    { value: 'Kamonporn Pothisen', label: 'Kamonporn Pothisen' },
    { value: 'Sirikhwan Kinchun', label: 'Sirikhwan Kinchun' },
    { value: 'Noppadon Khantipong', label: 'Noppadon Khantipong' },
    { value: 'Isaraporn Namchan', label: 'Isaraporn Namchan' },
    { value: 'Sujin Thawarn', label: 'Sujin Thawarn' },
    { value: 'Pongsathorn Thanommit', label: 'Pongsathorn Thanommit' },
    { value: 'Phasin Maiseekhiao', label: 'Phasin Maiseekhiao' },
    { value: 'Panyakorn Rojanapan', label: 'Panyakorn Rojanapan' },
    { value: 'Rachata Chuenchom', label: 'Rachata Chuenchom' },
    { value: 'Ajalaya Kaenkaeo', label: 'Ajalaya Kaenkaeo' }
    
  ];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.listen('document', 'click', (event: Event) => this.onClickOutside(event));
  }

  toggleSelectWrap() {
    this.isSelectWrapVisible = !this.isSelectWrapVisible;    
  }

  onClickOutside(event: Event) {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      (event.target as HTMLElement)?.className !== 'show-select' &&
      (event.target as HTMLElement)?.tagName !== 'LABEL'
    ) {
      this.isSelectWrapVisible = false;
    }
    
  }

  toggleItem(itemValue: string) {
    const index = this.selectedItems.indexOf(itemValue);
    if (index === -1) {
      this.selectedItems.push(itemValue);
    } else {
      this.selectedItems.splice(index, 1);
    }
    this.selectedItemsChange.emit(this.selectedItems); // Emit the updated selectedItems array
  }

  removeItem(itemValue: string) {
    const index = this.selectedItems.indexOf(itemValue);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      this.selectedItemsChange.emit(this.selectedItems); // Emit the updated selectedItems array
    }
  }

  filter() {
    if (this.keyword != '') {
      Object.assign(this.items, this._items);
      this.items = this.items.filter((item) => {
        if (item.value !== null) {
          return (
            item.value.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
          );
        }
        return false;
      });
    }
    else {
      this.items = this._items;
    }
  }
}
