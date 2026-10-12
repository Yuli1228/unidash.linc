 <div class="dashboard-grid">
                <article class="panel">
                    <div class="panel-heading">
                        <p class="eyebrow">Divisas</p>
                        <h3 class="panel-title">Tipo de Cambio desde
                            <samp id="base-currency-label">MXM</samp>
                        </h3>
                    </div>
                    <button class="link-button" data-go-view="currency">Abrir Modulo</button>
                    <div class="chart-wrapper compact-chart">
                        <canvas id="dashboard-rates" class="rate-grid"></canvas>
                    </div>
                </article>
                <article class="panel">
                    <div class="panel-heading">
                        <p class="eyebrow">Noticias</p>
                        <h3 class="panel-title">Noticias Recientes</h3>
                    </div>
                    <button class="link-button" data-go-view="news">Ver Noticias</button>
                    <div class="chart-wrapper compact-chart">
                        <canvas id="dashboard-news" class="stack-list"></canvas>
                    </div>
                </article>
            </div>
        </section>

        

        <div class="dashboard-grid">
                    <article class="panel">
                        <div class="panel-heading">
                            <p class="eyebrow">Divisas</p>
                            <h3 class="panel-title">Tipo de Cambio desde
                                <samp id="base-currency-label">MXM</samp>
                            </h3>
                        </div>
                        <button class="link-button" data-go-view="currency">Abrir Modulo</button>
                        <div class="chart-wrapper compact-chart">
                            <canvas id="dashboard-rates" class="rate-grid"></canvas>
                        </div>
                    </article>
                    <article class="panel">
                        <div class="panel-heading">
                            <p class="eyebrow">Noticias</p>
                            <h3 class="panel-title">Noticias Recientes</h3>
                        </div>
                        <button class="link-button" data-go-view="news">Ver Noticias</button>
                        <div class="chart-wrapper compact-chart">
                            <canvas id="dashboard-news" class="stack-list"></canvas>
                        </div>
                    </article>
                </div>
            </section>













````
import { initTasksVisualDemo } from "./modules/tasks.modules.js";

const viewTitles ={
    dashboard: ['Resumen Visual', 'Dashboard'],
    tasks: ['Componentes Visual', 'Tareas'],
    calendar: ['Componentes Visual', 'Finanzas'],
    settings: ['Visualizacion', 'Estadisticas'],
    currency: [' Componente Visual', 'Divisas'],
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
    document.querySelectorAll(' [data-view]'). forEach( (b) => b.addEventListener('click', () => setView(b.dataset.view)))
    document.querySelectorAll( ' [data-go-view]'). forEach( (b) => b.addEventListener('click', () => setView(b.dataset.goView) ))
    document.querySelector('#mobile-menu-button') .addEventListener('click', () => document. querySelector( '#sidebar'). classList. toggle( 'open' ))
}

function bootstrap () {
    initNavigation()
    initTasksVisualDemo()
    // Faltan funciones de los demás módulos
    document. queryselector('#toast') .textContent = 'Sesion 1 - Mock y UI/UX'
}

```