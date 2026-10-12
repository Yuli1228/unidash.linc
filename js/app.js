import { initTasksVisualDemo } from "./modules/tasks.modules.js";

const viewTitles ={
    dashboard: ['Resumen Visual', 'Dashboard'],
    tasks: ['Componentes Visual', 'Tareas'],
    calendar: ['Componentes Visual', 'Finanzas'],
    settings: ['Visualizacion', 'Estadisticas'],
    currency: ['Componente Visual', 'Divisas'],
    news: ['Componente Visual', 'Noticias'],
}

function setView(name) {
    document.querySelectorAll('.view-section').forEach((s) => s.classList.remove('active'))
    document.querySelector(`#view-${name}`)?.classList.add('active')
    document.querySelector('.nav-item').forEach((b) => b.classList.toggle('active', b.dataset.view === name))
    const [e, t] = viewTitles[name] || viewTitles.dashboard
    document.querySelector('#page-eyebrow').textContent = e
    document.querySelector('#page-title').textContent = t
    document.querySelector('#sidebar').classList.remove('open')
}

function initNavigation () {
    document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)))
    document.querySelectorAll('[data-go-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.goView) ))
    document.querySelector('#mobile-menu-button').addEventListener('click', () => document.querySelector( '#sidebar').classList.toggle('open'))
}

function bootstrap () {
    initNavigation()
    initTasksVisualDemo()
    // Faltan funciones de los demás módulos
    document.querySelector('#toast').textContent = 'Sesion 1 - Mock y UI/UX'
}

bootstrap()