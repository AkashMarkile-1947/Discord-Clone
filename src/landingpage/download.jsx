import react from "react";
import tinystars from '../../assets/tiny_stars_landing.svg'
import '../App.css';

const DownloadSection = () => {
    return (
        <div className="section invite-only bg-[#f6f6f6]">
            <div className="section-container">
                <div className="section-action w-[90%] pt-[4rem] max-w-[1260px] mx-auto">
                        <div className="d-heading w-fit mx-auto relative">
                            <img src={tinystars} className="w-full"/>
                            <h2 className="text-[32px] leading-[38.6px] font-extrabold text-center download-heading relative px-[4rem] py-[4rem]">Ready to start your journey?</h2>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default DownloadSection;


