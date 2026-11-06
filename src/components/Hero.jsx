export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 mt-24">

            <span className="text-blue-100 font-medium text-sm tracking-wider uppercase mb-3">
                Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Hi, I'm <span className="text-yellow-300">Anup</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-xl">
                A passionate Frontend Developer building clean, modern, and user-friendly web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-blue-50 transition"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};