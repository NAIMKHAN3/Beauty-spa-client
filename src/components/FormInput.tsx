import { getErrorMassageByProperty } from "@/helper/getErrorMessageByProperty";


type IProps = {
    lebel: string;
    type: string;
    placeholder: string;
    register: any;
    defaultValue?: string;
    value?: string;
    error?: any;
    name: string;
}

const FormInput = (props:IProps) => {
  let error = null;
  if(props.error){
    error = getErrorMassageByProperty(props.error, props.name)
  }
    return (
        <div className='flex flex-col my-3 w-full mx-1'>
          <label className="font-semibold text-secondary text-xs" htmlFor="">{props?.lebel}</label>
          <input className='border my-2 w-full px-2 py-1  focus:outline-none'  {...props?.register(`${props?.name}`)} placeholder={`${props?.placeholder}`} type={`${props?.type}`} defaultValue={props?.defaultValue} value={props?.value} />
          <small className="text-red-500">{error}</small>
        </div>
    );
};

export default FormInput;
