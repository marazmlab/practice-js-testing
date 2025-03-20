export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('arguments are not a numbers')
    }
    if (min === max) {
        return min;
    }
    return 1;
}