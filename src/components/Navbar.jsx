import { useState } from "react";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-[#f6f0ff]/80 backdrop-blur-md shadow-sm">

            <div className="max-w-7xl mx-auto px-4 md:px-10 py-5 flex items-center justify-between">


                <div className="ml-4">

                    <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#3b2a52]">
                        Louise Nakase
                    </h1>

                    <p className="text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[4px] text-[#9b7bd3] mt-1">
                        Psicologia Clínica e Reabilitação
                    </p>

                </div>

                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="md:hidden text-3xl text-[#3b2a52]"
                >
                    ☰
                </button>

                <nav className="hidden md:flex items-center gap-8 text-[#5c4b73] text-base">

                    <a
                        href="#sobre"
                        className="hover:text-[#9b7bd3] transition"
                    >
                        Sobre
                    </a>

                    <a
                        href="#servicos"
                        className="hover:text-[#9b7bd3] transition"
                    >
                        Serviços
                    </a>

                    <a
                        href="#contato"
                        className="hover:text-[#9b7bd3] transition"
                    >
                        Contato
                    </a>

                    <a
                        href="https://api.whatsapp.com/send?phone=5511939273250&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20atendimento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#b388ff] hover:bg-[#9b6dff] text-white px-5 py-2 rounded-full transition"
                    >
                        Mais Informações
                    </a>

                </nav>

            </div>

            {menuAberto && (
                <div className="md:hidden bg-white shadow-md px-6 py-4">
                    <div className="flex flex-col gap-4 text-[#5c4b73]">

                        <a
                            href="#sobre"
                            className="hover:text-[#9b7bd3] transition"
                            onClick={() => setMenuAberto(false)}
                        >
                            Sobre
                        </a>

                        <a
                            href="#servicos"
                            className="hover:text-[#9b7bd3] transition"
                            onClick={() => setMenuAberto(false)}
                        >
                            Serviços
                        </a>

                        <a
                            href="#contato"
                            className="hover:text-[#9b7bd3] transition"
                            onClick={() => setMenuAberto(false)}
                        >
                            Contato
                        </a>

                        <a
                            href="https://api.whatsapp.com/send?phone=5511939273250&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20atendimento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#b388ff] hover:bg-[#9b6dff] text-white px-5 py-2 rounded-full text-center transition"
                        >
                            Mais Informações
                        </a>

                    </div>
                </div>
            )}

        </header>
    )
}