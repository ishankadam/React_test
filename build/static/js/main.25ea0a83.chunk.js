(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",MealsLoading:"AvailableMeals_MealsLoading__UmYIn",HttpError:"AvailableMeals_HttpError__1ZFk_"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(20),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=n(9),j=n.n(u),d=s.a.createContext({items:[],totalAmount:0,additem:function(e){},remove:function(e){},clearCart:function(){}}),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(d).items,u=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:u})]})},b=n.p+"static/media/meals.2971f633.jpeg",O=n(17),p=n.n(O),x=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"a table full of food"})})]})},h=n(16),f=n(21),_=n.n(f),v=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=n(6),N=n(12),g=n(13),y=n.n(g),A=n(22),k=n.n(A),w=function(e){return Object(o.jsx)("div",{className:k.a.card,children:e.children})},M=n(14),S=n.n(M),I=n(4),F=n(23),E=n.n(F),H=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:E.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(I.a)({ref:t},e.input))]})})),R=n(24),D=n.n(R),B=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:D.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a a valid amount(1-5)"})]})},L=function(e){var t=Object(i.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:S.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:S.a.description,children:e.description}),Object(o.jsx)("div",{className:S.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(B,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),l=s[0],u=s[1],j=Object(i.useState)(),d=Object(r.a)(j,2),m=d[0],b=d[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(N.a)(Object(C.a)().mark((function e(){var t,n,a,r;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://react-2b329-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:y.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading.."})});if(m)return Object(o.jsx)("section",{className:y.a.HttpError,children:m});var O=n.map((function(e){return Object(o.jsx)(L,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:y.a.meals,children:Object(o.jsx)(w,{children:Object(o.jsx)("ul",{children:O})})})},T=function(){return Object(o.jsxs)(h.Fragment,{children:[Object(o.jsx)(v,{}),Object(o.jsx)(P,{})]})},U=n(5),Y=n.n(U),Z=n(7),z=n.n(Z),J=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:z.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:z.a.summary,children:[Object(o.jsx)("span",{className:z.a.price,children:t}),Object(o.jsxs)("span",{className:z.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:z.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},V=n(15),q=n.n(V),Q=n(10),X=n.n(Q),$=function(e){return Object(o.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},G=function(e){return Object(o.jsx)("div",{className:q.a.modal,children:Object(o.jsx)("div",{className:q.a.content,children:e.children})})},K=document.getElementById("overlays"),W=function(e){return Object(o.jsxs)(i.Fragment,{children:[X.a.createPortal(Object(o.jsx)($,{onClose:e.onClose}),K),X.a.createPortal(Object(o.jsx)(G,{children:e.children}),K)]})},ee=n(3),te=n.n(ee),ne=function(e){return""===e.trim()},ce=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),j=Object(i.useRef)(),d="".concat(te.a.control," ").concat(c.name?"":te.a.invalid),m="".concat(te.a.control," ").concat(c.street?"":te.a.invalid),b="".concat(te.a.control," ").concat(c.city?"":te.a.invalid),O="".concat(te.a.control," ").concat(c.postalCode?"":te.a.invalid);return Object(o.jsxs)("form",{className:te.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=j.current.value,o=!ne(n),d=!ne(c),m=!ne(i),b=5===r.trim().length;a({name:o,street:d,city:m,postalCode:b}),o&&b&&d&&m&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:d,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(o.jsx)("p",{children:"please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.name&&Object(o.jsx)("p",{children:"please enter a valid street!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"please enter a postal code(5 characters only)!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:j}),!c.city&&Object(o.jsx)("p",{children:"please enter a valid city!"})]}),Object(o.jsxs)("div",{className:te.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:te.a.submit,children:"Confirm"})]})]})},ae=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),u=Object(r.a)(l,2),j=u[0],m=u[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),p=O[0],x=O[1],h=Object(i.useContext)(d),f="$".concat(h.totalAmount.toFixed(2)),_=h.items.length>0,v=function(e){h.removeItem(e)},g=function(e){h.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},y=function(){var e=Object(N.a)(Object(C.a)().mark((function e(t){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-2b329-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:m(!1),x(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:Y.a["cart-items"],children:h.items.map((function(e){return Object(o.jsx)(J,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),k=Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"close"}),_&&Object(o.jsx)("button",{className:Y.a.button,onClick:function(){a(!0)},children:"Order"})]}),w=Object(o.jsxs)(s.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:Y.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:f})]}),c&&Object(o.jsx)(ce,{onConfirm:y,onCancel:e.onClose}),!c&&k]}),M=Object(o.jsx)("p",{children:"Sending order Data..."}),S=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order"}),Object(o.jsx)("div",{className:Y.a.actions,children:Object(o.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"close"})})]});return Object(o.jsxs)(W,{onclose:e.onClose,children:[!j&&!p&&w,j&&M,!j&&p&&S]})},re=n(18),ie={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(re.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(re.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return t.type,ie},oe=function(e){var t=Object(i.useReducer)(se,ie),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(d.Provider,{value:s,children:e.children})};var le=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(oe,{children:[n&&Object(o.jsx)(ae,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0),console.log("loading..")}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(le,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.25ea0a83.chunk.js.map