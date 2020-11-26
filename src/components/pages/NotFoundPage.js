import React from 'react'
import RoutePath from '../router/RoutePath';

export const NotFoundPage = () => {
    return (
    <div className="container mt-5 mb-5 p-5">
        <div className="row d-flex justify-content-center bg-custom-not-found p-5">
            <div className="text-center">
                <h2 className="mb-4 text-color-custom-font">404 Not Found</h2>
	            <h1 className="mb-4 text-color-custom-font">These aren't the droids you're looking for.</h1>
	            <div className="error-actions">
		            <a className="btn btn-outline-light my-2 my-sm-0" href={RoutePath.home}>Move along</a>
	            </div>
	        </div>
         </div>
    </div>    
    )
}
