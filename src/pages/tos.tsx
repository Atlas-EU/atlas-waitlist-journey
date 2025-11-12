import React from "react";

const TOS = () => (
  <main className="container mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-4">Terms of Service – Atlas mobile app</h1>
    <p>
      <strong>Effective Date:</strong> 22/7/2025
    </p>
    <br />
    <h2 className="text-l font-regular mt-8 mb-2">Interpretation</h2>
    <p>
      These Terms of Service ("Terms of use", "Terms") constitute a legal agreement between the user and the Atlas mobile application ("App", "Application", "Service"). Please review the following terms carefully before using. By using the App, you agree to comply with these Terms, which rule the user's usage of the Service. If you are not in agreement with these Terms, you must not use the App.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">1. Agreement & Eligibility</h2>
    <p>
      These Terms form a legal agreement between you and the developer ("we", "us"). The Service is intended only for individuals who have reached the legal age of majority in their jurisdiction (typically 18+). If you are underage, you are not permitted to use this app.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. Features & Usage</h2>
    <p>
      Atlas is a local workout planner that stores all training data on your device. No user accounts or remote backups are required. You may optionally benefit from features powered by third-party services, including Google Analytics, Crashlytics, and RevenueCat. The App is designed and expected to be used on a single device per user.
    </p>
    <br />
    <p>
      We do not take any responsibility for loss or corruption of the app's data. Any loss of data, corruption, or incompatibility is not the responsibility of Atlas or its developers.
    </p>

    {/* <h2 className="text-xl font-semibold mt-8 mb-2">3. In-App Purchases & Subscription Terms</h2>
    <p>
      The App offers optional purchases such as Pro subscriptions (monthly, yearly, or lifetime). Payments are processed through Apple or Google Play, with RevenueCat handling subscription status.
    </p>
    <br />
    <p>
      All transactions are subject to their respective refund and cancellation policies:
    </p>
    <ul className="list-disc ml-6">
      <li>
        <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">
          Google Play Refund Policy
        </a>
      </li>
      <li>
        <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">
          Apple Refund Policy
        </a>
      </li>
    </ul> */}

    <h2 className="text-xl font-semibold mt-8 mb-2">3. Warranties & Disclaimers</h2>
    <p>
      The App is provided “AS IS” and “AS AVAILABLE.” We make no guarantees regarding uptime, availability, or fitness for a particular purpose. Use of the Service is at your own risk.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages, including but not limited to data loss or business interruption. In any case, liability is limited to the amount you paid (if any) for the App.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Modifications</h2>
    <p>
      We may update these Terms at any time. Material changes will be announced via this website. Continued use of the Service after updates indicates your acceptance.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">6. Access restriction</h2>
    <p>
      We reserve the right to terminate or restrict your access to the Service at any time, with or without notice, if we believe you have violated these Terms or used the App improperly.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">7. Dispute Resolution</h2>
    <p>
      If a dispute arises, we ask you to first attempt to resolve it informally by contacting us through our support channel. If unresolved, all disputes, claims, or litigation arising out of or in connection with these Terms shall be governed by and construed in accordance with the laws of Spain. Any legal proceedings or disputes shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">8. Legal Framework</h2>
    <p>
      <strong>For EU Users:</strong> You are entitled to statutory consumer protections under the laws of your country of residence.
    </p>
    <p>
      <strong>For U.S. Compliance:</strong> You confirm that you are not located in an embargoed country or on a U.S. government sanctions list.
    </p>
    <br />
    <p>
      These Terms and any disputes or claims arising out of or in connection with them shall be governed by and construed in accordance with the laws of Spain. Any litigation, legal proceedings, or disputes arising from the interpretation or execution of these Terms shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">9. General Provisions</h2>
    <p>
      <strong>Severability:</strong> If any part of these Terms is found invalid or unenforceable, the rest shall remain in effect and be interpreted to fulfill its intent as closely as possible.
    </p>
    <p>
      <strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that or any other right.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact</h2>
    <p>
      For questions about these Terms, please contact us via our support email: <a href="mailto:support@trainwithatlas.app" className="underline text-atlas-green-strong">support@trainwithatlas.app</a>.
    </p>
  </main>
);

export default TOS;
