import React, { useState } from 'react';

function Links({ links, input }) {
    const [btntext, setBtnText] = useState('copy');

    const handleBtnClick = () => {
        navigator.clipboard.writeText(links.full_short_link);
        setBtnText('Copied');
    }

    return (
        <>
            {
                input && <div className="md:w-[1400px] flex justify-center align-middle items-center bg-white my-4 shadow-md py-2 rounded-md">
                    <div className="w-full flex items-center px-8 justify-between">
                        <div className='link'>
                            <p className=''>{links.original_link}</p>
                        </div>
                        <div className='goten_link flex items-center'>
                            <p className='mx-8 text-[#2BD0D0]'>{links.full_short_link}</p>
                            <button onClick={handleBtnClick} className={`${btntext === 'Copied' ? 'bg-[#0E2954]' : 'bg-[#2BD0D0]'} py-2 px-4 text-base font-medium text-white rounded-md bg-primary hover:bg-opacity-90`}>
                                {btntext}
                            </button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Links;