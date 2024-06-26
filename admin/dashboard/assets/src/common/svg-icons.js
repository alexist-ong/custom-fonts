import { createElement as el } from '@wordpress/element';

const Custom_Fonts_Icons = {
    'play': el(
        'svg',
        { width: 65, height: 64, viewBox: '0 0 65 64', fill: 'none', className: "my-0 mx-auto" },
        el('rect', {
            x: 0.5, rx: 32, width: 64, height: 64, fill: 'white',
        }),
        el('path', {
            d: 'M19.5 34H24.6459C25.7822 34 26.821 34.642 27.3292 35.6584L27.6708 36.3416C28.179 37.358 29.2178 38 30.3541 38H34.6459C35.7822 38 36.821 37.358 37.3292 36.3416L37.6708 35.6584C38.179 34.642 39.2178 34 40.3541 34H45.5M19.5 34.4511V40C19.5 41.6569 20.8431 43 22.5 43H42.5C44.1569 43 45.5 41.6569 45.5 40V34.4511C45.5 34.152 45.4553 33.8547 45.3673 33.5688L42.1516 23.1177C41.7643 21.859 40.6013 21 39.2843 21H25.7157C24.3987 21 23.2357 21.859 22.8484 23.1177L19.6327 33.5688C19.5447 33.8547 19.5 34.152 19.5 34.4511Z',
            stroke: '#3858E9',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        }),

    ),
    'plusicon2': el(
        'svg',
        {
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: '#3858E9',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M7.9998 0.800049C3.9998 0.800049 0.799805 4.00005 0.799805 8.00005C0.799805 12 3.9998 15.2 7.9998 15.2C11.9998 15.2 15.1998 12 15.1998 8.00005C15.1998 4.00005 11.9998 0.800049 7.9998 0.800049ZM7.9998 13.6C4.8798 13.6 2.3998 11.12 2.3998 8.00005C2.3998 4.88005 4.8798 2.40005 7.9998 2.40005C11.1198 2.40005 13.5998 4.88005 13.5998 8.00005C13.5998 11.12 11.1198 13.6 7.9998 13.6ZM8.7998 4.80005H7.1998V7.20005H4.7998V8.80005H7.1998V11.2H8.7998V8.80005H11.1998V7.20005H8.7998V4.80005Z',
            fill: '#3858E9',
        }),
    ),
    'localremove': el(
        'svg',
        {
            width: 50,
            height: 50,
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            className: 'cursor-pointer remove-icon h-[40px]',
        },
        el('path', {
            d: 'M8.00078 0.800049C4.00078 0.800049 0.800781 4.00005 0.800781 8.00005C0.800781 12 4.00078 15.2 8.00078 15.2C12.0008 15.2 15.2008 12 15.2008 8.00005C15.2008 4.00005 12.0008 0.800049 8.00078 0.800049ZM8.00078 13.6C4.88078 13.6 2.40078 11.12 2.40078 8.00005C2.40078 4.88005 4.88078 2.40005 8.00078 2.40005C11.1208 2.40005 13.6008 4.88005 13.6008 8.00005C13.6008 11.12 11.1208 13.6 8.00078 13.6ZM4.80078 7.20005V8.80005H11.2008V7.20005H4.80078Z',
            fill: 'rgb(230 80 84 / 1)',
        }),
    ),
    'VariationRemoveIcon': el(
        'svg',
        {
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M8.00078 0.800049C4.00078 0.800049 0.800781 4.00005 0.800781 8.00005C0.800781 12 4.00078 15.2 8.00078 15.2C12.0008 15.2 15.2008 12 15.2008 8.00005C15.2008 4.00005 12.0008 0.800049 8.00078 0.800049ZM8.00078 13.6C4.88078 13.6 2.40078 11.12 2.40078 8.00005C2.40078 4.88005 4.88078 2.40005 8.00078 2.40005C11.1208 2.40005 13.6008 4.88005 13.6008 8.00005C13.6008 11.12 11.1208 13.6 8.00078 13.6ZM4.80078 7.20005V8.80005H11.2008V7.20005H4.80078Z',
            fill: 'rgb(230 80 84 / 1)',
        }),
    ),
    'smallarrow': el(
        'svg',
        {
            width: 6,
            height: 8,
            viewBox: '0 0 6 8',
            fill: '#3858E9',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M0.400391 0.800049L5.20039 4.02405L0.400391 7.20005L0.400391 0.800049Z',
            fill: '#3858E9',
        }),
    ),
    'deopdownarrow2': el(
        'svg',
        {
            width: 12,
            height: 8,
            viewBox: '0 0 12 8',
            className: 'arrow-icon h-[40px]',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M2.00039 7.19995L6.00039 3.19995L10.0004 7.19995L11.6004 6.39995L6.00039 0.799951L0.400391 6.39995L2.00039 7.19995Z',
            fill: '#7E7E7E',
        }),
    ),
    'arrowbacksave': el(
        'svg',
        {
            width: 15,
            height: 15,
            viewBox: '0 0 8 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M7.2002 9.99985L3.2002 5.99985L7.20019 1.99985L6.40019 0.399853L0.800195 5.99985L6.4002 11.5999L7.2002 9.99985Z',
            fill: '#7E7E7E',
        })
    ),
    'drowdownlistitem': el(
        'svg',
        {
            width: 20,
            height: 20,
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.23017 7.20938C5.52875 6.92228 6.00353 6.93159 6.29063 7.23017L10 11.1679L13.7094 7.23017C13.9965 6.93159 14.4713 6.92228 14.7698 7.20938C15.0684 7.49647 15.0777 7.97125 14.7906 8.26983L10.5406 12.7698C10.3992 12.9169 10.204 13 10 13C9.79599 13 9.60078 12.9169 9.45938 12.7698L5.20938 8.26983C4.92228 7.97125 4.93159 7.49647 5.23017 7.20938Z',
            fill: '#7E7E7E',
        })
    ),
    'arrowIcon2': el(
        'svg',
        {
            width: 12,
            height: 8,
            viewBox: '0 0 12 8',
            className: 'arrow-icon h-[40px]',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M2.00039 0.800049L6.00039 4.80005L10.0004 0.800049L11.6004 1.60005L6.00039 7.20005L0.400391 1.60005L2.00039 0.800049Z',
            fill: '#7E7E7E',
        })
    ),
    'loadingSpinner': el(
        'svg',
        {
            className: 'animate-spin -mr-1 ml-3 h-5 w-5 text-white',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
        },
        el('circle', {
            className: 'opacity-25',
            cx: 12,
            cy: 12,
            r: 10,
            stroke: 'currentColor',
            strokeWidth: 4,
        }),
        el('path', {
            className: 'opacity-75',
            fill: 'currentColor',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        })
    ),
    'checkmarkIcon': el(
        'svg',
        {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            width: 20,
            height: 12,
            focusable: false,
            className: 'mr-[2px]',
        },
        el('path', {
            d: 'M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z',
        })
    ),
    'loadingSpinner2': el(
        'svg',
        {
            className: 'animate-spin -mr-1 ml-3 h-5 w-5 text-white',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
        },
        el('circle', {
            className: 'opacity-25',
            cx: 12,
            cy: 12,
            r: 10,
            stroke: 'rgb(230 80 84)',
            strokeWidth: 4,
        }),
        el('path', {
            className: 'opacity-75',
            fill: '#3858E9',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        })
    ),
    'loadingSpinner3': el(
        'svg',
        {
            className: 'animate-spin text-white',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            width: '20px',
            height: '20px',
        },
        el('circle', {
            className: 'opacity-25',
            cx: 12,
            cy: 12,
            r: 10,
            stroke: 'rgb(73 72 245)',
            strokeWidth: 4,
        }),
        el('path', {
            className: 'opacity-75',
            fill: '#3858E9',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        })
    ),
    'loadingSpinner4': el(
        'svg',
        {
            className: 'animate-spin -mr-1 ml-3 h-5 w-5 text-white',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
        },
        el('circle', {
            className: 'opacity-25',
            cx: 12,
            cy: 12,
            r: 10,
            stroke: '#3858E9',
            strokeWidth: 4,
        }),
        el('path', {
            className: 'opacity-75',
            fill: '#3858E9',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        })
    ),

    'iconsquare': el(
        'svg',
        {
            width: 16,
            height: 17,
            viewBox: '0 0 16 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M8.00078 1.30005C4.00078 1.30005 0.800781 4.50005 0.800781 8.50005C0.800781 12.5 4.00078 15.7 8.00078 15.7C12.0008 15.7 15.2008 12.5 15.2008 8.50005C15.2008 4.50005 12.0008 1.30005 8.00078 1.30005ZM8.00078 14.1C4.88078 14.1 2.40078 11.62 2.40078 8.50005C2.40078 5.38005 4.88078 2.90005 8.00078 2.90005C11.1208 2.90005 13.6008 5.38005 13.6008 8.50005C13.6008 11.62 11.1208 14.1 8.00078 14.1ZM8.80078 5.30005H7.20078V7.70005H4.80078V9.30005H7.20078V11.7H8.80078V9.30005H11.2008V7.70005H8.80078V5.30005Z',
        })
    ),
    'iconsquare2': el(
        'svg',
        {
            width: 16,
            height: 17,
            viewBox: '0 0 16 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        },
        el('path', {
            d: 'M8.00078 1.30005C4.00078 1.30005 0.800781 4.50005 0.800781 8.50005C0.800781 12.5 4.00078 15.7 8.00078 15.7C12.0008 15.7 15.2008 12.5 15.2008 8.50005C15.2008 4.50005 12.0008 1.30005 8.00078 1.30005ZM8.00078 14.1C4.88078 14.1 2.40078 11.62 2.40078 8.50005C2.40078 5.38005 4.88078 2.90005 8.00078 2.90005C11.1208 2.90005 13.6008 5.38005 13.6008 8.50005C13.6008 11.62 11.1208 14.1 8.00078 14.1ZM4.80078 7.70005V9.30005H11.2008V7.70005H4.80078Z',
        })
    ),
    'preload_setting': el(
        'svg',
        { width: 21, height: 20, viewBox: '0 0 21 20', fill: 'none', xmlns: "http://www.w3.org/2000/svg" },
        el('path', {
            d: 'M18.5039 12H16.3239C16.1539 12.7 15.8839 13.35 15.5139 13.93L17.0539 15.47L14.9539 17.57L13.4139 16.03C12.8339 16.39 12.1839 16.66 11.5039 16.82V19H8.50391V16.82C7.82391 16.66 7.17391 16.39 6.59391 16.03L5.05391 17.57L2.93391 15.45L4.47391 13.91C4.11391 13.33 3.84391 12.68 3.68391 12H1.50391V9.03003H3.67391C3.83391 8.33003 4.11391 7.68003 4.47391 7.09003L2.93391 5.55003L5.03391 3.45003L6.57391 4.99003C7.15391 4.62003 7.81391 4.35003 8.50391 4.18003V2.00003H11.5039V4.18003C12.1839 4.34003 12.8339 4.61003 13.4139 4.97003L14.9539 3.43003L17.0739 5.55003L15.5339 7.09003C15.8939 7.68003 16.1739 8.33003 16.3339 9.03003H18.5039V12ZM10.0039 13.5C11.6639 13.5 13.0039 12.16 13.0039 10.5C13.0039 8.84003 11.6639 7.50003 10.0039 7.50003C8.34391 7.50003 7.00391 8.84003 7.00391 10.5C7.00391 12.16 8.34391 13.5 10.0039 13.5Z',
            fill: '#3C434A',
        }),
    ),
};

export default Custom_Fonts_Icons;
