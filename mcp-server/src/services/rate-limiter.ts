export class RateLimiter {
    private limit: number = Infinity;
    private remaining: number = Infinity;
    private reset: number = 0;
    private period: number = 60;

    constructor(private disabled: boolean = false, private debug: boolean = false) {}

    updateLimits(headers: Headers) {
        if (this.disabled) {
            return;
        }
        const limit = headers.get('x-ratelimit-limit');
        const remaining = headers.get('x-ratelimit-remaining');
        const reset = headers.get('x-ratelimit-reset');
        const period = headers.get('x-ratelimit-period');

        if (limit) this.limit = parseInt(limit, 10);
        if (remaining) this.remaining = parseInt(remaining, 10);
        if (reset) this.reset = parseInt(reset, 10);
        if (period) this.period = parseInt(period, 10);

        if (this.debug) {
            console.error(`[RateLimiter] Updated limits: Limit=${this.limit}, Remaining=${this.remaining}, Reset=${new Date(this.reset * 1000).toLocaleTimeString()}, Period=${this.period}s`);
        }
    }

    async awaitPermission(): Promise<void> {
        if (this.disabled) {
            return;
        }

        const now = Date.now() / 1000;

        if (this.debug) {
            console.error(`[RateLimiter] Awaiting permission: Remaining=${this.remaining}, Reset=${new Date(this.reset * 1000).toLocaleTimeString()}, Now=${new Date(now * 1000).toLocaleTimeString()}`);
        }

        if (this.remaining <= 0 && this.reset > now) {
            const waitTime = (this.reset - now) * 1000;
            console.warn(`[RateLimiter] Rate limit exceeded. Waiting for ${waitTime.toFixed(0)}ms until ${new Date(this.reset * 1000).toLocaleTimeString()}.`);
            await new Promise(resolve => setTimeout(resolve, waitTime + 100)); // Add a small buffer
            if (this.debug) {
                console.error(`[RateLimiter] Resuming after wait.`);
            }
        }
        if (this.remaining > 0) {
            this.remaining--;
        }
    }
}
