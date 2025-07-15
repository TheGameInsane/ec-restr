export default function TCards({content, author}) {
    return(
        <div className="bg-linear-to-r from-[#FFD700] via-[#FDE08B] to-[#D4AF37] rounded-lg shadow-2xl h-fit" style={{fontFamily: 'var(--font-playwrite)', margin: '20px', padding: '20px', width: '500px'}}>
            <p style={{fontSize: '20px', paddingBottom: '10px', fontWeight: 'bold', color: 'black'}}>{content}</p>
            <h3 style={{color: 'black'}}>- {author}</h3>
        </div>
    )
}