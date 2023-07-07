import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

function LinkShortner() {
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState("");

    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    if (loading) {
        return <p className="noData text-center py-4">Loading...</p>
    }
    if (error) {
        return <p className="noData">Something wne t wrong :(</p>
    }



    return (
        <div className='md:my-20 flex md:flex-col flex-col relative justify-center items-center align-middle link-section my-8'>
            <div id='linkBox' className='relative top-0 flex md:flex-row flex-col justify-center bg-[#60508b] md:w-[1400px] w-[350px] md:py-16 py-12 rounded-md'>
                <div className='md:w-[800px] w-[300px] mr-8 md:mb-0 mb-4 md:ml-0 ml-8'>
                    <input
                        // style={{ border: errorMessage ? '2px solid red' : '' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className={`w-full py-3 rounded-md px-8`} type="text" placeholder='Shorten a link here...' /
                    >
                </div>
                <div className='z-10'>
                    <button onClick={handleClick} className='md:ml-0 ml-8 py-3 text-base font-medium text-white bg-[#2BD0D0] rounded-md bg-primary md:px-8 px-[7.1rem] hover:bg-opacity-90'>Shorten It</button>
                </div>
            </div>

            <div className='py-4'>
                {
                    shortenLink && (<div className="md:w-[1400px] w-[350px] md:justify-between md:flex-row flex-col flex md:px-8 px-4 md:align-middle bg-white my-8 shadow-xl py-2 rounded-md">
                        <div className=''>
                            <p className='md:border-b-0  border-b-2 py-2 mb-2 border-b-gray-200'>{shortenLink.original_link}</p>
                        </div>
                        <div className='md:flex md:items-center'>
                            <p className='text-[#2BD0D0] md:mx-4 my-2 cursor-pointer'>{shortenLink.full_short_link}</p>
                            <CopyToClipboard
                                text={shortenLink.full_short_link}
                                onCopy={() => setCopied(true)}
                            >
                                <button className={`py-2 md:px-8 w-full text-base font-medium text-white bg-[#2BD0D0] rounded-md hover:bg-opacity-90`}>{copied ? 'Copied' : 'Copy to Clipboard'}</button>
                            </CopyToClipboard>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default LinkShortner;





{/*  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                console.log(data.result)
                setLinks(data.result)
                setText("") */}