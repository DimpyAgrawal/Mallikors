import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactUs() {
   
        useEffect(() => {
          AOS.init({ duration: 2000 });
      
        }, []);
  return (
    <div >
    <section class="bg-[#0b0c10] rounded-lg dark:bg-gray-900  py-8 lg:py-12 px-4 mx-auto max-w-screen-sm">
        <h2 class="mb-6 text-3xl font-extrabold text-center text-[#66fcf1] dark:text-[#66fcf1]">Contact Us</h2>
        <p class="mb-8 font-light text-center text-[#c5c6c7] dark:text-[#c5c6c7] sm:text-lg">
            Got a technical issue? Want to send feedback about a feature?  Let us know.
        </p>
        <form action="#" className="space-y-6 p-4">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-[#c5c6c7] dark:text-[#c5c6c7]">Your email</label>
                <input type="email" id="email" class="shadow-lg bg-[#1f2833] border border-[#c5c6c7] text-[#c5c6c7] text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-3 dark:bg-[#1f2833] dark:border-[#66fcf1] dark:placeholder-[#c5c6c7] dark:text-[#c5c6c7] dark:focus:ring-[#66fcf1] dark:focus:border-[#66fcf1]" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-[#c5c6c7] dark:text-[#c5c6c7]">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-[#c5c6c7] bg-[#1f2833] rounded-lg border border-[#c5c6c7] shadow-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] dark:bg-[#1f2833] dark:border-[#66fcf1] dark:placeholder-[#c5c6c7] dark:text-[#c5c6c7] dark:focus:ring-[#66fcf1] dark:focus:border-[#66fcf1]" placeholder="Let us know how we can help you" required />
            </div>
            <div>
                <label for="message" class="block mb-2 text-sm font-medium text-[#c5c6c7] dark:text-[#c5c6c7]">Your message</label>
                <textarea id="message" rows="4" class="block p-3 w-full text-sm text-[#c5c6c7] bg-[#1f2833] rounded-lg shadow-lg border border-[#c5c6c7] focus:ring-[#66fcf1] focus:border-[#66fcf1] dark:bg-[#1f2833] dark:border-[#66fcf1] dark:placeholder-[#c5c6c7] dark:text-[#c5c6c7] dark:focus:ring-[#66fcf1] dark:focus:border-[#66fcf1]" placeholder="Leave a comment..."></textarea>
            </div>
            <div class="flex gap-4">
              
                <button type="submit" class="w-full rounded-lg bg-[#66fcf1] text-[#0b0c10] font-medium py-3 px-6 text-center hover:bg-[#45a29e] focus:ring-4 focus:ring-[#45a29e] dark:bg-[#45a29e] dark:hover:bg-[#66fcf1] dark:focus:ring-[#66fcf1] transition-all duration-300 shadow-md hover:shadow-lg">
                    Send
                </button>
            </div>
        </form>
    </section>
</div>


  )
}

export default ContactUs
