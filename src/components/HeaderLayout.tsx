import { Outlet } from 'react-router'
import heroImage from '../assets/imgs/hero.jpg'


const HeaderLayout = () => {
    return (
        <>
            <div className='h-[209px] lg:h-[509px]'>
                <img src={heroImage} alt='hero image' className='object-top w-full h-full object-cover' />
            </div>
            <Outlet />
        </>
    )
}

export { HeaderLayout }
