import React, { useEffect, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('Posts');

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    useEffect(() => {
        console.log('render')
    }, [resourceType]); 

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('Posts')}>
                    Posts
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('Users')}>
                    Users
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('Comments')}>
                    Comments
                </button>                                
            </div>
            <h1 className="text-9xl">{resourceType}</h1>
        </>

    )

}