export class HomeLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <div class="layout-app">
    <header class="header-app">

        <navbar-customa></navbar-customa>
        <navbar-pure></navbar-pure>
    </header>
    
    <main class="content-app">
        <section class="section-app">
        
        </section>

        <section class="section-app">
        <h2>Todo type</h2>
        <custom-todo></custom-todo>
        <todo-styleb></todo-styleb>
        </section>

        <section class="section-app">

        <tab-custom></tab-custom>

        
        </section>
    </main>
    <marquee behavior="" direction="">do not worries to much just let it flow</marquee>
    <footer class="footer-app">footer-content</footer>
</div>
    
    `
  }
}
customElements.define('app-layout', HomeLayout)
