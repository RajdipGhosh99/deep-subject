import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  subject$ = new Subject<any>()
  bSubject$ = new BehaviorSubject<any>(null)
  aSubject$ = new AsyncSubject<any>()
  rSubject$ = new ReplaySubject<any>(1)

  constructor(){

  }

  ngOnInit(): void {


    this.bSubject$.next(2)
    this.bSubject$.next(3)
    this.bSubject$.next(4)

    this.bSubject$.subscribe(v => {
      console.log("sub1", v);
    })

  }



}
