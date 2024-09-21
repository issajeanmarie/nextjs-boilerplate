export {}

declare global {
    interface Number {
        toMoney(): string
    }
}
Number.prototype.toMoney = function (): string {
    try {
        const toCurrency = this.toLocaleString("en-US", {})
        return `Rwf ${toCurrency || 0}`
    } catch (error) {
        return "Rwf 0"
    }
}
