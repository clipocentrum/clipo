import '../../../styles/index.css';
import Image from 'next/image';


function Specialista(){

    return (
        <>
            <section className={`container py-20 w-full flex flex-col items-center m-auto px-2`}>
                <section className={`specialist__container relative grid grid-cols-1 lg:grid-cols-2 w-full place-items-center py-10`}>
                    <Image src={`/photos/replacement-clipo.png}`} alt="" className={`w-full aspect-auto rounded-xl lg:translate-x-10 z-40`} width={500} height={500} />
                    <div className={`bg-slate-700 w-full p-2 rounded-xl -translate-y-10 grid grid-col-1 lg:-translate-y-0 lg:-translate-x-10 lg:shadow-sm z-40`}>
                        <h1 className={`text-green-500 text-4xl font-bold text-center self-center`}>
                            <span className={`text-white opacity-50 font-normal italic`}>---</span>
                            ---
                        </h1>
                        <span className={`w-full text-center py-2 text-lg italic text-white opacity-80`}>---</span>
                        <p className={`py-2 px-4 text-white`}>
                            
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Specialista
