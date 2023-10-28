import '../../../styles/index.css';
import { specialists } from '../../../public/specialists';
import Image from 'next/image';

function Specialista({params}: {params: {id: string}}){
    const res = specialists.filter(spec => spec.slug == params.id)
    const specialist = res[0]

    return (
        <>
            <section className={`container py-20 w-full flex flex-col items-center m-auto px-2`}>
                <section className={`specialist__container relative grid grid-cols-1 lg:grid-cols-2 w-full place-items-center py-10`}>
                    <Image src={`/photos/${specialist.photoPath}`} alt={specialist.fullName} className={`w-full aspect-auto rounded-xl lg:translate-x-10 z-40`} width={500} height={500} />
                    <div className={`bg-slate-700 w-full p-2 rounded-xl -translate-y-10 grid grid-col-1 lg:-translate-y-0 lg:-translate-x-10 lg:shadow-sm z-40`}>
                        <h1 className={`text-green-500 text-4xl font-bold text-center self-center`}>
                            <span className={`text-white opacity-50 font-normal italic`}>{specialist.title} </span>
                            {specialist.fullName}
                        </h1>
                        <span className={`w-full text-center py-2 text-lg italic text-white opacity-80`}>{specialist.specialisation}</span>
                        <p className={`py-2 px-4 text-white`}>
                            {specialist.bio}
                        </p>
                    </div>
                </section>

                {
                    specialist?.certificate &&
                    <section className={`certificate`}>
                        <Image src={`/photos/${specialist.certificate}`} width={500} height={500} alt={`Certyfikat PTLO dla ${specialist.fullName}`} />
                    </section>
                }
            
            </section>
        </>
    )
}

export default Specialista
