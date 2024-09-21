export {}

declare global {
    interface String {
        removeUnderscore(): string
    }
}

String.prototype.removeUnderscore = function (): string {
    try {
        return this.toString().replaceAll("_", " ")
    } catch (error) {
        return ""
    }
}
