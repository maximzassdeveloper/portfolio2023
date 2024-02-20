'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'
import { ErrorPage } from '@/screens/ErrorPage'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<ErrorPage title='Something went wrong!' buttonText='Try again' onButtonClick={() => reset()} />
	)
}
