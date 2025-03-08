// Informs TypeScript that these modules exists without disabling type checking entirely

declare module 'vanta/dist/vanta.net.min' {
    const value: any;
    export default value;
}

declare module 'three' {
    const value: any;
    export default value;
}