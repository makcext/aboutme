"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{6252:function(e,t,o){var n=o(26314);t.Z=void 0;var r=n(o(80984)),a=o(57437),i=(0,r.default)((0,a.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=i},49804:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(20791),r=o(13428),a=o(2265),i=o(57042),l=o(95600),s=o(89975),c=o(35843),u=o(87927),d=o(28702),h=o(29872),g=o(26520),f=o(25702);function p(e){return(0,f.Z)("MuiAlert",e)}let v=(0,g.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var m=o(52653),Z=o(59782),k=o(57437),x=(0,Z.Z)((0,k.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),j=(0,Z.Z)((0,k.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,Z.Z)((0,k.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),I=(0,Z.Z)((0,k.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),b=(0,Z.Z)((0,k.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");let C=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=e=>{let{variant:t,color:o,severity:n,classes:r}=e,a={root:["root",`${t}${(0,d.Z)(o||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(a,p,r)},B=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,d.Z)(o.color||o.severity)}`]]}})(({theme:e,ownerState:t})=>{let o="light"===e.palette.mode?s._j:s.$n,n="light"===e.palette.mode?s.$n:s._j,a=t.color||t.severity;return(0,r.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:o(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:n(e.palette[a].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:o(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"filled"===t.variant&&(0,r.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))}),A=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),$=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),_=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:(0,k.jsx)(x,{fontSize:"inherit"}),warning:(0,k.jsx)(j,{fontSize:"inherit"}),error:(0,k.jsx)(y,{fontSize:"inherit"}),info:(0,k.jsx)(I,{fontSize:"inherit"})};var S=a.forwardRef(function(e,t){var o,a,l,s,c,d;let h=(0,u.Z)({props:e,name:"MuiAlert"}),{action:g,children:f,className:p,closeText:v="Close",color:Z,components:x={},componentsProps:j={},icon:y,iconMapping:I=P,onClose:S,role:L="alert",severity:M="success",slotProps:z={},slots:E={},variant:R="standard"}=h,D=(0,n.Z)(h,C),N=(0,r.Z)({},h,{color:Z,severity:M,variant:R}),O=w(N),U=null!=(o=null!=(a=E.closeButton)?a:x.CloseButton)?o:m.Z,T=null!=(l=null!=(s=E.closeIcon)?s:x.CloseIcon)?l:b,W=null!=(c=z.closeButton)?c:j.closeButton,q=null!=(d=z.closeIcon)?d:j.closeIcon;return(0,k.jsxs)(B,(0,r.Z)({role:L,elevation:0,ownerState:N,className:(0,i.Z)(O.root,p),ref:t},D,{children:[!1!==y?(0,k.jsx)(A,{ownerState:N,className:O.icon,children:y||I[M]||P[M]}):null,(0,k.jsx)($,{ownerState:N,className:O.message,children:f}),null!=g?(0,k.jsx)(_,{ownerState:N,className:O.action,children:g}):null,null==g&&S?(0,k.jsx)(_,{ownerState:N,className:O.action,children:(0,k.jsx)(U,(0,r.Z)({size:"small","aria-label":v,title:v,color:"inherit",onClick:S},W,{children:(0,k.jsx)(T,(0,r.Z)({fontSize:"small"},q))}))}):null]}))})},38529:function(e,t,o){o.d(t,{kS:function(){return s}});var n=o(22977),r=o(11490),a=o(24256),i=function(){function e(){(0,n._)(this,e),this.isLoggedIn=!!r.Z.get("jwt"),this.books=[],(0,a.ky)(this)}var t=e.prototype;return t.logIn=function(){this.isLoggedIn=!0},t.logOut=function(){this.isLoggedIn=!1,r.Z.remove("jwt")},t.changeIsLoggedIn=function(e){this.isLoggedIn=e},t.addBook=function(e){this.books.push(e)},t.deleteBook=function(e){this.books=this.books.filter(function(t){return t._id!==e})},e}(),l=new i,s=function(){r.Z.remove("jwt"),i.prototype.logOut(),l.isLoggedIn=!!r.Z.get("jwt")};t.ZP=l},27651:function(e,t,o){o.r(t),o.d(t,{default:function(){return Q}});var n=o(86840),r=o(35029),a=o(88965),i=o(24670),l=o(1801),s=o(57437),c=o(2265),u=o(60658),d=o(46076),h=o(11490);class g extends Error{}g.prototype.name="InvalidTokenError";var f=o(38529),p=o(90985),v=o(43226),m=o(79245),Z=o(29872),k=o(28874),x=o(48899),j=o(52653),y=o(49804),I=o(89396),b=o(6252),C=o(60230),w=o(67389);function B(){var e=(0,C._)(["\n  mutation CreateBook($bookInput: BookInput!) {\n    createBook(bookInput: $bookInput)\n  }\n"]);return B=function(){return e},e}function A(){var e=(0,C._)(["\n  mutation DeleteBook($id: ID!) {\n    deleteBook(ID: $id)\n  }\n"]);return A=function(){return e},e}function $(){var e=(0,C._)(["\n  query GetBooks {\n    getBooks(limit: 10) {\n      _id\n      author\n      title\n      year\n    }\n  }\n"]);return $=function(){return e},e}function _(){var e=(0,C._)(["\n  query GetUserBooks($userId: ID!) {\n    getUserBooks(userId: $userId) {\n      _id\n      author\n      title\n      year\n    }\n  }\n"]);return _=function(){return e},e}var P=(0,w.Ps)(B()),S=(0,w.Ps)(A());(0,w.Ps)($());var L=(0,w.Ps)(_()),M=o(89394),z=o(91797),E=o(26337),R=o(42834),D=o(49050),N=function(e){var t=e.open,o=e.onClose;return(0,s.jsxs)(M.Z,{open:t,onClose:o,children:[(0,s.jsx)(z.Z,{children:"Book collection info"}),(0,s.jsx)(E.Z,{children:(0,s.jsx)(v.Z,{variant:"subtitle2",children:"This AuthBooks component is all about managing a collection of books for logged-in users. It checks if you're logged in using a JWT token. If you are, it shows you a list of your books. You can add a new book to the list by filling in the author, title, and year fields and clicking the 'Add' button. You can also delete a book from the list by clicking the 'Delete' button next to it. If you're not logged in, it shows a warning message and doesn't let you see or manage the book list. There's also an 'Info' button that opens a dialog with more info about the book collection.    "})}),(0,s.jsx)(R.Z,{children:(0,s.jsx)(D.Z,{variant:"outlined",color:"warning",onClick:o,children:"Close"})})]})},O=o(35266),U=o(7637),T=o(87780),W=o(93619),q=o(46446),H=function(e){var t=e.dataU,o=e.handleDeleteBook;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(O.Z,{children:t&&t.getUserBooks.map(function(e){return(0,s.jsxs)(U.ZP,{children:[(0,s.jsx)(T.Z,{children:(0,s.jsxs)(v.Z,{variant:"subtitle2",children:[e.title," by ",e.author," (",e.year,")"]})}),(0,s.jsx)(W.Z,{children:(0,s.jsx)(j.Z,{onClick:function(){return o(e._id)},children:(0,s.jsx)(q.Z,{color:"error"})})})]},e._id)})})})},Q=(0,p.Pi)(function(){var e,t=h.Z.get("jwt");(0,c.useEffect)(function(){t?f.ZP.logIn():f.ZP.logOut()},[t]),(0,c.useEffect)(function(){f.ZP.isLoggedIn||A({author:"",title:"",year:void 0,userId:""})},[f.ZP.isLoggedIn]);var o=(0,i._)((0,c.useState)(!1),2),p=o[0],C=o[1],w=(0,i._)((0,c.useState)({author:"",title:"",year:void 0,userId:""}),2),B=w[0],A=w[1],$=(0,i._)((0,u.D)(P,{update:function(e,t){var o=t.data.createBook,n=e.readQuery({query:L,variables:{userId:z}});e.writeQuery({query:L,variables:{userId:z},data:{getUserBooks:(0,l._)(n.getUserBooks).concat([o])}})}}),1)[0],_=(0,i._)((0,u.D)(S),1)[0],M=h.Z.get("jwt"),z="",E=!1;if(M)try{var R=function(e,t){let o;if("string"!=typeof e)throw new g("Invalid token specified: must be a string");t||(t={});let n=!0===t.header?0:1,r=e.split(".")[n];if("string"!=typeof r)throw new g(`Invalid token specified: missing part #${n+1}`);try{o=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var o;return o=t,decodeURIComponent(atob(o).replace(/(.)/g,(e,t)=>{let o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}catch(e){return atob(t)}}(r)}catch(e){throw new g(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(o)}catch(e){throw new g(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}(M);R&&(z=R.userId,E=!0)}catch(e){console.error("Invalid token",e)}var D=(0,i._)((0,c.useState)(h.Z.get("jwt")),2),O=D[0],U=D[1];(0,c.useEffect)(function(){U(h.Z.get("jwt"))},[O]);var T=(0,d.a)(L,{variables:{userId:z},skip:!E}),W=T.loading,q=T.error,Q=T.data;if(W)return(0,s.jsx)(v.Z,{children:"Loading..."});if(q)return(0,s.jsx)(v.Z,{children:"Please login & restart page"});var F=function(e){var t=e.target,o=t.name,i=t.value,l="year"===o?parseInt(i||"0",10):i;A((0,a._)((0,r._)({},B),(0,n._)({},o,l)))},V=function(){C(function(e){return!e})},Y=[{type:"text",placeholder:"Author",name:"author",value:B.author},{type:"text",placeholder:"Title",name:"title",value:B.title},{type:"number",placeholder:"Year",name:"year",value:null!==(e=B.year)&&void 0!==e?e:""}];return(0,s.jsx)(m.Z,{paddingTop:0,justifyContent:"space-around",textAlign:"left",children:(0,s.jsx)(Z.Z,{elevation:4,children:(0,s.jsxs)(Z.Z,{variant:"outlined",sx:{borderColor:"gray",padding:1},children:[(0,s.jsxs)(k.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(v.Z,{variant:"h5",children:"Books collection"}),(0,s.jsx)(b.Z,{color:"success",onClick:V}),(0,s.jsx)(N,{open:p,onClose:V})]}),(0,s.jsxs)(m.Z,{padding:1,children:[(0,s.jsxs)(k.ZP,{container:!0,spacing:2,paddingBottom:0,children:[Y.map(function(e){return(0,s.jsx)(k.ZP,{item:!0,xs:!0,children:(0,s.jsx)(x.Z,{type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:F,size:"small"})},e.name)}),(0,s.jsx)(k.ZP,{item:!0,children:(0,s.jsx)(j.Z,{onClick:function(){var e,t=z;$({variables:{bookInput:{author:B.author,title:B.title,year:null!==(e=B.year)&&void 0!==e?e:"",userId:t}},refetchQueries:[{query:L}]}).then(function(e){console.log("Book added:",e.data.createBook),A({author:"",title:"",year:null,userId:""})}).catch(function(e){return console.error("Error adding book:",e)})},children:(0,s.jsx)(I.Z,{color:"success"})})})]}),f.ZP.isLoggedIn?(0,s.jsx)(H,{dataU:Q,handleDeleteBook:function(e){_({variables:{id:e},refetchQueries:[{query:L,variables:{userId:z}}]}).then(function(e){console.log("Book deleted:",e.data.deleteBook)}).catch(function(e){return console.error("Error deleting book:",e)})}}):(0,s.jsx)(y.Z,{severity:"warning",children:"please login to view list"})]})]})})})})}}]);