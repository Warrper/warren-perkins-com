export const breakpoints = {
    xsm: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
};

export const mq = (size: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') => {
    return `(max-width: ${breakpoints[size]})`
} 