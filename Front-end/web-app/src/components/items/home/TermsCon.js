import React, { useState } from 'react';

const shadowStyle = {
  boxShadow: '0px 0px 10px 2px rgba(0, 255, 0, 1)', // Green shadow
};
const TermsCon = ({ agree, handleAgreeChange }) => {
  const containerClasses = `w-861 h-645  mx-auto ${agree ? 'shadow' : ''}`;
  return (
    <div className={containerClasses} >
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl text-center font-bold mb-4 bg-gray-200 rounded-xl p-2">Terms and Conditions</h1>
        <div className="max-h-72 overflow-y-auto border rounded-md border-gray-300 p-4 mb-4">
          <div className="h-full">
            <p className="text-sm">



              <h4> Welcome to JaffnaMarriage.com, </h4>
              <br />
              a premier Jaffna-based matrimonial website connecting individuals worldwide. These Terms and Conditions (the "Terms") govern your use of our services, including but not limited to accessing, browsing, or registering on JaffnaMarriage.com (the "Website"). By using our services, you agree to abide by these Terms. Please read them carefully.
              <br />
              <h4>01.Agreement</h4>
              <br />
              These Terms and Conditions include Our Privacy Policy. They may be amended from time to time. They will govern your [“You”] access and use of the website JaffnaMarriage.com and its related services. By accessing and using JaffnaMarriage.com and its related services You agree to be legally bound by these Terms and Conditions.

              If you do not agree with any part of these Terms, you may not use our services.
              <br />
              <h4>02.About Us</h4>
              <br />

              Jaffnamarriage.com website operating under watson solutions established in Sri Lanka [“we”, “us”, or “our”] and third party licensees provide matrimonial services* to the Jaffna community in Sri Lanka and abroad.

              <br />
              <h4>03.. Services</h4>
              <br />
              JaffnaMarriage.com provides online matrimonial services* for individuals seeking prospective matrimonial partners within the Jaffna  community.

              *JaffnaMarriage.com provides online advertising space and related services which You receive for a nominal fee , to advertise personal information and data either of your own or of a consenting third party [“Third Party”] for the purpose of seeking a matching prospective matrimonial partner[“Matrimonial Advertisement”], and also use the related services for such purpose. Users can create profiles, browse other profiles, and connect with potential matches.
              We also offer additional services, such as premium memberships, to enhance your experience.
              <br />
              <h4>04.Eligibility Criteria</h4>
              <br />
              To access and use Jaffnamarriage.com, you and any third party you access and use the website on your behalf:

              Must be at least 18 years of age;
              You (and any third party) must not be a minor under applicable laws and regulations; and
              You (and any third parties) must be legally competent to marry under the laws and regulations that apply to you.
              <br />
              <h4>05.Advertising content</h4>
              <br />
              You will provide the content of matrimonial ads that includes personal information and data in text and images. [“Content”] and you will upload for inclusion on Jaffnamarriage.com. In order to preserve and protect the integrity and ethical profile of Jaffnamarriage.com, we reserve the right to edit or delete any portion of the Content at any time at our sole discretion and without warning or notice to you.

              All images uploaded and available on Jaffnamarriage.com carry a watermark. This provides for easy identification and prevention of images being used for purposes other than those for which you as an advertiser have given consent.

              Conditions Governing Use of the Site

              To ensure that the content you provide and upload for inclusion on the Jaffnamarriage.com website complies with all applicable laws and regulations and does not infringe the contractual rights of a third party or any privacy or data protection rights, as applicable. You are fully responsible.

              You will promptly update and correct any inaccuracies in the Content uploaded or provided by you and such changes will be verified and modified by Jaffnamarriage.com.
              <br />
              <h4>06.REPRESENTATIONS AND WARRANTIES</h4>
              <br />
              By accessing and using Jaffnamarriage.com, you represent and warrant that: You and any third parties for whom you use the Site, meet the eligibility criteria in item 2 above;
              Any third party to whom you have uploaded content has consented to you doing so.
              All personal information and data placed by you on the matrimonial advertisement is true, accurate, current, complete and legally valid; and
              You and any third party on whose behalf you use the Website (if any) are not prohibited by the laws and regulations applicable to each individual or by any contractual third party right to disclose, advertise, license and/or publish your personal information. and data on Jaffnamarriage.com and or to permit the disclosure or publication of such information in the magazine. You and a third party using the Site on your behalf (if any) are not prohibited by applicable laws and regulations or by a contractual third party right to information and data.
              <br />
              <h4>07.Confidentiality</h4>
              <br />
              Without your prior consent, your personal information, data and identity (and that of any third party you access or use Jaffnamarriage.com) will be kept confidential except to the extent set out in these terms and conditions. An obligation to disclose arises:

              to comply with the law or any regulations; and or
              To protect and enforce our rights or those of others using Jaffnamarriage.com
              Privacy Policy The Privacy Policy explains how personal information and data is collected, used, shared, disclosed or otherwise processed. The website uses cookies and similar technologies.

              By using Jaffnamarriage.com you consent to the collection, processing, use, sharing and or disclosure of personal information and data provided by you in accordance with the Privacy Policy. Please read the privacy policy for details.

              Withdrawal and Cancellation of Marriage Advertisements
              Advertisers can opt out of publishing their ads themselves at any time. If they want all content removed from our database, they can request so by email.
              <br />
              <h4>08.Intellectual property</h4>
              <br />
              Jaffnamarriage.com, and its databases, text, photographs, logos, trademarks and all other intellectual property created and used on Jaffnamarriage.com, including without limitation all software, design work, layout, appearance, graphics, etc. are owned by us. . Licensed to us and protected by Australia's intellectual property laws. No material on Jaffnamarriage.com may be copied, downloaded, reproduced, republished, stored, photographed, transmitted, installed, posted or distributed without our written permission.
              <br />
              <h4>09.Disclaimer</h4>
              <br />
              We do not accept any responsibility for your use of Jaffnamarriage.com. You agree that we shall not be liable to you in any way for any loss, damage or injury arising out of or in any way related to the following:
              including, but not limited to, errors or technical and typographical errors in the content of Jaffnamarriage.com; inability or lack of access to or use of Jaffnamarriage.com; Your use of Jaffnamarriage.com or the Content; or a Your use of any software associated with Jaffnamarriage.com
              <br />
              <h4>10.Compensation</h4>
              <br />
              By accessing and using Jaffnamarriage.com you agree to indemnify and hold harmless its officers, directors, employees and agents from and against all claims or actions of third parties and for all losses, costs, damages and expenses including attorney's fees. Any breach by you of these terms and conditions, including your negligent or misconduct in accessing and using Jaffnamarriage.com.
              <br />
              <h4>11.Termination</h4>
              <br />
              Termination/Consequences thereof This Agreement will terminate immediately in the following cases:

              At the end of the advertising period; or a
              When withdrawing your matrimonial ad during the advertising period; or a
              Breach of any of these Terms and Conditions, including any representation or warranty by you and any third party using our Services on your behalf, or any applicable law or regulation; or a
              Consequences of termination include the right to terminate your access to and use of Jaffnamarriage.com immediately and without notice to you. and delete your content from the site.

              JaffnaMarriage.com reserves the right to terminate or suspend user accounts for violations of these Terms or for any other reason. Consequences of termination may include the removal of user content from the site.

              <h4>12.Amendments to Terms</h4>

              These Terms may be updated from time to time.
              Updated Terms will be effective immediately upon posting on JaffnaMarriage.com.
              Continued use of the site after updates constitutes acceptance of the revised Terms.

              13.Governing Law & Jurisdiction
              These Terms shall be governed by the laws of Sri Lanka.
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.

              <h4>14.Contact Us</h4>
              If you have any questions or concerns about these Terms, please contact us at info@JaffnaMarriage.com.

              By using JaffnaMarriage.com, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
              <br />
              <h4>02.Privacy Policy</h4>
              <br />
              Thank you for choosing JaffnaMarriage.com for your matrimonial needs. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website and services.

              1.1. Personal Information: We may collect personal information, including but not limited to your name, gender, date of birth, contact information (email, phone number, address), photographs, and other details necessary for our matrimony services.
              1.2. Account Information: When we create an account on our platform, we collect information such as your username, password, and preferences.
              1.3. Payment Information: In the event of purchasing premium services, we collect payment details, including credit card information or other payment methods.
              1.4. User-generated Content: Any information you voluntarily provide, such as profile descriptions, photos, and messages exchanged with other users.
              1.5. Usage Data: We collect data on how you use our platform, including log data, device information, and analytics about your interactions with our services.

              How We Use Your Information
              2.1. Providing Services: We use your information to facilitate your interactions with other users, match profiles, and provide you with our matrimony services.
              2.2. Communication: We may contact you with service-related announcements, updates, and promotional materials.
              2.3. Personalization: We use your data to personalize your experience on our platform, such as recommending potential matches and enhancing user engagement.
              2.4. Legal Compliance: We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service.

              Sharing Your Information
              3.1. User Profiles: Some of your information will be visible to other registered users on our platform, based on your privacy settings.
              3.2. Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services (e.g., payment processors, analytics providers).
              3.3. Legal Requirements: We may disclose your information to law enforcement agencies or regulatory bodies if required by law.


              <h4>Data Security</h4>
              4.1. We implement security measures to protect your information from unauthorised access, alteration, disclosure, or destruction.

              Your Choices
              5.1. Access and Update: You can access and update your personal information through your account settings.
              5.2. Communication Preferences: You can manage your communication preferences by adjusting your account settings or unsubscribing from marketing emails.
              Amendments

              7.1. JaffnaMarriage.com reserves the right to modify, amend, or update this privacy policy at any time. Changes to the policy will be effective upon posting on our website.
              If you have any questions or concerns about this policy, please contact us at info@JaffnaMarriage.com

              Please ensure that you customise this privacy policy to align with your specific business practices, user data handling, and legal requirements. It’s essential to seek legal advice to ensure that your privacy policy complies with applicable privacy laws and regulations.

              03.Refund Policy

              Thank you for choosing JaffnaMarriage.com for your matrimonial needs. We strive to provide you with the best service and experience. Please read our refund policy carefully before using our services.
              <br />
              <h4>Refund Eligibility</h4>
              <br />
              1.1. Refunds may be eligible under the following circumstances:

              Service Unavailability: If, for any reason, we are unable to provide the services outlined in your chosen package, you may be eligible for a refund. This could include       technical issues or unforeseen circumstances that prevent us from delivering the promised features.
              <br />
              <h4>Refund Process</h4>
              <br />
              2.1. To request a refund, you must contact our customer support team at info@JaffnaMarriage.com. Please provide your full name, account details, and the reason for your refund request.

              2.2. Refund requests made within the eligible period will be processed within 10 business days of receiving the request. Refund request should made within 5 working days from the problem days

              2.3. Refunds will be issued using the same payment method used for the original transaction.
              <br />
              <h4>Non-Refundable Circumstances</h4>
              <br />
              3.1. Refunds will not be issued in the following circumstances:

              Discontinuation of Use: If you choose to discontinue using our services before the end of your subscription period, a refund will not be provided for the unused  portion of your subscription.

              Dispute Resolution

              4.1. If you are dissatisfied with our services or have a dispute regarding a refund, please contact our customer support team. We are committed to resolving any issues to the best of our ability.
              <br />
              <h4>Amendments</h4>
              <br />
              5.1. JaffnaMarriage.com reserves the right to modify, amend, or update this refund policy at any time. Changes to the policy will be effective upon posting on our website.

              By using JaffnaMarriage.com, you agree to the terms outlined in this refund policy.

              If you have any questions or concerns about this policy, please contact us at info@JaffnaMarriage.com.



            </p>
            {/* Add more content here */}
          </div>
        </div>
        <div className="flex items-center" >
          <input style={!agree ? shadowStyle : {}}
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={agree}
            onChange={handleAgreeChange}
          />
          <label className="ml-2 text-sm text-gray-700">
            I have read and agree to the Terms and Conditions
          </label>
        </div>
        {/* <button
          className={`mt-4 py-2 px-4 rounded-md text-white ${
            agree ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!agree}
        >
          Agree
        </button> */}
      </div>
    </div>
  );
};

export default TermsCon;
