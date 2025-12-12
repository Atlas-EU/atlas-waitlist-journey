import React from "react";
import { useLanguage } from "../hooks/use-language";

const TOS = () => {
  const [language, setLanguage] = useLanguage();

  const content = {
    en: {
      title: "Terms of Service – Atlas mobile app",
      effectiveDate: "Effective Date:",
      dateValue: "22/7/2025",
      interpretation: "Interpretation",
      interpretationText: "These Terms of Service (\"Terms of use\", \"Terms\") constitute a legal agreement between the user and the Atlas mobile application (\"App\", \"Application\", \"Service\"). Please review the following terms carefully before using. By using the App, you agree to comply with these Terms, which rule the user's usage of the Service. If you are not in agreement with these Terms, you must not use the App.",
      section1: "1. Agreement & Eligibility",
      section1Text: "These Terms form a legal agreement between you and the developer (\"we\", \"us\"). The Service is intended only for individuals who have reached the legal age of majority in their jurisdiction (typically 18+). If you are underage, you are not permitted to use this app.",
      section2: "2. Features & Usage",
      section2Text: "Atlas is a local workout planner that stores all training data on your device. No user accounts or remote backups are required. You may optionally benefit from features powered by third-party services, including Google Analytics, Crashlytics, and RevenueCat. The App is designed and expected to be used on a single device per user.",
      section2TextCont: "We do not take any responsibility for loss or corruption of the app's data. Any loss of data, corruption, or incompatibility is not the responsibility of Atlas or its developers.",
      section3: "3. Warranties & Disclaimers",
      section3Text: "The App is provided \"AS IS\" and \"AS AVAILABLE.\" We make no guarantees regarding uptime, availability, or fitness for a particular purpose. Use of the Service is at your own risk.",
      section4: "4. Limitation of Liability",
      section4Text: "To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages, including but not limited to data loss or business interruption. In any case, liability is limited to the amount you paid (if any) for the App.",
      section5: "5. Modifications",
      section5Text: "We may update these Terms at any time. Material changes will be announced via this website. Continued use of the Service after updates indicates your acceptance.",
      section6: "6. Access restriction",
      section6Text: "We reserve the right to terminate or restrict your access to the Service at any time, with or without notice, if we believe you have violated these Terms or used the App improperly.",
      section7: "7. Dispute Resolution",
      section7Text: "If a dispute arises, we ask you to first attempt to resolve it informally by contacting us through our support channel. If unresolved, all disputes, claims, or litigation arising out of or in connection with these Terms shall be governed by and construed in accordance with the laws of Spain. Any legal proceedings or disputes shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.",
      section8: "8. Legal Framework",
      section8Text: "For EU Users: You are entitled to statutory consumer protections under the laws of your country of residence.",
      section8TextCont: "You confirm that you are not located in an embargoed country or on a U.S. government sanctions list.",
      section8TextEnd: "These Terms and any disputes or claims arising out of or in connection with them shall be governed by and construed in accordance with the laws of Spain. Any litigation, legal proceedings, or disputes arising from the interpretation or execution of these Terms shall be subject to the exclusive jurisdiction of the courts of Oviedo, Asturias, Spain.",
      section9: "9. General Provisions",
      section9TextOne: "If any part of these Terms is found invalid or unenforceable, the rest shall remain in effect and be interpreted to fulfill its intent as closely as possible.",
      section9TextTwo: "Failure to enforce any right does not constitute a waiver of that or any other right.",
      section10: "10. Contact",
      section10Text: "For questions about these Terms, please contact us via our support email:"
    },
    es: {
      title: "Términos de Servicio – Aplicación móvil Atlas",
      effectiveDate: "Fecha Efectiva:",
      dateValue: "22/7/2025",
      interpretation: "Interpretación",
      interpretationText: "Estos Términos de Servicio (\"Términos de uso\", \"Términos\") constituyen un acuerdo legal entre el usuario y la aplicación móvil Atlas (\"Aplicación\", \"Servicio\"). Por favor, revisa los siguientes términos cuidadosamente antes de usar. Al utilizar la Aplicación, aceptas cumplir con estos Términos, que rigen el uso de la Aplicación. Si no estás de acuerdo con estos Términos, no debes usar la Aplicación.",
      section1: "1. Acuerdo e Idoneidad",
      section1Text: "Estos Términos constituyen un acuerdo legal entre tú y el desarrollador (\"nosotros\", \"nos\"). El Servicio está destinado únicamente para individuos que han alcanzado la mayoría de edad en su jurisdicción (típicamente 18+). Si eres menor, no se te permite usar esta aplicación.",
      section2: "2. Características y Uso",
      section2Text: "Atlas es un planificador de entrenamientos local que almacena todos los datos de entrenamiento en tu dispositivo. No se requieren cuentas de usuario ni copias de seguridad remotas. Opcionalmente puedes beneficiarte de características impulsadas por servicios de terceros, incluidos Google Analytics, Crashlytics y RevenueCat. La Aplicación está diseñada y se espera que se use en un único dispositivo por usuario.",
      section2TextCont: "No asumimos ninguna responsabilidad por pérdida o corrupción de los datos de la aplicación. Cualquier pérdida de datos, corrupción o incompatibilidad no es responsabilidad de Atlas o sus desarrolladores.",
      section3: "3. Garantías y Renuncias",
      section3Text: "La Aplicación se proporciona \"TAL CUAL\" y \"SEGÚN DISPONIBILIDAD\". No hacemos garantías respecto a la disponibilidad, tiempo de operación o idoneidad para un propósito particular. El uso del Servicio es bajo tu riesgo.",
      section4: "4. Limitación de Responsabilidad",
      section4Text: "En la medida permitida por la ley, no somos responsables por daños indirectos, incidentales o consecuentes, incluyendo pero no limitado a pérdida de datos o interrupción empresarial. En cualquier caso, la responsabilidad se limita a la cantidad que pagaste (si la hay) por la Aplicación.",
      section5: "5. Modificaciones",
      section5Text: "Podemos actualizar estos Términos en cualquier momento. Los cambios materiales se anunciarán a través de este sitio web. El uso continuado del Servicio después de las actualizaciones indica tu aceptación.",
      section6: "6. Restricción de Acceso",
      section6Text: "Nos reservamos el derecho de terminar o restringir tu acceso al Servicio en cualquier momento, con o sin previo aviso, si creemos que has violado estos Términos o has utilizado la Aplicación de manera inapropiada.",
      section7: "7. Resolución de Disputas",
      section7Text: "Si surge una disputa, te pedimos que primero intentes resolverla informalmente contactándonos a través de nuestro canal de soporte. Si no se resuelve, todas las disputas, reclamaciones o litigios que surjan de o estén conectados con estos Términos se regirán por y se interpretarán de conformidad con las leyes de España. Cualquier procedimiento legal o disputa estará sujeto a la jurisdicción exclusiva de los tribunales de Oviedo, Asturias, España.",
      section8: "8. Marco Legal",
      section8Text: "Para Usuarios de la UE: Tienes derecho a protecciones de consumidor estatutarias bajo las leyes de tu país de residencia.",
      section8TextCont: "Confirmas que no te encuentras en un país embargado o en una lista de sanciones del gobierno de EE.UU.",
      section8TextEnd: "Estos Términos y cualquier disputa o reclamación que surja de o esté conectada con ellos, se regirá por y se interpretará de conformidad con las leyes de España. Cualquier litigio, procedimiento legal o disputa que surja de la interpretación o ejecución de estos Términos estará sujeto a la jurisdicción exclusiva de los tribunales de Oviedo, Asturias, España.",
      section9: "9. Disposiciones Generales",
      section9TextOne: "Si alguna parte de estos Términos se considera inválida o inaplicable, el resto permanecerá en efecto y se interpretará para cumplir con su intención lo más estrechamente posible.",
      section9TextTwo: "El hecho de no hacer cumplir un derecho no constituye una renuncia a ese derecho u otro derecho.",
      section10: "10. Contacto",
      section10Text: "Para preguntas sobre estos Términos, ponte en contacto con nosotros a través de nuestro correo de soporte:"
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
      
      <h2 className="text-xl font-regular mt-8 mb-2">{t.interpretation}</h2>
      <p>{t.interpretationText}</p>
      
      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section1}</h2>
      <p>{t.section1Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section2}</h2>
      <p>{t.section2Text}</p>
      <br />
      <p>{t.section2TextCont}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section3}</h2>
      <p>{t.section3Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section4}</h2>
      <p>{t.section4Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section5}</h2>
      <p>{t.section5Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section6}</h2>
      <p>{t.section6Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section7}</h2>
      <p>{t.section7Text}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section8}</h2>
      <p>{t.section8Text}</p>
      <p>{t.section8TextCont}</p>
      <br />
      <p>{t.section8TextEnd}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section9}</h2>
      <p>{t.section9TextOne}</p>
      <p>{t.section9TextTwo}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">{t.section10}</h2>
      <p>
        {t.section10Text}{' '}
        <a href="mailto:support@trainwithatlas.app" className="underline text-atlas-green-strong">
          support@trainwithatlas.app
        </a>
      </p>
    </main>
  );
};

export default TOS;

