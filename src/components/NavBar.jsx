export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center max-w-[800px] mx-auto p-4 rounded-2xl mt-4 bg-white/15 backdrop-blur-md border border-white/25 shadow-lg text-white">
            <div className="navbar-logo">
                <h1>My Portfolio</h1>
            </div>
            <ul className="navbar-links flex gap-4">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};