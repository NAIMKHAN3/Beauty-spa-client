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

const FormInput = (props: IProps) => {
    let error = null;
    if (props.error) {
        error = getErrorMassageByProperty(props.error, props.name)
    }
    return (
        <div className='flex flex-col my-3 w-full mx-1 relative'>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    {...props?.register(`${props?.name}`)}
                    type={props.type}
                    id={props.lebel}
                    className={`bg-white shadow-inner block py-2.5 px-0 w-full text-sm  bg-transparent  border-2 appearance-none border-primary rounded-md focus:outline-none focus:ring-0 focus:border-brand peer focus:border-t-1 pl-2 `}
                    placeholder=" "
                />
                <label
                    htmlFor={props.lebel}
                    className={`bg-pink-50 peer-focus:font-medium absolute  text-sm text-gray-500  duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] ml-2  peer-focus:absolute peer-focus:z-10 px-2`}
                >
                    {props.lebel}
                </label>
            </div>
            <small className="text-red-500">{error}</small>
        </div>
    );
};

export default FormInput;
