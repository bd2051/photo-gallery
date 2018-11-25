
export function convertPhotoDate(photo) {
    const date = new Date(photo.date)
    return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`
}
