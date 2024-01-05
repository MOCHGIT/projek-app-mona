import { HomeLayout } from './pages/app-layout.js'
import { NavbarPure } from './Komponen/navbar-component.js'
import { TodoCustom } from './Komponen/CustomComponents/Todo/TodoCusto.mjs'
import { TodoTypeB } from './Komponen/CustomComponents/Todo/TodoCustom-B.js'
import { NavbarCustomA } from './Komponen/CustomComponents/Navbar/NavbarCustomA.js'
import { TabsCustom } from './Komponen/CustomComponents/Tabs/TabsCustom.js'

const root = document.querySelector('#komponen')

// const navbars = document.createElement('navbar-pure')
// const navbar = new NavbarPure();
// document.body.append("navbar")

const myLayoutApp = new HomeLayout()
document.body.insertAdjacentElement('afterbegin', myLayoutApp) //document.createElement('app-layout')

// myLayoutApp.append(navbar)

root.append(myLayoutApp)
