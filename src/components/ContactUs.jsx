import { toast } from 'react-toastify';
import assets from '../assets/assets'
import Title from './Title'

function ContactUs() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        toast.info("Sending...")

        formData.append("access_key", "197e60cc-143a-4d65-9aa3-6fc04c46ddc0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };

    return (
        <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <Title title="Reach out to us" desc="From strategy to execution, we craft digital solutions that move your business forward." />

            <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={onSubmit}>

                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>

                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='Enter your Name' required className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email</p>

                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="email" placeholder='Enter your E-mail' required className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>

                    <textarea name='message' rows={8} placeholder='Enter your Message' required className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default ContactUs