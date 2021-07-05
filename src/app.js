import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { DomEvents } from "../Events/DomEvents";
import { Layout } from "../Layouts/Layout";
import { Renderer } from "../Components/Renderer";

const layout = new Layout();

layout.render()
Renderer.render();

DomEvents.eventListeners();