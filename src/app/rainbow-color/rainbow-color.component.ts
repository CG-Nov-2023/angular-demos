import { Component } from '@angular/core';

@Component({
  selector: 'rainbow-color',
  templateUrl: './rainbow-color.component.html',
  styleUrl: './rainbow-color.component.css'
})
export class RainbowColorComponent {
  rainbowColors: string[] = ["VIOLET", 
                            "INDIGO", 
                            "BLUE", 
                            "YELLOW", 
                            "GREEN",
                            "ORANGE",
                            "RED"];
}
