import { AppComponent} from './app.component';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiData;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.warn(data)
      this.apiData = data;
    })
  }

}
