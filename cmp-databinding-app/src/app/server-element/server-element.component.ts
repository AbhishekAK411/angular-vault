import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element!: { type: string; name: string; content: string; };

  constructor() {
    console.log("constructor called.");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log("onInit called.");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called.");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called.");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called.");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called.");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called.");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called.");
  }
}
