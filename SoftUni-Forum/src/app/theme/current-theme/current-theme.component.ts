import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) { }
  theme = {} as Theme;
  currId: string | null = '';

  id = this.route.paramMap.subscribe(params => {

    this.currId = params.get('themeId');

    this.api.getTheme(this.currId).subscribe(theme => {
      this.theme = theme
    });
  })


}
