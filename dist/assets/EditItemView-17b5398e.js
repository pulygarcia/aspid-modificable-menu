import{j as h,y as k,k as q,z as C,A as M,B as N,a as U,o as m,c as g,f as s,w as d,u as t,b as r,i as f,d as b,t as P,e as B}from"./index-de1de77c.js";import{u as I}from"./itemsStore-b03ed189.js";import{u as j}from"./useImage-5c6d027a.js";import{L as z}from"./Loader-6cf549cd.js";import{G as A,V as D,W as E,U as G}from"./dialog-d9e7f5fe.js";const S={class:"mt-10 container mx-auto"},F=r("h2",{class:"text-center text-2xl font-bold"},"Modificar",-1),L=r("p",{class:"text-gray-600 text-center"},"Actualizá los datos del producto seleccionado",-1),R={class:"fixed top-0 flex w-screen items-center justify-end p-2"},T={class:"mx-auto w-11/12 md:w-6/12 mt-11"},K={key:0},O=r("p",{class:"font-black"},"Imagen cargada: ",-1),W=["src"],Z={__name:"EditItemView",setup(J){const l=I(),u=h(),x=k(),{onFileChange:y,url:c,imageUploaded:v}=j(),o=q({name:"",image:"",category:"",description:"",price:""}),V=l.db,p=C(V,"items",x.params.id),_=M(p);N(_,n=>{if(!n){u.push({name:"current-menu"});return}Object.assign(o,n)});const w=async n=>{try{await l.updateItem(p,{...n,url:c}),setTimeout(()=>{u.push({name:"current-menu"})},3e3)}catch(e){console.log(e)}};return(n,e)=>{const i=U("FormKit");return m(),g("div",S,[F,L,s(t(G),{open:!!t(l).successMessage,class:"relative z-50"},{default:d(()=>[r("div",R,[s(t(A),{class:"w-full max-w-sm rounded-lg bg-green-100 p-5"},{default:d(()=>[s(t(D),{class:"text-green-600 font-bold text-2xl"},{default:d(()=>[b("Éxito")]),_:1}),s(t(E),{class:"text-gray-600"},{default:d(()=>[b(P(t(l).successMessage),1)]),_:1}),r("button",{onClick:e[0]||(e[0]=a=>t(l).successMessage=""),class:"mt-4 py-1 px-8 bg-white rounded-lg text-green-600 hover:bg-gray-50 outline-none"},"Agree")]),_:1})])]),_:1},8,["open"]),r("main",T,[t(l).loading||t(l).successMessage?(m(),f(z,{key:0})):(m(),f(i,{key:1,type:"form","submit-label":"Actualizar","incomplete-message":"Por favor completa los campos",onSubmit:w,value:o},{default:d(()=>[s(i,{type:"text",name:"name",label:"Titulo",placeholder:"Nombre del producto",validation:"required","validation-messages":{required:"El título es obligatorio"},modelValue:o.name,"onUpdate:modelValue":e[1]||(e[1]=a=>o.name=a),modelModifiers:{trim:!0}},null,8,["modelValue"]),t(v)?(m(),g("div",K,[O,r("img",{src:t(c),class:"w-32",alt:"Nuevo producto imagen"},null,8,W)])):B("",!0),s(i,{type:"file",name:"image",label:"Nueva imagen",accept:".jpg, .png, .JPG, .PNG",onChange:t(y),modelValue:o.image,"onUpdate:modelValue":e[2]||(e[2]=a=>o.image=a)},null,8,["onChange","modelValue"]),s(i,{type:"select",name:"category",label:"Categoría",validation:"required","validation-messages":{required:"La categoría es obligatoria"},modelValue:o.category,"onUpdate:modelValue":e[3]||(e[3]=a=>o.category=a),modelModifiers:{number:!0},options:t(l).categoryOptions},null,8,["modelValue","options"]),s(i,{type:"text",name:"description",label:"Descripción",validation:"required","validation-messages":{required:"Por favor agregá una descripción"},modelValue:o.description,"onUpdate:modelValue":e[4]||(e[4]=a=>o.description=a)},null,8,["modelValue"]),s(i,{type:"number",name:"price",label:"Precio",placeholder:"Precio del producto",validation:"required","validation-messages":{required:"El precio es obligatorio"},min:"1",modelValue:o.price,"onUpdate:modelValue":e[5]||(e[5]=a=>o.price=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["value"]))])])}}};export{Z as default};
