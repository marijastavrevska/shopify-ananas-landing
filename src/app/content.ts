/**
 * All page copy in one place. The template reads from this document.
 */
export const PAGE_CONTENT = {
  appName: 'Ananas Marketplace Sync',
  companyName: 'Bibo Group',
  supportEmail: 'support@bibogroup.co',

  hero: {
    eyebrow: 'Shopify app by',
    subtitle:
      'Automatically sync products and orders between Shopify and Ananas. Connect once and keep your catalog and orders in sync.',
    tags: ['Product sync', 'Order sync', 'Ananas'],
    nav: [
      { href: '#about', label: 'About' },
      { href: '#privacy', label: 'Privacy' },
      { href: '#instructions', label: 'Instructions' },
      { href: '#screenshots', label: 'Screenshots' },
      { href: '#contact', label: 'Contact' },
    ],
  },

  about: {
    kicker: 'Overview',
    meta: 'Purpose',
    title: 'About this app',
    intro: [
      'Ananas Marketplace Sync connects your Shopify store with the Ananas platform so you can sell on both without manual updates. The app performs two main tasks:',
      'Product sync (Shopify → Ananas): When you create or update products in Shopify (title, price, stock, images, SKU), changes are sent to Ananas automatically. New products appear on Ananas; edits stay in sync.',
      'Order sync (Ananas → Shopify): Orders placed on Ananas for your products are created in your Shopify store. A daily job (around 1:00 AM UTC) fetches new Ananas orders and creates them in Shopify so you manage everything in one place.',
    ],
    pills: ['Real-time product sync', 'Daily order sync', 'SKU-based matching'],
    beforeStartTitle: 'Before you start',
    beforeStartItems: [
      'An active Shopify store',
      'An Ananas account (api.ananas.rs)',
      'Ananas Client ID and Client Secret from your Ananas merchant settings',
    ],
  },

  privacy: {
    kicker: 'Legal',
    meta: 'Last updated: Feb 16, 2025',
    title: 'Privacy Policy',
    intro:
      'This policy describes how we collect, use, store, and protect personal data in connection with our Shopify application. We comply with applicable privacy laws, including GDPR, CPRA, and other relevant regulations.',
    controllerTitle: 'Controller',
    controllerText:
      'Contact for privacy inquiries: use the support email below. Please add your company physical address before publishing if required in your jurisdiction.',
    collectTitle: 'Information we collect',
    collectItems: [
      'From merchants: Shopify store domain, OAuth tokens (encrypted), Ananas client ID and secret (encrypted), session and usage data.',
      'Via Shopify APIs: Product data (read/write), orders (read/write), inventory (read), content (read/write). We store product mappings (Shopify ↔ Ananas IDs) and order sync logs (shop domain, order IDs, timestamps). Customer/order data in transit for sync is not retained beyond identifiers and metadata.',
      'End customers: We do not drop cookies or track your store visitors. We do not directly collect personal data from your customers; any customer/order data is obtained via Shopify APIs solely to provide app functionality.',
    ],
    useTitle: 'How we use your information',
    useText:
      'To provide and operate the app (install, authenticate, sync products and orders), maintain and improve the app, support you, and comply with legal obligations. We do not use your data for marketing or advertising, sell your data, or use it for profiling that significantly affects you.',
    legalBasisTitle: 'Legal basis (EEA/UK)',
    legalBasisText:
      'Contract (to provide the app), legitimate interests (improvement, security, support), and legal obligation where we must retain or disclose data.',
    retentionTitle: 'Data retention',
    retentionItems: [
      'Sessions and authentication: while the app is installed; deleted on uninstall or shop redaction.',
      'Product mappings: while installed and needed for sync; deleted on uninstall.',
      'Order sync logs: e.g. 24 months for reporting/support; deleted on uninstall or on request.',
      'Support and system logs: e.g. 12 months for security and troubleshooting.',
    ],
    retentionCallout: 'Update retention periods above to match your actual practices.',
    locationTitle: 'Data location and transfers',
    locationText:
      'Data may be stored in your hosting region (e.g. United States). When transferring from EEA/UK we use appropriate safeguards (e.g. Standard Contractual Clauses). Add your hosting region and mechanisms if applicable.',
    sharingTitle: 'Data sharing',
    sharingText:
      'We share data only with service providers under strict agreements, with Shopify and Ananas as necessary for the app, and when required by law or to protect rights and safety. We do not sell personal data.',
    rightsTitle: 'Your rights',
    rightsText:
      'Depending on your location: access, correction, erasure, restriction, portability, object, withdraw consent, complain to a supervisory authority. Contact us at',
    rightsTextAfter: 'We respond within the timeframe required by law (e.g. 30 days under GDPR).',
    webhooksTitle: 'Shopify compliance webhooks',
    webhooksTextAfter: 'We respond within 30 days where feasible, except where legal obligations prevent deletion.',
    securityTitle: 'Security',
    securityText:
      'We use encryption for sensitive credentials at rest, HTTPS/TLS in transit, access controls, and regular security review.',
    childrenTitle: 'Children',
    childrenText:
      'The app is not intended for individuals under 16. We do not knowingly collect their personal data.',
    changesTitle: 'Changes',
    changesText:
      'We may update this policy and will notify you of material changes by posting in the app or by other reasonable means. Continued use after changes constitutes acceptance.',
  },

  instructions: {
    kicker: 'Guide',
    meta: 'User manual',
    title: 'How to use the app',
    steps: [
      {
        label: 'Install',
        text: "From the Shopify App Store or Partner link, click Add app / Install. Grant permissions: Products (read/write), Orders (read/write), Inventory (read), Content (read/write). Complete OAuth; you'll be redirected to the Ananas setup screen.",
      },
      {
        label: 'Connect Ananas',
        text: 'Enter your Ananas Client ID and Client Secret on the auth-ananas page. Click Save/Connect. Credentials are stored encrypted. If valid, you’re redirected to the Dashboard.',
      },
      {
        label: 'Product sync',
        text: 'Create or edit products in Shopify; webhooks trigger sync to Ananas. Ensure variants have SKUs and products have at least a title, price, and preferably an image.',
      },
      {
        label: 'Order sync',
        text: 'Orders from Ananas are created in Shopify once per day (around 1:00 AM UTC). Line items are matched by SKU. New orders appear in Shopify Admin → Orders; the dashboard shows sync statistics.',
      },
    ],
    troubleshootingTitle: 'Troubleshooting',
    troubleshootingItems: [
      'Ananas not connected: Re-enter Client ID and Secret; verify they’re active in Ananas.',
      'Products not on Ananas: Check SKUs, title/price/image; allow a few minutes for webhooks.',
      'Orders not in Shopify: Verify Ananas credentials and that line item SKUs match Shopify products; check dashboard stats.',
    ],
    whatGetsSyncedTitle: 'What gets synced',
    productsSyncedLabel: 'Products',
    productsSynced: 'Title, description, images, variant SKU, price, inventory, weight, vendor, product type.',
    ordersSyncedLabel: 'Orders',
    ordersSynced: 'Total, line items (SKU, quantity, price), billing address, customer name; Ananas order ID in order note.',
    supportCallout:
      'For technical issues, contact support with your store URL, description of the issue, error messages, and steps to reproduce.',
  },

  screenshots: {
    kicker: 'UI',
    meta: 'Screenshots',
    title: 'What it looks like',
    items: [
      { img: 'assets/dashboard-cover.png', alt: 'Ananas Marketplace Sync dashboard overview', captionTitle: 'Dashboard', captionText: 'Overview of sync stats and orders synced chart.' },
      { img: 'assets/ananas-login.png', alt: 'Ananas integration credentials screen', captionTitle: 'Ananas setup', captionText: 'Enter Client ID and Client Secret to connect.' },
      { img: 'assets/dashboard-24h.png', alt: 'Orders synced last 24 hours', captionTitle: 'Orders synced', captionText: 'Last 24 hours filter with metric cards and chart.' },
      { img: 'assets/dashboard-7d.png', alt: 'Orders synced last 7 days', captionTitle: 'Orders synced', captionText: 'Last 7 days view with daily breakdown.' },
      { img: 'assets/products-added.png', alt: 'Products added table', captionTitle: 'Products added', captionText: 'Table of synced products with image, title, date, SKU, price.' },
      { img: 'assets/products-updated.png', alt: 'Products updated table', captionTitle: 'Products updated', captionText: 'List of changes (title, quantity, price) with SKU.' },
    ],
  },

  contact: {
    kicker: 'Support',
    title: 'Contact',
    intro: 'For questions, technical support, or privacy inquiries:',
  },

  footer: {
    rights: 'All rights reserved.',
  },

  backToTop: {
    label: 'Back to top',
    ariaLabel: 'Scroll to top of page',
  },
} as const;
