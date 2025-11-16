export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    // { href: '/watchlist', label: 'Watchlist' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
        {
            title: 'Financial',
            symbols: [
                { s: 'ICICIBANK', d: 'ICICI Bank Limited' },
                { s: 'HDFCBANK', d: 'HDFC Bank Limited' },
                { s: 'SBIN', d: 'State Bank of India' },
                { s: 'BSE', d: 'BSE Ltd.' },
                { s: 'AXISBANK', d: 'Axis Bank Limited' },
                { s: 'CDSL', d: 'Central Depository Services (India) Limited' },
            ],
        },
        {
            title: 'Technology',
            symbols: [
                { s: 'INFY', d: 'Infosys Limited' },
                { s: 'TCS', d: 'Tata Consultancy Services Limited' },
                { s: 'HCLTECH', d: 'HCL Technologies Limited' },
                { s: 'WIPRO', d: 'Wipro Limited' },
                { s: 'TECHM', d: 'Tech Mahindra Limited' },
                { s: 'ETHERNAL', d: 'Etharnal Limited' },
            ],
        },
        {
            title: 'Services',
            symbols: [
                { s: 'IRCTC', d: 'Indian Railway Catering & Tourism Corp. Ltd.' },
                { s: 'LT', d: 'Larsen & Toubro Limited' },
                { s: 'RVNL', d: 'Rail Vikas Nigam Ltd.' },
                { s: 'VEDL', d: 'Vedanta Limited' },
                { s: 'BEL', d: 'Bharat Electronics Limited' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SENSEX',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                { name: 'ICICIBANK', displayName: 'ICICI Bank Limited' },
                { name: 'HDFCBANK', displayName: 'HDFC Bank Limited' },
                { name: 'SBIN', displayName: 'State Bank of India' },
                { name: 'BSE', displayName: 'BSE Ltd.' },
                { name: 'AXISBANK', displayName: 'Axis Bank Limited' },
                { name: 'CDSL', displayName: 'Central Depository Services (India) Limited' },
            ],
        },
        {
            name: 'Technology',
            symbols: [
                { name: 'INFY', displayName: 'Infosys Limited' },
                { name: 'TCS', displayName: 'Tata Consultancy Services Limited' },
                { name: 'HCLTECH', displayName: 'HCL Technologies Limited' },
                { name: 'WIPRO', displayName: 'Wipro Limited' },
                { name: 'TECHM', displayName: 'Tech Mahindra Limited' },
                { name: 'ETHERNAL', displayName: 'Etharnal Limited' },
            ],
        },
        {
            name: 'Services',
            symbols: [
                { name: 'IRCTC', displayName: 'Indian Railway Catering & Tourism Corp. Ltd.' },
                { name: 'LT', displayName: 'Larsen & Toubro Limited' },
                { name: 'RVNL', displayName: 'Rail Vikas Nigam Ltd.' },
                { name: 'VEDL', displayName: 'Vedanta Limited' },
                { name: 'BEL', displayName: 'Bharat Electronics Limited' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    // Indian Tech & IT Services
    'TCS',
    'INFY',
    'WIPRO',
    'HCLTECH',
    'TECHM',
    'LTIM',
    'MPHASIS',
    'PERSISTENT',

    // Banking & Financials
    'HDFCBANK',
    'ICICIBANK',
    'SBIN',
    'KOTAKBANK',
    'AXISBANK',
    'BANKBARODA',
    'PNB',
    'IDFCFIRSTB',

    // Conglomerates & Large Caps
    'RELIANCE',
    'TITAN',
    'ADANIENT',
    'ADANIPORTS',
    'BAJAJ-AUTO',
    'BAJAJFINSV',
    'BAJFINANCE',
    'LTI',

    // FMCG & Consumer Goods
    'HINDUNILVR',
    'ITC',
    'NESTLEIND',
    'DABUR',
    'BRITANNIA',
    'MARICO',
    'COLPAL',

    // Automobiles & EV
    'TATAMOTORS',
    'M&M',
    'MARUTI',
    'ASHOKLEY',
    'EICHERMOT',
    'TVSMOTOR',

    // Pharma & Healthcare
    'SUNPHARMA',
    'DRREDDY',
    'CIPLA',
    'DIVISLAB',
    'LUPIN',
    'AUROPHARMA',

    // Energy, Oil & Gas
    'ONGC',
    'GAIL',
    'BPCL',
    'IOC',
    'NTPC',
    'POWERGRID',
    'ADANIGREEN',

    // Telecom
    'BHARTIARTL',
    'IDEA',

    // Metals & Infra
    'TATASTEEL',
    'JSWSTEEL',
    'HINDALCO',
    'ULTRACEMCO',
    'AMBUJACEM',
    'L&T',
];


export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];