import React from 'react'
import AccordionItem from '../AccordionItem'

export default function FAQ() {
  return (
    <div className="w-[600px] mx-auto">
        
          <AccordionItem
              title="How does the tracking feature work?"
              content="Effortlessly log the time elapsed since your previous cigarette. Instantly calculate and showcase your financial dedication to your newfound freedom. Witness remarkable improvements in your health with each smoke-free milestone."
            />
            <AccordionItem
              title="What can I do in the Communities section"
              content="The Communities section is similar to a social network where you can post your progress, your mood, or anything you'd like to share with fellow quitters like yourself, all in an effort to support each other in quitting smoking. You can follow others and have private chats through messaging. Here, you'll also find coaches who offer their services."
            />
            <AccordionItem
              title="Is the app free to use?"
              content="Currently, the app is free to use. You can enjoy features such as tracking your cigarette consumption, maintaining a history of smoked cigarettes with dates and locations, viewing health and expense statistics, and engaging with the community by sharing posts and connecting with other quitters. Additionally, you have the option to seek guidance from coaches to receive extra support in your journey to quit smoking."
            />
            <AccordionItem
              title="Are the services provided by coaches free of charge?"
              content="Coaches offer their services for a fee, and the pricing is determined by each individual coach. Additionally, there is a charge of 10% imposed by the app. Once you've paid for the service, you'll be connected through a plan, granting you access to the coach's modules and exercises. This plan also allows you to engage in conversations with the coach through both chat and video calls. This connection remains active for the duration of the plan you've chosen.
              "
            />
            <AccordionItem
              title="How do I pay the coach through the app?"
              content="Payments must be made exclusively through the app. The coach will send you a payment link with the specified amount, plan expiration date, and the additional app charge. After verifying the details, you can proceed to make the payment through PayPal, either using your own PayPal account or a credit card."
            />
            <AccordionItem
              title="How do I view the modules and exercises sent by the coach?"
              content="You can access the modules and exercises in the app under the 'Home' section of the 'Communities,' by tapping the 'Homework' button beside the chat button. On the website, you can also view the modules and exercises. Keep in mind that they will only appear when the coach has submitted the Modules and Exercises ready for you. It's also important to note that you'll have access to them as long as you're within the plan's duration. When the coach sends them to you, you'll receive a notification."
            />
            <AccordionItem
              title="How do I communicate with my coach?"
              content="You can communicate with your coach through the chat feature available on both the app and the website. Additionally, coaches can schedule video calls, which will take place exclusively on the website through a computer. These scheduled calls will be recorded in your calendar for your convenience."
            />
         
        </div>
  )
}
