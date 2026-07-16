export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/923057121111"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="link"
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.09-3.28-.7-2.76-1-4.55-3.8-4.68-3.98-.14-.18-1.13-1.5-1.13-2.86 0-1.36.71-2.02.96-2.3.25-.27.55-.34.74-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.18-.15.3-.3.46-.15.16-.31.36-.44.48-.15.14-.3.3-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.14.48.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.28.1 1.75.83 2.05 1 .3.16.5.24.57.37.07.13.07.75-.17 1.43Z"/></svg>
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Abday+Mustafa+Gems+%26+Jewellers+Main+Bazar+Kunjah"
        target="_blank"
        rel="noreferrer"
        aria-label="Google Maps"
        data-cursor="link"
        className="w-[52px] h-[52px] rounded-full border border-gold/50 bg-pearl/80 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.9 11.1 7.2 11.4.2.2.5.3.8.3.3 0 .6-.1.8-.3.3-.3 7.2-6 7.2-11.4 0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
      </a>
    </div>
  )
}
