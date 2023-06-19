
export default function ProfileCard( { details } ) {
    
    return (
        <div className="card">
            <h1 className="card__heading text-white text-4xl">{details.name}</h1>
            <p className="card__desc uppercase text-white/[0.6] pt-2">{details.desg}</p>
            <div className="card__picture w-36 aspect-square mx-auto mt-10">
                <img src={details.picture} alt="Myself"  className="rounded-full border-8 border-white object-cover" />
            </div>
        </div>
    )
}