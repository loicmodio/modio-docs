import 'dotenv/config'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const url = process.env.URL || 'http://localhost:3000'
const startStyle = `
  <div class="tw-flex tw-flex-row tw-items-center tw-w-full tw-px-8 tw-space-x-4 tw-font-bold tw-tracking-widest">
`
const endStyle = '</div>'
const startStylePush = `<div class="tw-mt-5" />${startStyle}`

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    // mod.io
    {
      type: 'html',
      value: `${startStylePush}MOD.IO${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'autogenerated', dirName: 'modio',
    },
    // Game Integration
    {
      type: 'html',
      value: `${startStylePush}GAME INTEGRATION${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Unreal',
      link: {type: 'doc', id: 'game-integration/unreal/index-unreal'},
      items: ['game-integration/unreal/installation-and-setup', 'game-integration/unreal/getting-started', 'game-integration/unreal/ui-getting-started', 'game-integration/unreal/profiling', 'game-integration/unreal/mod-creation-tool', 'game-integration/unreal/android-configuration', 'game-integration/unreal/marketplace',  
        {
          type: 'link',
          label: 'Unreal Reference', 
          href: `${url}/unrealref/#_classes`, 
        },
      ],
    },
    {
      type: 'category',
      label: 'Unity',
      link: {type: 'doc', id: 'game-integration/unity/unity'},
      items: ['game-integration/unity/unity-setup', 'game-integration/unity/unity-getting-started', 'game-integration/unity/unity-ugc-browser', 'game-integration/unity/unity-marketplace', 
        {
          type: 'link',
          label: 'Unity Reference', 
          href: `${url}/unityref/`, 
        },
      ],
    },
    {
      type: 'category',
      label: 'C++ SDK',
      link: {type: 'doc', id: 'game-integration/sdk/index-sdk'},
      items: [
        'game-integration/sdk/installation-and-setup', 'game-integration/sdk/getting-started', 'game-integration/sdk/sdk-marketplace',
        {
          type: 'category',
          label: 'Windows',
          link: {type: 'doc', id: 'game-integration/sdk/win32/windows-getting-started'},
          items: ['game-integration/sdk/win32/windows-cmake-integration']
        },
        {
          type: 'category',
          label: 'Linux',
          link: {type: 'doc', id: 'game-integration/sdk/linux/linux-getting-started'},
          items: ['game-integration/sdk/linux/linux-cmake-integration']
        },
        {
          type: 'category',
          label: 'Mac',
          link: {type: 'doc', id: 'game-integration/sdk/macos/mac-getting-started'},
          items: ['game-integration/sdk/macos/mac-cmake-integration']
        },
        {
          type: 'category',
          label: 'iOS',
          link: {type: 'doc', id: 'game-integration/sdk/ios/ios-getting-started'},
          items: ['game-integration/sdk/ios/ios-cmake-integration']
        },
        {
          type: 'category',
          label: 'Android',
          link: {type: 'doc', id: 'game-integration/sdk/android/android-getting-started'},
          items: ['game-integration/sdk/android/android-cmake-integration']
        }, 
        {
          type: 'link',
          label: 'C++ SDK Reference', 
          href: `${url}/cppsdkref/#_functions`, 
        },
      ],
    },
    // Platforms
    {
      type: 'html',
      value: `${startStylePush}PLATFORMS${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms',
      label: 'Supporting Console Platforms',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-playstation',
      label: 'PlayStation®4 & PlayStation®5',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-switch',
      label: 'Nintendo Switch',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-gdk',
      label: 'Xbox One & Xbox Series X/S',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-console-sdks',
      label: 'Console SDKs',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-apple',
      label: 'Apple',
    },
    {
      type: 'doc',
      id: 'console-platforms/platforms-google',
      label: 'Google Play',
    },
    // Game Management
    {
      type: 'html',
      value: `${startStylePush}GAME MANAGEMENT${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Monetization',
      link: {type: 'doc', id: 'game-management/monetization/monetization'},
      items: [ 
        {
          type: 'category',
          label: 'Getting Started',
          link: {type: 'doc', id: 'game-management/monetization/monetization-getting-started'},
          items: ['game-management/monetization/monetization-how-it-works', 'game-management/monetization/monetization-enabling-monetization','game-management/monetization/monetization-onboarding', 'game-management/monetization/monetization-dashboard', 'game-management/monetization/monetization-approving-premium-ugc', 'game-management/monetization/monetization-marketplace', 'game-management/monetization/monetization-invoices', 'game-management/monetization/monetization-earnings-payouts']
        }, 
        {
          type: 'category',
          label: 'Integration',
          link: {type: 'doc', id: 'game-management/monetization/monetization-integration'},
          items: ['game-management/monetization/monetization-restapi']
        }, 
        'game-management/monetization/monetization-payment-testing', 'game-management/monetization/monetization-next-steps'
      ],
    },
    {
      type: 'category',
      label: 'Moderation',
      link: {type: 'doc', id: 'game-management/moderation/moderation'},
      items: ['game-management/moderation/automated-scanning', 'game-management/moderation/manual-curation', 'game-management/moderation/community-reports',
        {
          type: 'category',
          label: 'Rules Engine',
          link: {type: 'doc', id: 'game-management/moderation/rules-engine'},
          items: ['game-management/moderation/rules-engine-setup', 'game-management/moderation/rules-engine-webhooks', 'game-management/moderation/rules-engine-monitoring', 'game-management/moderation/rules-engine-examples'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Metrics',
      link: {type: 'doc', id: 'game-management/metrics/metrics'},
      items: [
        {
          type: 'category',
          label: 'Data',
          link: {type: 'doc', id: 'game-management/metrics/metrics-data'},
          items: ['game-management/metrics/ugc-data', 'game-management/metrics/user-activity-data', 'game-management/metrics/health-data'],
        },
        {
          type: 'doc',
          id: 'game-management/metrics/metrics-exporting',
          label: 'Exporting',
        },  
      ],
    },
    {
      type: 'doc',
      id: 'game-management/dependencies/dependency-management',
      label: 'Dependencies',
    },
    // Web Services
    {
      type: 'html',
      value: `${startStylePush}WEB SERVICES${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        {
          type: 'category',
          label: 'For Players',
          link: {type: 'doc', id: 'web-services/authentication/overview'},
          items: ['web-services/authentication/openid', 'web-services/authentication/website-studio-sso'],
        },
        {
          type: 'doc',
          id: 'web-services/authentication/s2s',
          label: 'For Web Servers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      link: {type: 'doc', id: 'web-services/marketplace/overview'},
      items: ['web-services/marketplace/studio-as-purchase-server',
        {
          type: 'category',
          label: 'Platforms Setup',
          items: ['web-services/marketplace/google'],
        },
      ],
    },
    // REST API
    {
      type: 'html',
      value: `${startStylePush}REST API${endStyle}`,
      defaultStyle: true,
    },
    {
        type: 'autogenerated', dirName: 'restapi',
    }, 
    {
      type: 'link',
      label: 'REST API Reference', 
      href: `${url}/restapiref/`, 
    },
    // Support
    {
      type: 'html',
      value: `${startStylePush}SUPPORT${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'autogenerated', dirName: 'support',
    },
  ],
};

export default sidebars;