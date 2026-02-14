import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import bell from '../../assets/svg/bell.svg';
import arUp from '../../assets/svg/arrowUp.svg';
import arDn from '../../assets/svg/ArrowDown.svg';
import lupa from '../../assets/svg/lupa.svg';
import listIc from '../../assets/svg/listIcon.svg'
import settingIc from '../../assets/svg/settingsIcon.svg'
import logoutIc from '../../assets/svg/logoutIcon.svg'

interface Profile {
    id: number;
    nickname: string;
    status: string;
    avatar: string;
}

const isLogged = true;

const userProfile: Profile = {
    id: 1,
    nickname: "roLtter",
    status: "сын сына дочери",
    avatar: "https://i.ibb.co/pBzcBRfR/avatar.jpg",
}

interface BtnProps {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const LogBtn: React.FC = () => {
    const navigate = useNavigate()

    return (
        <section className="w-63.5 text-white text-[24px] top-8.25 h-full flex items-center justify-center">
            <button onClick={() => navigate("/login")} className="bg-[#B7B4B4] rounded-[30px] h-15 flex items-center justify-center leading-none w-full">
                <p className="relative bottom-0.5">Войти в аккаунт</p>
            </button>
        </section>
    );
}

const ProfileBtn: React.FC<BtnProps> = ({visible, setVisible}) => {
    return (
        <section className="relative w-63.5 top-8.25 z-50 transition-all duration-700 rounded-[30px] bg-[#B7B4B4]" style={{height: visible ? '210px' : '60px'}}>
            <div className=" w-max flex flex-row gap-2.5 p-1.75 text-white  relative overflow-hidden h-15">
                <img src={userProfile.avatar} alt={`${userProfile.id}`} className="w-11.5 h-11.5 rounded-full"/>
                <div className="flex flex-col w-32.5 h-11.5 justify-between">
                    <p className="text-[20px] leading-none">{userProfile.nickname}</p>
                    <p className="text-[13px] leading-none">{userProfile.status}</p>
                </div>
                <button className="w-11 h-11 flex items-center justify-center" onClick={() => setVisible(!visible)}>
                    <img src={visible ? arUp : arDn} alt="arrow" className="w-4 h-2 relative top-px right-0.5"/>
                </button>
            </div>
            <div className="p-2.5 gap-2.5 text-white w-full">
                <div className="flex flex-col gap-2.5">
                    <div className="w-max h-fit rounded-[100px] transition-all duration-300"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(-12px)",
                            transitionDelay: visible ? "100ms" : "200ms",
                        }}>
                        <button className="rounded-full flex flex-row w-58.5 gap-[42.5px] px-3.5 h-8.75 items-center hover:bg-[#6363634D] transition-colors duration-500 group">
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={listIc} alt=""/>
                            <p className="text-[16px] leading-none relative bottom-px">Мой список</p>
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={listIc} alt=""/>
                        </button>
                    </div>
                    <div className="w-max h-fit rounded-[100px] transition-all duration-300"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(-12px)",
                            transitionDelay: visible ? "200ms" : "100ms",
                        }}>
                        <button className="rounded-full flex flex-row w-58.5 gap-11.5 px-4 h-8.75 items-center hover:bg-[#6363634D] transition-colors duration-500 group">
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={settingIc} alt=""/>
                            <p className="text-[16px] leading-none relative bottom-px">Настройки</p>
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={settingIc} alt=""/>
                        </button>
                    </div>
                    <div className="w-max h-fit rounded-[100px] transition-all duration-300"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(-12px)",
                            transitionDelay: visible ? "300ms" : "0ms",
                        }}>
                        <button className="rounded-full flex flex-row w-58.5 gap-15.75 px-4 h-8.75 items-center hover:bg-[#6363634D] transition-colors duration-500 group">
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={logoutIc} alt=""/>
                            <p className="text-[16px] leading-none relative bottom-px">Выход</p>
                            <img className="opacity-0 w-3.75 group-hover:opacity-100 -translate-y-1.25 group-hover:translate-y-0 transition-all duration-500" src={logoutIc} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}



const Header: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="w-screen bg-[#89898980] flex h-fit">
            <div
                className="w-480 flex flex-row h-31.25 gap-10 px-16.25 mx-auto font-proxima bg-transparent items-center">
                <section id="search"
                         className="w-100 h-15 rounded-full font-regular gap-7.5 flex flex-row px-5.5 py-3.5 items-center text-white bg-[#63636399]">
                    <img src={lupa} alt="searchicon" className="w-4 h-3.75"/>
                    <input type="search" placeholder="Search..." className="w-77.5"></input>
                </section>
                <section id="nav"
                         className={`w-337.5 bg-transparent h-31.25 font-semibold flex flex-row gap-11.25 ${!visible ? '' : ''}`}>
                    <section className="w-236.5 flex flex-row gap-5 align-middle">
                        <div className="w-37.5 inline-flex items-center justify-center">
                            <div
                                className="w-37.5 h-15 hover:bg-[#B7B4B4] transition-colors duration-500 inline-flex items-center justify-center rounded-full">
                                <p className="w-full text-white text-[20px] h-fit text-center leading-none">Онгоинг</p>
                            </div>
                        </div>
                        <div className="w-47.75 inline-flex items-center justify-center">
                            <div
                                className="w-47.75 h-15 hover:bg-[#B7B4B4] transition-colors duration-500 inline-flex items-center justify-center rounded-full">
                                <p className="w-full text-white text-[20px] h-fit text-center leading-none">Рейтинговое</p>
                            </div>
                        </div>
                        <div className="w-46.5 inline-flex items-center justify-center">
                            <div
                                className="w-46.5 h-15 hover:bg-[#B7B4B4] transition-colors duration-500 inline-flex items-center justify-center rounded-full">
                                <p className="w-full text-white text-[20px] h-fit text-center leading-none">Популярное</p>
                            </div>
                        </div>
                        <div className="w-48.75 inline-flex items-center justify-center">
                            <div
                                className="w-48.75 h-15 hover:bg-[#B7B4B4] transition-colors duration-500 inline-flex items-center justify-center rounded-full">
                                <p className="w-full text-white text-[20px] h-fit text-center leading-none">Мне
                                    повезёт!</p>
                            </div>
                        </div>
                        <div className="w-36 inline-flex items-center justify-center">
                            <div
                                className="w-36 h-15 hover:bg-[#B7B4B4] transition-colors duration-500 inline-flex items-center justify-center rounded-full">
                                <p className="w-full text-white text-[20px] h-fit text-center leading-none">Каталог</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-15 align-middle rounded-full inline-flex items-center justify-center">
                        <div
                            className="w-15 h-15 rounded-full inline-flex hover:bg-transparent bg-[#B7B4B4] transition-colors duration-500 items-center justify-center">
                            <img src={bell} alt="Notifications" className="w-5.25 h-5"/>
                        </div>
                    </section>
                    {
                        isLogged ? (
                        <ProfileBtn visible={visible} setVisible={setVisible} />
                    ) : (
                        <LogBtn/>
                        )
                    }
                </section>
            </div>
        </div>
    );
};

export default Header;