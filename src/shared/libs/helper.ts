export const IMG_URL = '/assets/img'
export const FILE_URL = '/assets'

export const imgPath = (path: string) => {
	return `${IMG_URL}/${path}`
}

export const filePath = (path: string) => {
	return `${FILE_URL}/${path}`
}

export const isEmpty = (obj: Object) => {
	return Object.keys(obj).length === 0
}
