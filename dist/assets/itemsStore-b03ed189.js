import{m as z,W as E,C as S,r as u,X as T,Y as g,Z as q,D as m,$ as F,a0 as v,z as O,a1 as P,E as R,a2 as $,a3 as j}from"./index-de1de77c.js";const M=z("items",()=>{const s=E(),p=S(),d=u(1),t=u(""),o=u(!1),f=[{id:1,name:"Pieza"},{id:2,name:"Combo"}],y=T(g(s,"items")),c=q(y);async function b(e){o.value=!0;try{await F(g(s,"items"),e),t.value="El producto fué cargado correctamente",setTimeout(()=>{t.value=""},3e3)}catch(a){console.log(a)}finally{o.value=!1}}async function D(e,a){const{image:r,url:n,...l}=a;if(o.value=!0,r.length)try{await v(e,{...l,image:n.value}),t.value="El producto fué actualizado correctamente",setTimeout(()=>{t.value=""},3e3)}catch(i){console.log(i)}finally{o.value=!1}else try{await v(e,l),t.value="El producto fué actualizado correctamente",setTimeout(()=>{t.value=""},3e3)}catch(i){console.log(i)}finally{o.value=!1}}async function h(e){if(confirm("¿Desea eliminar el item?")){const a=O(s,"items",e),r=await P(a),{image:n}=r.data(),l=R(p,n);await Promise.all([$(a),j(l)])}}const w=m(()=>[{label:"Seleccione la categoría",value:"",attrs:{disabled:!0}},...f.map(a=>({label:a.name,value:a.id}))]),C=m(()=>c.value.length===0),I=m(()=>c.value.filter(e=>e.category===d.value));return{db:s,createItem:b,updateItem:D,deleteItem:h,categories:f,selectedCategory:d,loading:o,successMessage:t,filteredItems:I,itemsCollection:c,noResult:C,categoryOptions:w}});export{M as u};