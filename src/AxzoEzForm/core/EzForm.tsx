import type { PropType } from 'vue'

declare type TEzFormItem = <T>() => any;

declare type TEzForm = <T extends Record<string, any>>(
  props: {a:string}
) => TEzFormItem[];

// const EzFormItem: TEzFormItem = () => { }

const EzForm: TEzForm = (props) => {
  debugger
  return <div>AAAAA</div>
}

export default EzForm
