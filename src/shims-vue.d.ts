/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
namespace JSX {
  // tslint:disable no-empty-interface
  type Element = VNode;
  // tslint:disable no-empty-interface
  type ElementClass = ComponentRenderProxy;
  interface ElementAttributesProperty {
    $props: any;
  }
  interface IntrinsicElements {
    [elem: string]: any;
  }
  interface IntrinsicAttributes {
    [elem: string]: any;
  }
}
