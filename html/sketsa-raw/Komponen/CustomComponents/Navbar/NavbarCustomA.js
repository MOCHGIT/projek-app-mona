export class NavbarCustomA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
    <link rel="stylesheet" href="./Komponen/CustomComponents/1CSS-CustomComponent/NavbarCustomA.css">

    <div class="container-customnavbar">
    <a href="#" class="logo">
        <img src="../../assets/slbng/logo-slbng.svg" width="100px" alt="">
    </a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>


    `
    window.addEventListener('scroll', function () {
      let header = document.querySelector('.container-customnavbar')
      header.classList.toggle('sticky', window.scrollY > 0)
    })
  }
}
customElements.define('navbar-customa', NavbarCustomA)
