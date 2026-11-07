import { useState } from "react"

export function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log(e.key);
            const trimmed = input.trim();
            if (!trimmed) return;
            setHistory((prev) => [...prev, { command: trimmed }]);
            setInput("");
        }
    };
    return (
        <div className="m-3 w-full max-w-2xl mx-auto rounded-lg shadow-2xl border border-white/10 overflow-hidden select-none">
            <div className="flex gap-1.5 bg-mist-900 justify-end items-center px-3 py-2">
                <div className="rounded-full w-4 h-4 bg-red-500 cursor-pointer"></div>
                <div className="rounded-full w-4 h-4 bg-yellow-500 cursor-pointer"></div>
                <div className="rounded-full w-4 h-4 bg-green-500 cursor-pointer"></div>
            </div>
            <div className="bg-black/90 font-mono text-green-400 p-4 h-80 overflow-y-auto">
                {history.map((entry, i) => (
                    <div key={i}>
                        <span>anup@portfolio:~$ </span>
                        <span>{entry.command}</span>
                    </div>
                ))}

                <div className="flex">
                    <span className="whitespace-pre">anup@portfolio:~$ </span>
                    <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} type="text" autoFocus spellCheck={false} autoComplete="off" autoCorrect="off"
                        className="bg-transparent outline-none flex-1 caret-green-400"
                    />
                </div>

            </div>
        </div>

    )
}