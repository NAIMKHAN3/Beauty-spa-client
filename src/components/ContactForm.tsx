"use client"
const ContactForm = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/droyjiqwf/image/upload/v1700393398/uploads/tdcaa4wyfoiewqvxl0tj.webp")',
        }}
        className="text-left py-16 max-w-screen-2xl mx-auto bg-image h-80 relative my-16 bg-cover bg-center"
      >
        <span className="absolute top-0 left-0 inset-0 bg-black opacity-40"></span>
        <div className="w-11/12 lg:w-full rounded-xl mx-auto absolute z-30">
          <h2 className="text-white font-bold text-3xl lg:text-4xl text-center">
            Say Hi Hello! Join our newsletter
          </h2>

          <p className="text-lg font-bold text-gray-300 text-center py-3">
            Lets talk about what you need to know!!!
          </p>
          <div className="flex justify-center items-center py-5">
            <input
              className="shadow-inner text-secondary rounded px-3 text-md lg:text-lg bg-white focus:outline-none focus:shadow-outline focus:border-primary border-2 w-full lg:w-1/2 py-6 border-white input-width"
              placeholder="Enter your email"
              type="text"
            />
            <button className="flex items-center -ml-[145px] lg:-ml-[180px] px-5 lg:px-10 shadow-lg bg-primary font-bold text-sm rounded py-3 lg:py-5  text-brand uppercase shake text-white">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

