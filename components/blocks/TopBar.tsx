import { siteConfig } from '@/config/site.config';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="left">
          <span className="pill">
            <span className="dot" /> Available across Brisbane &amp; Gold Coast
          </span>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <div className="right">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
          <a href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}>{siteConfig.mobile}</a>
        </div>
      </div>
    </div>
  );
}
