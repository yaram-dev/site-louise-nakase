export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ef] flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-light text-[#8b6b61] mb-4 text-center">
        Louise Ferreira
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-10">
        Psicoterapia individual com foco nas emoções e
        reabilitação neuropsicológica.
      </p>

      <div className="flex flex-col md:flex-row gap-4">

        <a
          href="https://wa.me/5511939273250"
          target="_blank"
          className="bg-[#8b6b61] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition"
        >
          Agendar Atendimento
        </a>

        <a
          href="https://wa.me/5511939273250"
          target="_blank"
          className="border border-[#8b6b61] text-[#8b6b61] px-8 py-4 rounded-2xl hover:bg-[#8b6b61] hover:text-white transition"
        >
          Psicoterapia Individual
        </a>

      </div>

    </div>
  )
}