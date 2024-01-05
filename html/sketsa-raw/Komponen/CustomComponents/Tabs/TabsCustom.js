export class TabsCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


<link rel="stylesheet" href="./Komponen/CustomComponents/1CSS-CustomComponent/TabsCustom.css">

    
    <div class="container-tabcustom">
        <h2>TABS COMPONENT #1</h2>
        <div class="tabs tabs--1">
            <ol class="tabs__items" role="tablist">
                <!-- ADD TABS IN THE tabs ARRAY (script.js) -->
            </ol>
            <div class="tabs__content-container">
                <!-- ADD CONTENT IN THE tabs ARRAY (script.js) -->
            </div>
        </div>

        
      
        <h2>TABS COMPONENT #2</h2>

        <div class="tabs tabs--2">
            <ol class="tabs__items" role="tablist">
                <!-- ADD TABS IN THE tabs ARRAY (script.js) -->
            </ol>
            <div class="tabs__content-container">
                <!-- ADD CONTENT IN THE tabs ARRAY (script.js) -->
            </div>
        </div>
    </div>
`
    // Load the utility script
    const tabcustom = document.querySelector('tab-custom')
    const script = document.createElement('script')
    script.src =
      './Komponen/CustomComponents/2Utility-CustomComponent/tabs-utility.js'

    script.type = 'module' //ini wajib export module ke module, pertanyaanya apkah efisien dan performa?

    tabcustom.append(script)
  }
}
customElements.define('tab-custom', TabsCustom)
