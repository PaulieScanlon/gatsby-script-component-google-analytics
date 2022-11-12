import React from 'react'
import { Link } from 'gatsby'

const Page = () => {
	return (
		<>
			<h1>Home Index Page</h1>
			<Link to='/second/'>Go to second page</Link>
			<Link to='/third/'>Go to third page</Link>
		</>
	)
}

export default Page
