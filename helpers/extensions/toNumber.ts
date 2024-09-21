export {}

declare global {
    interface Number {
        toNumber(): string
    }
}
Number.prototype.toNumber = function (): string {
    try {
        const toCurrency = this.toLocaleString("en-US", {})
        return `${toCurrency || 0}`
    } catch (error) {
        return ""
    }
}
