import{r as t,g as e}from"./p-5b344ccd.js";import{A as i}from"./p-971a1449.js";class s{constructor(e){t(this,e),this.titleSuffix="",this.pageTitle=""}updateDocumentTitle(){const t=this.el;t.ownerDocument&&(t.ownerDocument.title=`${this.pageTitle}${this.titleSuffix||""}`)}componentWillLoad(){this.updateDocumentTitle()}get el(){return e(this)}static get watchers(){return{pageTitle:["updateDocumentTitle"]}}}i.injectProps(s,["titleSuffix"]);export{s as stencil_route_title};