import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Header } from "./components/header/header";
import { ScrollListener } from './directives/scroll-listener';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Header, ScrollListener],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-responsive-template-business-app';
}
