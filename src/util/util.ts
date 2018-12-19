/**
 * (awaitable) creates a delay for the specified ms
 *
 * @export
 * @param {number} ms Delay in Milliseconds
 * @returns {Promise} resolved promise after the delay
 */
export async function delay(ms: number) {
    console.log(`Delay ${ms}ms`);
    return new Promise(resolve => setTimeout(resolve, ms));
}