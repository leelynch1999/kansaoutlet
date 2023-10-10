import{r as w,s as m,q as t,o as I}from"./vendor.d944feed.js";import{I as p,u as v,F as C,T as b,c as k,i as R,j as g}from"./Button.5439cc8b.js";const $=e=>`${e.theme.breakpoints.values[e.breakpoint]}${e.theme.breakpoints.unit}`,N=()=>{};class T extends Error{constructor(){super("This hook cannot be used outside of it's provider. Set strict to false, or wrap your component in dedicated provider")}}function L({name:e,defaultValue:n,strict:r=!1}){const a=w.createContext(n);a.displayName=e;const s=()=>{const i=w.useContext(a);if(!i&&r)throw new T;return i};return[a.Provider,s]}const B=()=>t("path",{strokeLinecap:"square",strokeWidth:"2",d:"M6 12l4.5 4.5L18 9",stroke:"currentColor"}),M=m.exports.forwardRef((e,n)=>t(p,{ref:n,width:e.width||"1.5rem",height:e.height||"1.5rem",viewBox:"0 0 24 24",...e,children:t(B,{})})),V=()=>t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.2929 5.29276C17.6834 4.90223 18.3166 4.90223 18.7071 5.29276C19.0976 5.68328 19.0976 6.31645 18.7071 6.70697L13.4142 11.9999L18.7071 17.2928C19.0976 17.6833 19.0976 18.3165 18.7071 18.707C18.3166 19.0975 17.6834 19.0975 17.2929 18.707L12 13.4141L6.70711 18.707C6.31658 19.0975 5.68342 19.0975 5.29289 18.707C4.90237 18.3164 4.90237 17.6833 5.29289 17.2928L10.5858 11.9999L5.29289 6.70697C4.90237 6.31645 4.90237 5.68328 5.29289 5.29276C5.68342 4.90224 6.31658 4.90224 6.70711 5.29276L12 10.5857L17.2929 5.29276Z",fill:"currentColor"}),W=m.exports.forwardRef((e,n)=>t(p,{ref:n,...e,children:t(V,{})})),P=()=>t("path",{d:"M4.65 10.95C4.65 10.95 4.2 11.1 3.9 11.1C3.75 11.1 3.6 11.1 3.6 11.1C3.45 10.95 3.3 10.8 3.6 10.05L4.35 8.55C4.65 7.65 4.8 6.9 4.5 6.15C4.2 5.7 3.75 5.25 3.15 5.1C2.85 5.1 2.7 5.1 2.4 5.1C1.05 5.1 0.15 5.85 0.15 5.85C3.35276e-08 6 0 6.15 0 6.3C0.15 6.45 0.3 6.45 0.45 6.45C0.45 6.45 0.9 6.3 1.2 6.3C1.35 6.3 1.5 6.3 1.5 6.3C1.65 6.45 1.8 6.75 1.5 7.5L0.75 9C0.3 9.75 0.3 10.65 0.6 11.25C0.9 11.85 1.35 12.15 1.95 12.3C2.25 12.3 2.4 12.3 2.7 12.3C4.05 12.3 4.95 11.55 4.95 11.55C5.1 11.4 5.1 11.25 4.95 11.1C4.95 10.95 4.8 10.8 4.65 10.95ZM3.9 0C3 0 2.1 0.75 2.1 1.8C2.1 2.85 2.85 3.6 3.9 3.6C4.95 3.6 5.7 2.85 5.7 1.8C5.85 0.75 4.95 0 3.9 0Z",fill:"currentColor"}),j=m.exports.forwardRef((e,n)=>t(p,{ref:n,width:e.width||"0.563rem",height:e.height||"0.813rem",viewBox:"0 0 9 13",...e,children:t(P,{})})),D=()=>t("path",{d:"M1.89219 1.0276e-06C2.5878 -0.0243734 3.16438 0.504385 3.21219 1.2V1.32L2.89999 7.99128C2.87562 8.51909 2.42 8.9269 1.91561 8.90347C1.41123 8.8791 1.0278 8.47128 1.00342 7.99128L0.691227 1.29576C0.644353 0.623569 1.19563 0.023425 1.89219 1.0276e-06ZM1.94 13.1035C1.14781 13.1035 0.5 12.4557 0.5 11.6635C0.5 10.8713 1.14781 10.2235 1.94 10.2235C2.73219 10.2235 3.38 10.8713 3.38 11.6635C3.38 12.4557 2.73219 13.1035 1.94 13.1035Z",fill:"currentColor"}),F=m.exports.forwardRef((e,n)=>t(p,{ref:n,width:e.width||"0.188rem",height:e.height||"0.813rem",viewBox:"0 0 3 13",...e,children:t(D,{})})),[E,z]=L({name:"FormFieldContext",defaultValue:{},strict:!0}),Y=({children:e,id:n,label:r,isInvalid:a,isDisabled:s,error:i,hint:d,className:o,...c})=>{const l=`${n}-hint`,u=`${n}-error`,h=v();return t(E,{value:{id:n,isInvalid:a,isDisabled:s,label:r,hintId:d?l:void 0,errorId:i?u:void 0},children:I(C,{className:o,width:"100%",marginBottom:"2xs",flexDirection:"column",...c,children:[r?t(b,{marginBottom:"3xs",tag:"label",htmlFor:n,variant:h.components.formField.label.variant,color:h.components.formField.label.color,children:r}):null,e,d?t(b,{id:l,color:"slathe",variant:"body-small",lineHeight:"0.975rem",marginTop:"3xs",children:d}):null,t(b,{id:u,color:"error",variant:"body-small",lineHeight:"0.975rem",marginTop:"3xs",minHeight:"0.975rem",children:i})]})})},x={top:8,bottom:8,start:12,end:12},Z=e=>e.addonVariant==="icon"?{[e.addonPlacement==="end"?"paddingRight":"paddingLeft"]:`${24+x.start+x.bottom}px`}:e.addonVariant==="button"?e.addonPlacement==="end"?{borderTopRightRadius:0,borderBottomRightRadius:0,boxShadow:e.isInvalid?`inset 0 0 0 2px ${e.theme.colors.error}`:"none"}:{borderTopLeftRadius:0,borderBottomLeftRadius:0,boxShadow:e.isInvalid?`inset 0 0 0 2px ${e.theme.colors.error}`:"none"}:{},G=e=>({appearance:"none",outline:"none",border:0,boxSizing:"border-box",height:e.theme.components.input.size[e.size||"medium"],width:"100%",flex:e.addonVariant===void 0?void 0:1,background:R(e.background)?e.theme.colors[e.background]:e.theme.colors.white,padding:`${x.top}px ${x.end}px ${x.bottom}px ${x.start}px`,boxShadow:e.isInvalid?`inset 0 0 0 2px ${e.theme.colors.error}`:e.theme.shadows.inset,borderRadius:e.theme.radii.md,fontFamily:e.theme.typography.fontFamily,...e.theme.typography.variants[e.theme.components.input.variant],color:e.theme.colors.graphite,opacity:e.isDisabled?"50%":"100%","&:focus":{boxShadow:`inset 0 0 0 2px ${e.theme.colors.sea}`},"&::placeholder":{color:e.theme.colors.lightSlathe}}),H=k({input:e=>({...G(e),...Z(e)})}),[J,q]=L({name:"InputGroupContext",defaultValue:{},strict:!0}),K=w.forwardRef(({isDisabled:e,isInvalid:n,className:r,background:a,size:s,...i},d)=>{const o=z(),c=q(),l=v();if(o.isInvalid!==void 0&&n!==void 0)throw new Error("Input: 'isInvalid' can't be set in both 'Input' and 'FormField' components");if(o.isDisabled!==void 0&&e!==void 0)throw new Error("Input: 'isDisabled' can't be set in both 'Input' and 'FormField' components");const u=o.isInvalid||n||!1,h=o.isDisabled||e||!1,f=H({isInvalid:u,theme:l,isDisabled:h,addonPlacement:c.addonPlacement,addonVariant:c.addonVariant,background:a,size:c.size||s});return t("input",{"aria-invalid":u,disabled:h,className:g(r,f.input),ref:d,...i,id:o.id,"aria-describedby":g(o.errorId,o.hintId,i["aria-describedby"])})}),y={error:{color:"error"},success:{color:"success"},warning:{color:"warning"},info:{color:"info"}},U=k(e=>({container:{boxShadow:"6px 6px 6px rgba(77, 92, 112, 0.16)"},closeIcon:{position:"absolute",top:"16px",right:"16px",cursor:"pointer"},iconWrapper:{display:"flex",color:"white"},contentWrapper:{marginTop:"0"},[`@media (max-width: ${$({theme:e,breakpoint:"md"})})`]:{iconWrapper:{display:"none"},contentWrapper:{marginTop:"20px"}}})),O=({children:e,onClose:n=N,isCloseable:r=!1,className:a,title:s,description:i,variant:d="info",icon:o,iconBackgroundColor:c,titleColor:l,...u})=>{const h=v(),f=U({theme:h}),S={error:t(F,{}),success:t(M,{}),warning:t(F,{}),info:t(j,{})};return I(C,{background:"white",boxShadow:"dropdown",borderRadius:"lg",overflow:"hidden",position:"relative",width:"100%",role:"status",className:g(a,f.container),...u,children:[t(C,{background:c||y[d].color,paddingX:"2xs",paddingY:"xs",justifyContent:"center",className:g("notification-icon-wrapper",f.iconWrapper),children:t(C,{minWidth:24,minHeight:24,justifyContent:"center",alignItems:"center",children:o||S[d]})}),I(C,{flexDirection:"column",alignItems:"flex-start",padding:"sm",overflow:"hidden",className:g("notification-content-wrapper",f.contentWrapper),children:[s?t(b,{variant:"body-large-bold",color:l||y[d].color,className:"notification-title",children:s}):null,t(b,{variant:"body-medium",color:"slathe",marginTop:s?"2xs":0,className:"notification-description",children:i}),e]}),r?t(W,{className:f.closeIcon,onClick:n,label:"close notification"}):null]})};function Q(){const[e,n]=m.exports.useState(!1);return[e,m.exports.useCallback(()=>n(!0),[]),m.exports.useCallback(()=>n(!1),[])]}export{Y as F,K as I,O as N,Q as u};
