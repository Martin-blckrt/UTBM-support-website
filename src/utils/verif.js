export const validTextZone = new RegExp('^[^\"]+$');

export const containsBadChar = (data) => {
    if (!validTextZone.test(data)) {
        return 1
    } else {
        return 0
    }
}
