import React from "react";

const Privacy = () => (
  <main className="container mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy – Atlas mobile app</h1>
    <p>
      <strong>Effective Date:</strong> 22/7/2025
    </p>
    <br />
    <p>
      This Privacy Policy explains how personal data is handled. Please review the following privacy policy carefully before using the Atlas mobile application ("App", "Application", "Service").
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">1. Controller Information</h2>
    <p>
      The responsible for data processing about this app  within the scope of the General Data Protection Regulation or GDPR is Adrián Castro Torres, Facetos Street 36, 33013, Oviedo, Asturias, email: support@trainwithatlas.app.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. Data Collection</h2>
    <p>
      Atlas does not collect or transmit personal workout data. All data related to your physical activity remains on your device. No cloud sync, login, or registration is required. Atlas may collect and transmit data, always with your consent, by using Firebase Crashlytics or Firebase Analytics, this is always based on the user's consents and can be changed at any moment in the app Settings. Its purpose is improving the app stability and detect crashes or errors (Firebase Crashlytics) or analyze which features are most used or where do users don't continue their journey, and that helps us at Atlas to make it possible to improve the user's experience and understanding of how the app works (Firebase Analytics). 
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">3. Third-Party Processors</h2>
    <h3 className="text-lg font-semibold mt-6 mb-2">a) RevenueCat</h3>
    <p>
      Handles subscription purchases and status. Minimal transaction metadata may be shared solely for validation.<br />
      <strong>Provider:</strong> RevenueCat Inc., 300 Euclid Avenue San Francisco, CA 94118, USA<br />
      <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">RevenueCat Privacy Policy</a>
    </p>

    <h3 className="text-lg font-semibold mt-6 mb-2">b) Firebase Analytics & Crashlytics</h3>
    <p>
      Firebase Crashlytics: Used for crash reporting. May send anonymized crash data like device model, OS version, and crash trace. No personal data is included.<br />
      Firebase Analytics: Used to track anonymized app usage (e.g., screen views). No identifying personal data is collected.<br /><br />
      <strong>Provider:</strong>Google Ireland Ltd., Google Building Gordon House, Barrow Street, Dublin 4, Ireland or Google LLC in the US<br /><br />
      Consent-based: you may opt out in app settings.<br />
      <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">Firebase Privacy Policy</a>
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Communication & Contact</h2>
    <p>
      If you contact us (e.g., email), we collect your communication and contact details for the purpose of responding. Legal basis: Art. 6(1)(f) GDPR.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Your GDPR Rights</h2>
    <ul className="list-disc ml-6">
      <li>Access, Rectification, and Erasure (Art. 15–17)</li>
      <li>Restriction and Objection (Art. 18, 21)</li>
      <li>Data Portability (Art. 20)</li>
      <li>Withdraw Consent (Art. 7)</li>
      <li>Lodge Complaint (Art. 77)</li>
    </ul>

    <h3 className="text-lg font-semibold mt-6 mb-2">6. Right to Object</h3>
    <p>
      You may opt out of sharing anonymized analytics data in app settings. This does not affect your ability to use the app, but it help us to identify what features are most popular and useful for users, and therefore contributes to bring a better experience for you.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">7. Children's Privacy</h2>
    <p>
      This app is not intended for individuals under the legal age of majority in their jurisdiction (typically 18+). If you are underage, you are not permitted to use this app. No personal identifying data is knowingly collected.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to this Policy</h2>
    <p>
      We may update this Privacy Policy periodically. You will be informed via this website, and a history of past privacy policies will be available once significant changes occur after the app is live.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law and Jurisdiction</h2>
    <p>
      This Privacy Policy and any disputes or claims arising out of or in connection with it shall be governed by and construed in accordance with the laws of Spain. Any litigation, legal proceedings, or disputes arising from the interpretation or execution of this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact</h2>
    <p>
      For questions about this Privacy policy, please contact us via our support email: <a href="mailto:support@trainwithatlas.app" className="underline text-atlas-green-strong">support@trainwithatlas.app</a>.
    </p>
  </main>
);

export default Privacy;
