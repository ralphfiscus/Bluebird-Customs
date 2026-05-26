export function About() {
  return (
    <div className="bg-transparent min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-8">About Bluebird</h1>
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="text-xl leading-relaxed text-steel-gray mb-8">
            Bluebird Customs was founded on a simple premise: international trade is complicated enough, your customs broker shouldn't add to the chaos.
          </p>
          <p className="mb-6">
            Headquartered in Utah, we saw a gap in the logistics market. On one side, massive multinational forwarders treated small and medium importers as numbers on a spreadsheet, leading to delayed clearances and terrible communication. On the other side, legacy independent brokers were operating on 1990s technology.
          </p>
          <p className="mb-6">
            We built Bluebird to be the modern alternative. A licensed U.S. Customs Brokerage that pairs enterprise-grade digital infrastructure with dedicated, licensed account managers who actually pick up the phone.
          </p>
          <h2 className="text-2xl font-extrabold text-navy mt-12 mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li><strong className="text-navy">Speed is Security:</strong> We understand that cargo sitting at a port is burning money. Active, aggressive clearance is our default.</li>
            <li><strong className="text-navy">Precision:</strong> Customs is a game of details. We classify and declare with absolute compliance to protect your business.</li>
            <li><strong className="text-navy">Radical Transparency:</strong> No black-box operations. You always know exactly where your entries stand.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
