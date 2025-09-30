import { cn } from '@/lib/utils';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-12 bg-atlas-gray-darkest border-t border-atlas-gray-unselected/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white flex items-center">
              ATLAS
            </div>
            <p className="text-atlas-gray-light mt-2 max-w-xs">
              AI-powered fitness companion for your perfect workout routine.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-3">App</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">Features</a></li>
                <li><a href="#download" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/tos" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@atlasapp.com" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">Support</a></li>
                <li><a href="#" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-atlas-gray-unselected/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-atlas-gray-light text-sm mb-4 md:mb-0">
            &copy; {currentYear} Atlas Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
