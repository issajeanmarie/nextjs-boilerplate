export {}

declare global {
    interface Number {
        toWeight(): string
    }
}
Number.prototype.toWeight = function (): string {
    try {
        const toCurrency = this.toLocaleString("en-US", {})
        return `${toCurrency || 0} KGs`
    } catch (error) {
        return ""
    }
}
