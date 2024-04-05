import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-feature-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('backgroundVideo', { static: false })
  videoRef!: ElementRef<HTMLVideoElement>;
  showPlayButton: boolean = true;
  @Input() icon: string='';
  @Input() img: string='';
  @Input() creartLinkText: any='';
  @Input() featureName: any='';
  @Input() subtitle: any='';

  constructor(public dialog: MatDialog,private router:Router) {}
  ngOnInit(): void {
  }
  openCreateCaseDialog(event:Event | null): void {
    this.router.navigate(['create-case']);
  }
  
}
