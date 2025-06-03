
interface Props {
    img: string
    title: string
    amount: string
}
const OfferCard = ({ amount, img, title }: Props) => {
    return (
        <div className="flex flex-col items-center gap-2 bg-[#F8F8F8] py-[50px]">
            <img src={img} alt='flower' />
            <h1 className="font-ephesis text-[60px]">{title}</h1>
            <div className="flex flex-col font-cormorantGaramond text-center">
                <span className="text-[24px]">Per Session</span>
                <span className="font-light text-[50px]">${amount}</span>
            </div>
            <button className='bg-[#E9E1D9] w-[209px] h-[66px] font-cormorantGaramond text-[20px]'>More Details</button>
        </div>
    )
}

export default OfferCard