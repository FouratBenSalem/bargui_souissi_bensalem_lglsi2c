import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-barre-menu',
  templateUrl: './barre-menu.component.html',
  styleUrls: ['./barre-menu.component.css']
})
export class BarreMenuComponent implements OnInit, AfterViewInit {
  // isReady = false;
  @ViewChild('theimage') theimage: ElementRef;
  @ViewChild('titreSite') titreSite: ElementRef;
  @ViewChild('legend') legend: ElementRef;

  constructor() {
  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    const images = [];


    images[1] = ['./assets/images/istic6.jpg',
      'Pour l’humain<br />et son devenir',
      ''
    ];

    images[2] = ['./assets/images/tunisie-apii-pepiniere.jpg',
      'Une université tournée vers l’international',
      ''
    ];

    images[3] = ['./assets/images/istic6.jpg',
      'Un institut supérieur ouvert sur son environnement',
      ''
    ];

    images[4] = ['./assets/images/istic3.jpg',
      'Une université engagée et solidaire',
      ''
    ];

    images[5] = ['src\assets\images\istic3.jpg',
      'Pour une vie de campus riche'
    ];

    images[6] = ['./assets/images\ISTIC_l_economiste_maghrebin.jpg',
      'Une recherche innovante et soutenable',
      ''
    ];

    images[7] = ['./assets/images/istic3.jpg',
      'Des formations accessibles à tous',
      ''
    ];

    var which = Math.floor(Math.random() * (images.length - 1) + 1);
    var img = document.getElementById('theimage');
    var title = document.getElementById('titreSite');
    console.log('title', title);
    if (images[which][1]) {
      this.titreSite.nativeElement.classList.add('activated');
    }
    var legend = document.getElementById('legend');

    this.theimage.nativeElement.src = images[which][0];
    this.titreSite.nativeElement.innerHTML = '<span>' + images[which][1] + '</span>';
    this.legend.nativeElement.innerHTML = images[which][2];
    // this.isReady = true;
  }
}
