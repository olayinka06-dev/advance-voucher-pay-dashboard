"use client";
import React, { useRef, useState } from 'react';
import termsData from './data';


const MainTermsService = () => {
    const [selectedItem, setSelectedItem] = useState(termsData[0].id);

    const contentRefs = useRef([]);

    const handleItemClick = (id) => {
        setSelectedItem(id);
        const contentRef = contentRefs.current[id - 1];
        if (contentRef) {
            contentRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-row gap-10">
            <div className="w-1/4 py-8 px-6 bg-white rounded-2xl">
                <div className="sticky  top-[120px] mt-6 ">
                    <ul className='flex flex-col h-[100vh] overflow-y-scroll gap-7'>
                        <h3 className='font-[600] text-[18px]'>ON THIS PAGE</h3>
                        {termsData.map((item) => (
                            <li
                                key={item.id}
                                className={`${
                                    item.id === selectedItem ? 'text-[#0CF]' : 'text-[rgba(0,0,0,0.50)]'
                                } cursor-pointer hover:text-[#0CF] capitalize font-[600] text-[19px]`}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-3/4 py-8 px-6 bg-white rounded-2xl">
                {termsData.map((item) => (
                    <div
                        key={item.id}
                        ref={(ref) => (contentRefs.current[item.id - 1] = ref)}
                        className="mb-4 bg-white p-4 mt-10 flex flex-col gap-8"
                    >
                        <h1 className='text-[23px] font-[600]'>
                            {item.content.head}
                        </h1>

                        <div>
                            {item.content.paragraph}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainTermsService;
