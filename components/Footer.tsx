import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@flourfleetadvisory</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Navigation</h3>
            <nav className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600 mb-4">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> The information on this website is provided for educational and informational purposes only and should not be construed as individual tax advice. Tax law is complex and circumstances vary significantly from person to person. We strongly recommend that you obtain personalised advice from a qualified tax adviser before making any financial decisions. {siteConfig.name} and its advisers are not liable for any loss or damage resulting from reliance on this information.
          </p>
        </div>
      </div>
    </footer>
  );
}
