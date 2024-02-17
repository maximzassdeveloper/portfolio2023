import type { Ref } from 'react'

export function fillRef<T>(ref: Ref<T>, node: T) {
	if (typeof ref === 'function') {
		ref(node)
	} else if (typeof ref === 'object' && ref && 'current' in ref) {
		const anyRef = ref as any
		anyRef.current = node
	}
}

export function composeRef<T>(...refs: Ref<T>[]): Ref<T> {
	const refList = refs.filter((ref) => ref)
	if (refList.length <= 1) {
		return refList[0]
	}

	return (node: T) => {
		refs.forEach((ref) => {
			fillRef(ref, node)
		})
	}
}
