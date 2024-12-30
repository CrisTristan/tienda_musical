import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function LandingPage({ apiKey }: { apiKey: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D"
          alt="Music Studio"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Melodía Maestra</h1>
          <p className="text-2xl mb-8 drop-shadow-md">Descubre el instrumento perfecto para tu pasión musical</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white p-5">
            Explora Nuestra Colección
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Instrumentos Destacados</h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {[
              { name: "Guitarra Eléctrica Vintage", price: "799.99", image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D" },
              { name: "Piano de Cola Clásico", price: "4,999.99", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbmQlMjBwaWFub3xlbnwwfHwwfHx8MA%3D%3D" },
              { name: "Batería Profesional", price: "1,299.99", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXN8ZW58MHx8MHx8fDA%3D" },
              { name: "Violín Artesanal", price: "1,599.99", image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlvbGlufGVufDB8fDB8fHww" },
            ].map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-purple-600 font-bold">${product.price}</p>
                    <Button className="mt-4">Ver Detalles</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Calidad Premium", description: "Seleccionamos cuidadosamente cada instrumento para garantizar la mejor calidad sonora.", icon: "🏆" },
            { title: "Asesoramiento Experto", description: "Nuestro equipo de músicos profesionales te guiará en tu elección.", icon: "🎓" },
            { title: "Garantía de Satisfacción", description: "30 días de prueba con devolución sin preguntas.", icon: "🛡️" },
          ].map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-purple-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">¿Listo para hacer música?</h2>
        <p className="text-xl mb-8">Únete a nuestra comunidad de músicos y descubre ofertas exclusivas</p>
        <Button size="lg" variant="outline" className="bg-white text-purple-700 hover:bg-purple-100">
          Regístrate Ahora
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Melodía Maestra</h3>
            <p>Tu destino para instrumentos musicales de calidad.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Catálogo</a></li>
              <li><a href="#" className="hover:text-purple-400">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-purple-400">Contacto</a></li>
              <li><a href="#" className="hover:text-purple-400">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400">Facebook</a>
              <a href="#" className="hover:text-purple-400">Instagram</a>
              <a href="#" className="hover:text-purple-400">Twitter</a>
              <a href="#" className="hover:text-purple-400">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Melodía Maestra. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

