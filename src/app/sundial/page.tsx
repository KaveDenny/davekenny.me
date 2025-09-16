"use client";

import Image from "next/image";

export default function SundialPage() {
  const galleryImages = [
    { src: "/images/iphone-15-pro-main.png", alt: "Sundial main screen" },
    { src: "/images/iphone-15-pro-map.png", alt: "Sundial map view" },
    { src: "/images/iphone-15-pro-order.png", alt: "Sundial order screen" },
    { src: "/images/iphone-15-pro-promo.png", alt: "Sundial promotions" },
  ];
  
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Introducing Sundial
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Sunny Skies, Cold Beers 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#beta"
              className="inline-block rounded-full bg-black px-8 py-4 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Beta
            </a>
            <a
              href="#features"
              className="inline-block rounded-full border-2 border-gray-300 px-8 py-4 text-black font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/sundial-hero.png"
              alt="Sundial app showcase"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>



      {/* Feature Showcases with Mockups */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience Sundial</h2>
          
          {/* Feature 1: Curated Recommendations - Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-1">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/images/iphone-15-pro-main.png"
                  alt="Sundial curated recommendations"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="order-2 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Curated Recommendations</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover hidden gems and popular hotspots curated by our community of beer and sun lovers. 
                Sundial goes beyond the usual by offering personalised recommendations based on your 
                preferences, ensuring every beer garden visit is a delight.
              </p>
            </div>
          </div>

          {/* Feature 2: Exclusive Deals - Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Exclusive Deals</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlock special discounts and promotions at partnering beer gardens through the 
                Sundial app. Enjoy not just the sunshine but also savings on your favourite brews 
                with our exclusive deals and loyalty programs.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/images/iphone-15-pro-promo.png"
                  alt="Sundial exclusive deals"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Sunshine Ratings - Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-1">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/images/iphone-15-pro-order.png"
                  alt="Sundial sunshine ratings"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="order-2 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Sunshine Ratings</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Say goodbye to cloudy days ruining your beer garden plans. Sundial provides 
                real-time weather updates and sunshine ratings for beer gardens in your vicinity, 
                helping you make informed decisions about where to bask in the sunlight.
              </p>
            </div>
          </div>

          {/* Feature 4: Interactive Maps - Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Interactive Maps</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Navigate with ease using our interactive maps that showcase the best-rated beer 
                gardens nearby. Filter options based on sunlight intensity, crowd levels, and 
                ambiance, so you can find the perfect spot for your mood.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/images/iphone-15-pro-map.png"
                  alt="Sundial interactive maps"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-20" id="beta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be first to the sunshine
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our private beta and shape the way people discover sunny beer gardens.
          </p>
          <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Request Invite
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t">
        <p>© {new Date().getFullYear()} Sundial • Built by Dave Kenny</p>
      </footer>
    </main>
  );
}