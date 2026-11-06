export function Terminal() {
    return (
        <div className="m-3 rounded-lg shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex gap-1.5 bg-mist-900 justify-end items-center px-3 py-2">
                <div className="rounded-full w-3 h-3 bg-red-500"></div>
                <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div className="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
            <div className="bg-black/90 font-mono text-green-400 p-4 h-80 overflow-y-auto">
                <span>anup@portfolio:~$ </span>
                <input type="text" className="bg-transparent outline-none flex-1" />
            </div>
        </div>

    )
}