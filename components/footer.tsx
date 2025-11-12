import QR from "./qr";

export default function Footer() {
  return (
    <footer className="mt-8 p-6 rounded-lg border border-gray-200 bg-white shadow-sm print:shadow-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-sm font-bold">LOGO</span>
          </div>
          <div>
            <div className="text-lg font-bold">Équipe Hackathon — Poster Cœliaque</div>
            <div className="text-sm text-gray-600">Collecte d'intentions et contacts</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm text-gray-700">Scannez pour laisser votre contact</div>
          <div className="w-28 h-28 bg-white p-1 rounded-md">
            <QR value="https://forms.gle/placeholder" />
          </div>
        </div>
      </div>
    </footer>
  );
}
