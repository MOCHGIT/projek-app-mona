


#h1 ctrl+shift V  for previw markdown
1. clone noid studio app wordpress convert ke pure html js css 
2. Hasil convert rubah ke react dan next js
3. jika memungkinkan oba deploy ke vercel untuk a/b testing

12 dec 2023  03:36 WIB  || beres => refactor & styling {pure basic html-css-js}

`disable right click`
<body oncontextmenu="return false">
    <button >haha</button>
</body>

`json`
console.log(JSON.stringify({name:"aria",age:23}),null,'\t');


props = properti || html = attr

`CSS new Feature`
:selection{}
font google : cairo,inter, bebas nue
icon : boxicon, icon8
css nesting sudah bisa native tapi tetap output false positive

`other dev`
cody Ai
live Saas preview
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

compiler c++

`troubleshooting`
1. scroll to top gunakan layout kiri dan kanan , manipulasi DOM ketika di scroll dan mencapai ketinggian tertentu maka pop up muncul beri css positition fix jangna absolute.
2. onscroll, custom fungsi, 
3. export function => import {name}     || export default =>  import name

[version 1.1.0] tambahkan fitur scroll on top dan scroll change nav menu background  || 


`scrollbar trik`
.parent {
  width: 200px; /* Sesuaikan dengan lebar yang diinginkan */
  height: 200px; /* Sesuaikan dengan tinggi yang diinginkan */
  overflow: hidden; /* Menyembunyikan scrollbar */
  position: relative; /* Penting untuk child element */
}

.child {
  width: 100%; /* Sesuaikan dengan lebar yang diinginkan */
  height: 1000px; /* Sesuaikan dengan tinggi yang diinginkan */
  overflow: auto; /* Membuat scrollbar muncul hanya jika diperlukan */
  position: absolute; /* Penting untuk child element */
  top: 0; /* Menempatkan child element di bagian atas */
  left: 0; /* Menempatkan child element di bagian kiri */
}

`custom macOs scrollbar`
body {
  /* Menyembunyikan scrollbar tetapi tetap mempertahankan fungsinya */
  /* Warna thumb dan track disetel menjadi transparan */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Warna thumb dan track disetel menjadi transparan */
}

/* Menyesuaikan tampilan scrollbar seperti di macOS */
/* Hanya berlaku untuk browser Safari dan Chrome di macOS */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

`glass morphism macos`
.container {
  background-color: rgba(255, 255, 255, 0.2); /* Warna latar belakang dengan transparansi */
  backdrop-filter: blur(10px); /* Efek blur pada latar belakang */
  border-radius: 10px; /* Membuat sudut container menjadi melengkung */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Efek bayangan pada container */
}


`                <div class="item-sidebar col">
                    <div class="side-menu-title pt-5">Menu</div>
                    <div class="side-menu-list row ">
                        <a href="" class="pt-2">Dashboard</a>
                        <a href="" class="">
                            <img width="30" height="30" src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
                                alt="adobe-illustrator--v1" />
                            Illustrator</a>
                        <a href="" class="">
                            <img width="30" height="30" src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
                                alt="adobe-photoshop--v1" />
                            Photosop</a>
                        <a href="" 
                            <img width="30" height="30" src="https://img.icons8.com/color/30/adobe-indesign--v1.png"
                                alt="adobe-indesign--v1" />
                            Indesign</a>
                        <a href="">
                            <img width="30" height="30" src="https://img.icons8.com/color/30/obsidian.png" alt="obsidian" />
                            Obsidian</a>
                    </div>
                    <hr>
                </div>`