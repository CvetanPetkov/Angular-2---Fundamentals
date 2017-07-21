import {Component} from '@angular/core';

const PLANES = [
  {
    id: 1,
    name: 'Gripen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1025448_A_Swedish_JAS-39_Gripen_returns_to_the_play' +
    '_areas_of_the_Arctic_Challenge_exercise_Sept._24%2C_2013.jpg/220px-1025448_A_Swedish_JAS-39_Gripen_returns_to_the_play' +
    '_areas_of_the_Arctic_Challenge_exercise_Sept._24%2C_2013.jpg',
    description: 'The Saab JAS 39 Gripen (English: "griffin"[Nb 3][6]) ' +
    'is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab. ' +
    'It was designed to replace the Saab 35 Draken and 37 Viggen in the Swedish Air Force (Flygvapnet). ' +
    'The Gripen has a delta wing and canard configuration with relaxed stability design and fly-by-wire flight controls. ' +
    'It is powered by the Volvo RM12, and has a top speed of Mach 2. Later aircraft are modified for NATO interoperability standards ' +
    'and to undertake in-flight refuelling.\n' +
    'In 1979, the Swedish government began development studies for an aircraft capable of fighter, attack and reconnaissance missions' +
    ' to replace the Saab 35 Draken and 37 Viggen. A new design from Saab was selected and developed as the JAS 39, first flying in 1988.' +
    ' Following two crashes during flight development and subsequent alterations to the aircraft\'s flight control software, the Gripen' +
    ' entered service with the Swedish Air Force in 1997. Upgraded variants, featuring more advanced avionics and adaptations for longer ' +
    'mission times, began entering service in 2003.\n' +
    'To market the aircraft internationally, Saab formed partnerships and collaborative efforts with multiple overseas aerospace ' +
    'companies. One example of such efforts was Gripen International, a joint partnership between Saab and BAE Systems formed in 2001. ' +
    'Gripen International was responsible for marketing the aircraft, and was heavily involved in the successful export of the type to' +
    ' South Africa; the organization was later dissolved amidst allegations of bribery being employed to secure foreign interest and' +
    ' sales. On the export market, the Gripen has achieved moderate success in sales to nations in Central Europe, South Africa and ' +
    'Southeast Asia; bribery has been suspected in some of these procurements, but authorities closed the investigation in 2009.[7]\n' +
    'A further version, designated Gripen JAS 39E/F, is under development as of 2014; it has been referred to as Gripen NG or Super-JAS.' +
    ' The changes include the adoption of a new powerplant, the General Electric F414G, an active electronically scanned array radar,' +
    ' and significantly increased internal fuel capacity. Saab has proposed other derivatives, including a navalised Sea Gripen ' +
    'for carrier operations and an optionally manned aircraft for unmanned operations. Sweden and Brazil have ordered the Gripen E/F and' +
    ' Switzerland initially selected it for procurement. As of 2013, more than 247 Gripens have been built.'
  },
  {
    id: 2,
    name: 'Raptor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Two_F-22_Raptor_in_flying.jpg/220px-Two_F-22_Raptor_in_flying.jpg',
    description: 'The Saab JAS 39 Gripen (English: "griffin"[Nb 3][6]) ' +
    'is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab. ' +
    'It was designed to replace the Saab 35 Draken and 37 Viggen in the Swedish Air Force (Flygvapnet). ' +
    'The Gripen has a delta wing and canard configuration with relaxed stability design and fly-by-wire flight controls. ' +
    'It is powered by the Volvo RM12, and has a top speed of Mach 2. Later aircraft are modified for NATO interoperability standards ' +
    'and to undertake in-flight refuelling.\n' +
    'In 1979, the Swedish government began development studies for an aircraft capable of fighter, attack and reconnaissance missions' +
    ' to replace the Saab 35 Draken and 37 Viggen. A new design from Saab was selected and developed as the JAS 39, first flying in 1988.' +
    ' Following two crashes during flight development and subsequent alterations to the aircraft\'s flight control software, the Gripen' +
    ' entered service with the Swedish Air Force in 1997. Upgraded variants, featuring more advanced avionics and adaptations for longer ' +
    'mission times, began entering service in 2003.\n' +
    'To market the aircraft internationally, Saab formed partnerships and collaborative efforts with multiple overseas aerospace ' +
    'companies. One example of such efforts was Gripen International, a joint partnership between Saab and BAE Systems formed in 2001. ' +
    'Gripen International was responsible for marketing the aircraft, and was heavily involved in the successful export of the type to' +
    ' South Africa; the organization was later dissolved amidst allegations of bribery being employed to secure foreign interest and' +
    ' sales. On the export market, the Gripen has achieved moderate success in sales to nations in Central Europe, South Africa and ' +
    'Southeast Asia; bribery has been suspected in some of these procurements, but authorities closed the investigation in 2009.[7]\n' +
    'A further version, designated Gripen JAS 39E/F, is under development as of 2014; it has been referred to as Gripen NG or Super-JAS.' +
    ' The changes include the adoption of a new powerplant, the General Electric F414G, an active electronically scanned array radar,' +
    ' and significantly increased internal fuel capacity. Saab has proposed other derivatives, including a navalised Sea Gripen ' +
    'for carrier operations and an optionally manned aircraft for unmanned operations. Sweden and Brazil have ordered the Gripen E/F and' +
    ' Switzerland initially selected it for procurement. As of 2013, more than 247 Gripens have been built.'
  },
  {
    id: 3,
    name: 'Fulcrum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Slovak_Air_Force_MiG-29AS.JPG/220px-Slovak_Air_Force_MiG-29AS.JPG',
    description: 'The Saab JAS 39 Gripen (English: "griffin"[Nb 3][6]) ' +
    'is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab. ' +
    'It was designed to replace the Saab 35 Draken and 37 Viggen in the Swedish Air Force (Flygvapnet). ' +
    'The Gripen has a delta wing and canard configuration with relaxed stability design and fly-by-wire flight controls. ' +
    'It is powered by the Volvo RM12, and has a top speed of Mach 2. Later aircraft are modified for NATO interoperability standards ' +
    'and to undertake in-flight refuelling.\n' +
    'In 1979, the Swedish government began development studies for an aircraft capable of fighter, attack and reconnaissance missions' +
    ' to replace the Saab 35 Draken and 37 Viggen. A new design from Saab was selected and developed as the JAS 39, first flying in 1988.' +
    ' Following two crashes during flight development and subsequent alterations to the aircraft\'s flight control software, the Gripen' +
    ' entered service with the Swedish Air Force in 1997. Upgraded variants, featuring more advanced avionics and adaptations for longer ' +
    'mission times, began entering service in 2003.\n' +
    'To market the aircraft internationally, Saab formed partnerships and collaborative efforts with multiple overseas aerospace ' +
    'companies. One example of such efforts was Gripen International, a joint partnership between Saab and BAE Systems formed in 2001. ' +
    'Gripen International was responsible for marketing the aircraft, and was heavily involved in the successful export of the type to' +
    ' South Africa; the organization was later dissolved amidst allegations of bribery being employed to secure foreign interest and' +
    ' sales. On the export market, the Gripen has achieved moderate success in sales to nations in Central Europe, South Africa and ' +
    'Southeast Asia; bribery has been suspected in some of these procurements, but authorities closed the investigation in 2009.[7]\n' +
    'A further version, designated Gripen JAS 39E/F, is under development as of 2014; it has been referred to as Gripen NG or Super-JAS.' +
    ' The changes include the adoption of a new powerplant, the General Electric F414G, an active electronically scanned array radar,' +
    ' and significantly increased internal fuel capacity. Saab has proposed other derivatives, including a navalised Sea Gripen ' +
    'for carrier operations and an optionally manned aircraft for unmanned operations. Sweden and Brazil have ordered the Gripen E/F and' +
    ' Switzerland initially selected it for procurement. As of 2013, more than 247 Gripens have been built.'
  }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ul class='planes'>
      <li *ngFor='let plane of planes'
          (click)='viewDetails(plane)'>
        <span class='badge'>{{plane.id}}</span>
        {{plane.name}}
      </li>
    </ul>
    <div class='description-block' [style.color]='fontColor' [style.background-color]='bckgrColor' *ngIf='isClicked'>
      <span class='click-span' (click)='decreaseFontSize()'>decrease font size</span>
      <span class='click-span' (click)='increaseFontSize()'>increase font size</span>
      <div class='description-text' [style.font-size]='fontSize'>{{description}}</div>
      <div class='plane-img-container'>
        <img class='plane-img' src='{{image}}' *ngIf='isShowImage' />
        <span class='click-span' (click)='showImage()' *ngIf='isDisplayViewPlane'>click to view plane photo</span>
        <span class='click-span' (click)='hideImage()' *ngIf='!isDisplayViewPlane'>click to hide plane photo</span>
      </div>
      <div>
        <span class='click-span' (click)='changeTextColor()'>change text color</span>
        <span class='click-span' (click)='changeBckgrColor()'>change background color</span>
      </div>
    </div>
  `,
  styles: [`
    .description-block {
      width: 60%;
      position: absolute;
      top: 20px;
      right: 50px;
      border: solid 2px chocolate;
      border-radius: 10px;
      padding: 15px;
    }

    .plane-img-container {
      text-align: center;
    }

    .plane-img {
      display: inline-block;
      margin-top: 15px;
    }

    .click-span {
      display: block;
      color: blue;
      margin: 15px;
      cursor: pointer;
    }

    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }

    .planes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }

    .planes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }

    .planes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }

    .planes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }

    .planes .text {
      position: relative;
      top: -3px;
    }

    .planes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'My Planes';
  planes = PLANES;
  fontSize = '16px';
  isClicked = false;
  isShowImage = false;
  isDisplayViewPlane = true;
  description = null;
  image = null;
  fontColor = 'black';
  colorIndex = 0;
  bckgrColor = 'white';
  bckgrIndex = 0;

  viewDetails(plane) {
    this.isClicked = true;
    this.description = plane.description;
    this.image = plane.image;
  }

  showImage() {
    this.isShowImage = true;
    this.isDisplayViewPlane = false;
  }

  hideImage() {
    this.isShowImage = false;
    this.isDisplayViewPlane = true;
  }

  increaseFontSize() {
    let currFontSize = Number(this.fontSize.slice(0, this.fontSize.indexOf('p')));
    if (currFontSize >= 32) {
      return;
    }
    currFontSize += 4;
    this.fontSize = currFontSize.toString() + 'px';
  }

  decreaseFontSize() {
    let currFontSize = Number(this.fontSize.slice(0, this.fontSize.indexOf('p')));
    if (currFontSize <= 8) {
      return;
    }
    currFontSize -= 4;
    this.fontSize = currFontSize.toString() + 'px';
  }

  changeTextColor() {
    const colors = ['black', 'cyan', 'magenta', 'yellow', 'blue', 'green'];
    if (this.colorIndex >= 5) {
      this.colorIndex = -1;
    }
    this.colorIndex++;
    this.fontColor = colors[this.colorIndex];
  }

  changeBckgrColor() {
    const colors = ['white', 'gray', 'pink', 'beige', 'purple', 'yellow'];
    if (this.bckgrIndex >= 5) {
      this.bckgrIndex = -1;
    }
    this.bckgrIndex++;
    this.bckgrColor = colors[this.bckgrIndex];
  }
}
