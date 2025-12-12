import React from "react";
import { useLanguage } from "../hooks/use-language";

const Privacy = () => {
  const [language, setLanguage] = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy – Atlas mobile app",
      effectiveDate: "Effective Date:",
      dateValue: "22/7/2025",
      intro: "This Privacy Policy explains how personal data is handled. Please review the following privacy policy carefully before using the Atlas mobile application (\"App\", \"Application\", \"Service\").",
      section1Title: "1. Controller Information",
      section1Content: "The responsible for data processing about this app within the scope of the General Data Protection Regulation or GDPR is Adrián Castro Torres, with contact address: Facetos Street 36, 33013, Oviedo, Asturias, Spain and email: support@trainwithatlas.app.",
      section2Title: "2. Data Collection",
      section2Content: "Atlas does not collect or transmit personal workout data. All data related to your physical activity remains on your device. No cloud sync, login, or registration is required. Atlas may collect and transmit data, always with your consent, by using Firebase Crashlytics or Firebase Analytics, this is always based on the user's consents and can be changed at any moment in the app Settings. Its purpose is improving the app stability and detect crashes or errors (Firebase Crashlytics) or analyze which features are most used or where do users don't continue their journey, and that helps us at Atlas to make it possible to improve the user's experience and understanding of how the app works (Firebase Analytics).",
      section3Title: "3. Third-Party Processors",
      section3aTitle: "a) RevenueCat",
      section3aContent: "Handles subscription purchases and status. Minimal transaction metadata may be shared solely for validation.",
      provider: "Provider:",
      section3aProvider: "RevenueCat Inc., 300 Euclid Avenue San Francisco, CA 94118, USA",
      revenuePolicy: "RevenueCat Privacy Policy",
      section3bTitle: "b) Firebase Analytics & Crashlytics",
      section3bContent: "Firebase Crashlytics: Used for crash reporting. May send anonymized crash data like device model, OS version, and crash trace. No personal data is included.\nFirebase Analytics: Used to track anonymized app usage (e.g., screen views). No identifying personal data is collected.",
      section3bProvider: "Google Ireland Ltd., Google Building Gordon House, Barrow Street, Dublin 4, Ireland or Google LLC in the US",
      consentBased: "Consent-based: you may opt out in app settings.",
      firebasePolicy: "Firebase Privacy Policy",
      section4Title: "4. Communication & Contact",
      section4Content: "If you contact us (e.g., email), we collect your communication and contact details for the purpose of responding. Legal basis: Art. 6(1)(f) GDPR.",
      section5Title: "5. Your GDPR Rights",
      section5Items: [
        "Access, Rectification, and Erasure (Art. 15–17)",
        "Restriction and Objection (Art. 18, 21)",
        "Data Portability (Art. 20)",
        "Withdraw Consent (Art. 7)",
        "Lodge Complaint (Art. 77)"
      ],
      section6Title: "6. Right to Object",
      section6Content: "You may opt out of sharing anonymized analytics data in app settings. This does not affect your ability to use the app, but it help us to identify what features are most popular and useful for users, and therefore contributes to bring a better experience for you.",
      section7Title: "7. Children's Privacy",
      section7Content: "This app is not intended for individuals under the legal age of majority in their jurisdiction (typically 18+). If you are underage, you are not permitted to use this app. No personal identifying data is knowingly collected.",
      section8Title: "8. Changes to this Policy",
      section8Content: "We may update this Privacy Policy periodically. You will be informed via this website, and a history of past privacy policies will be available once significant changes occur after the app is live.",
      section9Title: "9. Governing Law and Jurisdiction",
      section9Content: "This Privacy Policy and any disputes or claims arising out of or in connection with it shall be governed by and construed in accordance with the laws of Spain. Any litigation, legal proceedings, or disputes arising from the interpretation or execution of this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.",
      section10Title: "10. Contact",
      section10Content: "For questions about this Privacy policy, please contact us via our support email:",
    },
    es: {
      title: "Política de Privacidad – Aplicación móvil Atlas",
      effectiveDate: "Fecha Efectiva:",
      dateValue: "22/7/2025",
      intro: "Esta Política de Privacidad explica cómo se gestiona los datos personales. Por favor, revisa la siguiente política de privacidad cuidadosamente antes de utilizar la aplicación móvil Atlas (\"Aplicación\", \"Servicio\").",
      section1Title: "1. Información del Controlador",
      section1Content: "El responsable del tratamiento de datos de esta aplicación dentro del alcance del Reglamento General de Protección de Datos (RGPD) es Adrián Castro Torres, con domicilio en: Calle Facetos 36, 33013, Oviedo, Asturias, España y correo electrónico: support@trainwithatlas.app.",
      section2Title: "2. Recopilación de Datos",
      section2Content: "Atlas no recopila ni transmite datos personales de entrenamientos. Todos los datos relacionados con tu actividad física permanecen en tu dispositivo. No se requiere sincronización en la nube, inicio de sesión o registro. Atlas puede recopilar y transmitir datos, siempre con tu consentimiento, utilizando Firebase Crashlytics o Firebase Analytics, esto siempre se basa en los consentimientos del usuario y se puede cambiar en cualquier momento en la configuración de la aplicación. Su propósito es mejorar la estabilidad de la aplicación y detectar fallos o errores (Firebase Crashlytics) o analizar qué características se usan más o dónde los usuarios no continúan su viaje, y esto nos ayuda en Atlas a mejorar la experiencia del usuario y la comprensión de cómo funciona la aplicación (Firebase Analytics).",
      section3Title: "3. Procesadores de Terceros",
      section3aTitle: "a) RevenueCat",
      section3aContent: "Gestiona las compras por suscripción y el estado. Los metadatos mínimos de la transacción solo pueden compartirse para validación.",
      provider: "Proveedor:",
      section3aProvider: "RevenueCat Inc., 300 Euclid Avenue San Francisco, CA 94118, USA",
      revenuePolicy: "Política de Privacidad de RevenueCat",
      section3bTitle: "b) Firebase Analytics y Crashlytics",
      section3bContent: "Firebase Crashlytics: Utilizado para informes de fallos. Puede enviar datos de fallos anonimizados como modelo de dispositivo, versión del SO y seguimiento de fallos. No se incluyen datos personales.\nFirebase Analytics: Utilizado para rastrear el uso anonimizado de la aplicación (por ejemplo, vistas de pantalla). No se recopilan datos personales identificables.",
      section3bProvider: "Google Ireland Ltd., Google Building Gordon House, Barrow Street, Dublin 4, Irlanda o Google LLC en EE.UU.",
      consentBased: "Basado en consentimiento: puedes optar por no participar en la configuración de la aplicación.",
      firebasePolicy: "Política de Privacidad de Firebase",
      section4Title: "4. Comunicación y Contacto",
      section4Content: "Si nos contactas (por ejemplo, por correo electrónico), recopilamos tu comunicación y detalles de contacto con el propósito de responder. Base legal: Art. 6(1)(f) RGPD.",
      section5Title: "5. Tus Derechos RGPD",
      section5Items: [
        "Acceso, Rectificación y Supresión (Art. 15–17)",
        "Restricción y Objeción (Art. 18, 21)",
        "Portabilidad de Datos (Art. 20)",
        "Retirar Consentimiento (Art. 7)",
        "Presentar una Reclamación (Art. 77)"
      ],
      section6Title: "6. Derecho de Objeción",
      section6Content: "Puedes optar por no compartir datos analíticos anonimizados en la configuración de la aplicación. Esto no afecta tu capacidad de usar la aplicación, pero nos ayuda a identificar qué características son más populares y útiles para los usuarios, y por lo tanto contribuye a brindarte una mejor experiencia.",
      section7Title: "7. Privacidad de Menores",
      section7Content: "Esta aplicación no está destinada a personas menores de edad en su jurisdicción (típicamente menores de 18 años). Si eres menor, no se te permite usar esta aplicación. No se recopilan datos personales identificables deliberadamente.",
      section8Title: "8. Cambios en esta Política",
      section8Content: "Podemos actualizar esta Política de Privacidad periódicamente. Se te informará a través de este sitio web, y estará disponible un historial de políticas de privacidad anteriores una vez que se produzcan cambios significativos después de que la aplicación esté disponible.",
      section9Title: "9. Ley Aplicable y Jurisdicción",
      section9Content: "Esta Política de Privacidad y cualquier disputa o reclamación que surja de o esté conectada con ella, se regirá por y se interpretará de conformidad con las leyes de España. Cualquier litigio, procedimiento legal o disputa que surja de la interpretación o ejecución de esta Política de Privacidad estará sujeto a la jurisdicción exclusiva de los tribunales de Oviedo, Asturias, España.",
      section10Title: "10. Contacto",
      section10Content: "Para preguntas sobre esta Política de Privacidad, ponte en contacto con nosotros a través de nuestro correo de soporte:",
    }
  };

  const t = content[language];

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded font-semibold transition ${
            language === 'en'
              ? 'bg-[#47FF00] text-black'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded font-semibold transition ${
            language === 'es'
              ? 'bg-[#47FF00] text-black'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          Español
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p>
        <strong>{t.effectiveDate}</strong> {t.dateValue}
      </p>
      <br />
      <p>{t.intro}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section1Title}</h2>
      <p>{t.section1Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section2Title}</h2>
      <p>{t.section2Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section3Title}</h2>
      <h3 className="text-lg font-semibold mt-6 mb-2">{t.section3aTitle}</h3>
      <p>
        {t.section3aContent}
        <br />
        <strong>{t.provider}</strong> {t.section3aProvider}
        <br />
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">
          {t.revenuePolicy}
        </a>
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">{t.section3bTitle}</h3>
      <p>
        {t.section3bContent}
        <br />
        <br />
        <strong>{t.provider}</strong> {t.section3bProvider}
        <br />
        <br />
        <strong>{t.consentBased}</strong>
        <br />
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="underline text-atlas-green-strong">
          {t.firebasePolicy}
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section4Title}</h2>
      <p>{t.section4Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section5Title}</h2>
      <ul className="list-disc ml-6 mb-4">
        {t.section5Items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section6Title}</h2>
      <p>{t.section6Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section7Title}</h2>
      <p>{t.section7Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section8Title}</h2>
      <p>{t.section8Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section9Title}</h2>
      <p>{t.section9Content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section10Title}</h2>
      <p>
        {t.section10Content}{' '}
        <a href="mailto:support@trainwithatlas.app" className="underline text-atlas-green-strong">
          support@trainwithatlas.app
        </a>
      </p>
    </main>
  );
};

export default Privacy;
