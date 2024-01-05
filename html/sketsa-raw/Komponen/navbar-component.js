export class NavbarPure extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <nav class="navigation">
    <div class="brand"><a href="#"><img src="" alt="logo" width="100"></a></div>
    <ul class="menu">
        <li class="nav-list"><a href="">item 1</a></li>
        <li class="nav-list"><a href="">item 2</a></li>
        <li class="nav-list"><a href="">item 3</a></li>
        <li class="nav-list"><a href="">item 4</a></li>
    </ul>
    <div class="menu-collapse">
        <div class="item-collapse">
            <ul>
                <li><a href="">collapse-item 1</a></li>
                <li><a href="">collapse-item 2</a></li>
                <li><a href="">collapse-item 3</a></li>
            </ul>
        </div>
    </div>

    <div class="social-media">
        <i>Gmail</i>
        <i>linkedin</i>
        <i>Github</i>
        <i>Codepen</i>
    </div>
    <div class="hamburger">
        <span class="burger"></span>
        <span class="burger"></span>
        <span class="burger"></span>
    </div>
</nav>
    
    `
  }
}
customElements.define('navbar-pure', NavbarPure);



// <!-- ======================================{here}============================================================== -->





