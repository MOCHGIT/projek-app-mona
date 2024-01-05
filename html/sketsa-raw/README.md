**snippet vscode mona custom**
## HTML
boilerplate html semantic mona vscode `mon`
command untuk image banyak di snippet `r`


## CSS
`marquee` tag ?
shadow root,fragment element default
## JS
arrow/anonymous function    `anfn /af`
arrow/anonymous function    `caf`
create element `cel`
create function `cfn`
eventlistener `click`
if else `ife`

methode `met`
DOM `dom`
fetch `fet fetch`
forEach `fe`


`perbedaan constructor(){super()} dan connectedCallback dalam vanilla web component`
- constructor (style terisolasi dari css global tetapi bisa append childElement di Html, sebaliknya
- connectedCallback style bisa dihubungkan dengan CSS global teteapi tidak dengan elemen child)
  
  contoh :
  constructor(){super()}                            connectedCallback(){}

    customelement > h1 + p                           customelement > h1 + p 

    style dengan CSS global ❌                          style dengan CSS global `✔
    elemen child te render di browser ✔                 elemen child te render di browser `  ❌                       