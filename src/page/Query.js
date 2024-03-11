import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';

const Query = () => {
	const fetchPost =()=>{
		return axios.get('http://localhost:3004/posts')
	}
	const {isLoading, data, isError, error} = useQuery({
		queryKey: ['posts'],
		queryFn: fetchPost,
		retry: 1,
		select:(data)=>{
			return data.data;
		}
	});

	console.log('ddd', data, isLoading)
	console.log('error', isError, error)
	if(isLoading){
		return <h1>Loading....</h1>
	}
	if(isError){
		return <h1>{error.message}</h1>
	}
  	return (
	<div className="center">
	  ReactQueryPage: {data.map(item=> <div>{item.title}</div>)}
	</div>
  )
}

export default Query
