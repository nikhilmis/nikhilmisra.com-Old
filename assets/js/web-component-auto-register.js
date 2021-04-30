// !function(){"use strict";
// /**
//    * @package mechanical-ragger
//    * @fileoverview Core class
//    * @license MIT
//    * @author Oak Studios
//    */class t{constructor({container:t,onUpdate:e}={}){this.sizeListener=new ResizeObserver(this.sizeListenerCallback),this.containerBounds={},this.container=t,this.updateCallback=e||function(){}}get container(){return this._container}set container(t){this._container=t,this.attachSizeListener()}get exclusionPolygon(){const t=document.defaultView.getComputedStyle(this.container,null).getPropertyValue("line-height"),e=Math.floor(parseFloat(t)),n=Math.floor(this.containerBounds.height/e);return`${Array(n).fill().map(((t,n)=>{const i=n*e,s=i+e/2;return n%2==0?`100% ${i}px, 100% ${i+e}px,`:`0% ${s}px, 0% ${s}px,`})).join("")} 100% ${n*e}px`}get cssProperties(){const t=this.exclusionPolygon;return{clipPath:`polygon(${t})`,shapeOutside:`polygon(${t})`,width:"var(--ragging-width, 1em)",height:`${this.containerBounds.height}px`,float:"right",background:"blue"}}sizeListenerCallback=t=>{for(let e of t)this.containerBounds=e.contentRect;this.update()};update=()=>{const t=this.cssProperties;t&&this.updateCallback(t)};attachSizeListener=()=>{this.sizeListener.observe(this.container)}}
// /**
//    * @package mechanical-ragger
//    * @fileoverview Web Component entry
//    * @license MIT
//    * @author Oak Studios
//    */class e extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"closed"});this.exclusion=e.appendChild(document.createElement("div")),this.textRoot=e.appendChild(document.createElement("div")),this.textRoot.innerHTML=this.innerHTML,this.ragger=new t({container:this.textRoot,onUpdate:this.setExclusionStyles})}connectedCallback=()=>{this.ragger.update()};setExclusionStyles=t=>{Object.assign(this.exclusion.style,t)}}window.customElements.define("mechanical-ragger",e)}();


   ! function() {
      "use strict";
      /**
       * @package mechanical-ragger
       * @fileoverview Core class
       * @license MIT
       * @author Oak Studios
       */
      class t {
          constructor({
              container: t,
              onUpdate: e
          } = {}) {
              this.sizeListener = new ResizeObserver(this.sizeListenerCallback), this.containerBounds = {}, this.container = t, this.updateCallback = e || function() {}
          }
          get container() {
              return this._container
          }
          set container(t) {
              this._container = t, this.attachSizeListener()
          }
          get exclusionPolygon() {
              const t = document.defaultView.getComputedStyle(this.container, null).getPropertyValue("line-height"),
                  e = Math.floor(parseFloat(t)),
                  n = Math.floor(this.containerBounds.height / e);
                  console.log(t, e, n)
                  console.log(Array(n).fill().map(((t,n)=>{const i=n*e,s=i+e/2;return n%2==0?`100% ${i}px, 100% ${i+e}px,`:`0% ${s}px, 0% ${s}px,`})).join(""))
              return `${Array(n).fill().map(((t,n)=>{const i=n*e,s=i+e/2;return n%2==0?`100% ${i}px, 100% ${i+e}px,`:`0% ${s}px, 0% ${s}px,`})).join("")} 100% ${n*e}px`
          }
          get cssProperties() {
              const t = this.exclusionPolygon;
              return {
                  clipPath: `polygon(${t})`,
                  shapeOutside: `polygon(${t})`,
                  width: "var(--ragging-width, 1em)",
                  height: `${this.containerBounds.height}px`,
                  float: "right",
                  background: "blue"
              }
          }
          sizeListenerCallback = t => {
              for (let e of t) this.containerBounds = e.contentRect;
              this.update()
          };
          update = () => {
              const t = this.cssProperties;
              t && this.updateCallback(t)
          };
          attachSizeListener = () => {
              this.sizeListener.observe(this.container)
          }
      }
      /**
       * @package mechanical-ragger
       * @fileoverview Web Component entry
       * @license MIT
       * @author Oak Studios
       */
      class e extends HTMLElement {
          constructor() {
              super();
              const e = this.attachShadow({
                  mode: "closed"
              });
              this.exclusion = e.appendChild(document.createElement("div")), this.textRoot = e.appendChild(document.createElement("div")), this.textRoot.innerHTML = this.innerHTML, this.ragger = new t({
                  container: this.textRoot,
                  onUpdate: this.setExclusionStyles
              })
          }
          connectedCallback = () => {
              this.ragger.update()
          };
          setExclusionStyles = t => {
              Object.assign(this.exclusion.style, t)
          }
      }
      window.customElements.define("mechanical-ragger", e)
  }();