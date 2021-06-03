export const validTextZone = new RegExp('^[^\']+$');
export const replaceTextZone = new RegExp(`^[^\']+$`);

export const containsBadChar = (data) => {
    if (!validTextZone.test(data)) {
        return 1
    } else {
        return 0
    }
}

export const replaceBadChar = (data) => {
    const regex = /'/g;
    return data.replace(regex, "\\'");
}
