function Footer() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-1" style={{ fontFamily: 'var(--font-kanit)'}}>
                <div style={{ padding: '2rem' }}>
                    <h1 style={{fontWeight: 'bolder', fontSize: '1.5rem'}}>About Us:</h1>
                    <p style={{ fontSize: '1.2rem'}}>Saffron Spoon is a family-owned restaurant passionate about bringing authentic Indian flavors to your plate. Whether you're dining in or ordering out, we promise quality and satisfaction.</p>
                    <div style={{ marginTop: '1rem' }}>
                        <h1 style={{fontWeight: 'bolder', fontSize: '1rem'}}>Opening Hours:</h1>
                        <p>Mon-Sun: 11:00 AM - 11:00 PM</p>
                    </div>
                </div>
                <div style={{ padding: '2rem' }}>
                    <div>
                        <h1 style={{fontWeight: 'bolder', fontSize: '1.5rem'}}>Contact Info:</h1>
                        <p>&#128205;123 Spice Street, New Delhi, India.</p>
                        <p>&#128222; +91 98765 43210</p>
                        <p>&#128231; <a href="/">hello@saffronspoon.in</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer