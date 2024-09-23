import React from 'react'

const Header = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <nav className='d-flex mt-4 p-3 justify-content-between align-items-center '>
                        <div>logo</div>
                        <div className='d-flex gap-3 text-decoration-none list-unstyled'>
                            <a className="text-decoration-none text-black" href="/"><li>second</li></a>
                            <a className="text-decoration-none text-black" href="/"><li>link</li></a>
                            <a className="text-decoration-none text-black" href="/"><li>link</li></a>
                            <a className="text-decoration-none text-black" href="/"><li>link</li></a>
                            <a className="text-decoration-none text-black" href="/"><li>link</li></a>
                            <a className="text-decoration-none text-black" href="/"><li>link</li></a>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Header