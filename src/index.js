import './styles/global.css';
import { someFunction } from './modules/api';
import { renderWeatherDisplay } from './modules/ui';



window.onload = renderWeatherDisplay
someFunction("copenhagen")

