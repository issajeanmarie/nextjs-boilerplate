export {}

declare global {
    interface String {
        validateLink(): string
    }
}

String.prototype.validateLink = function (): string {
    try {
        new URL(this.toString())
        return this.toString()
    } catch (error) {
        return ""
    }
}
