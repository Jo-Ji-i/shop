import react, { useEffect, useState } from 'react';

const Tap = () => {
    let [section, setSection] = useState(0);
    let sectionArr = ['정보', '리뷰', '문의'];

    useEffect(() => {
        console.log(section);
    }, [section]);

    const TopBtn = () => {
        return (
            <div className="flex flex-row items-center justify-start w-full">
                {sectionArr.map((label, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSection(idx)}
                        className={`flex items-center justify-center w-40 h-10 p-5 font-semibold border cursor-pointer ${
                            section === idx ? 'bg-white' : 'bg-gray-100'
                        }`}
                    >
                        {label}
                    </div>
                ))}
            </div>
        );
    };

    const Section = () => {
        if (section === 0) return <Info />;
        if (section === 1) return <Review />;
        if (section === 2) return <Question />;
        return null;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full mx-6 mt-12">
            <TopBtn />
            <Section />
        </div>
    );
};

export default Tap;

const Info = () => {
    return (
        <div className="flex flex-col w-full border">
            <div className="flex w-1/3 p-10 ml-10">
                <div className="text-sm font-bold">
                    <p> 상품명</p>
                    <p> 사이즈</p>
                </div>
                <div className="pl-10 text-sm">
                    <p> Watchhhhhh </p>
                    <p> FREE </p>
                </div>
            </div>
        </div>
    );
};

const Review = () => {
    return (
        <div className="flex flex-col items-start justify-center w-full pt-2 text-sm border">
            <div className="flex flex-col px-10 py-6">
                <p className="py-2 font-bold"> 한줄리뷰 (1) </p>
                <div className="flex flex-col px-5 py-8">
                    <p className="font-bold "> USER1 </p>
                    <p className=""> 리뷰내용입니다</p>
                </div>
            </div>
        </div>
    );
};

const Question = () => {
    return (
        <div className="flex flex-col items-start justify-center w-full pt-2 text-sm border">
            <div className="flex flex-col px-10 py-6">
                <p className="py-2 font-bold"> 문의 (1) </p>
                <div className="flex flex-col px-5 py-8">
                    <p className="text-gray-500"> 배송 </p>
                    <p className=""> 배송 관련 문의 </p>
                    <div className="flex gap-4 text-gray-400">
                        <p className=""> 답변완료</p>
                        <p className=""> use****</p>
                        <p className=""> 25.04.11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
