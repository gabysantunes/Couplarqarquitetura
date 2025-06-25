import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Building2, Home, Wrench, FileText, Users, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react'
import './App.css'

// Importar as imagens
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.png'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'

const services = [
  {
    icon: Building2,
    title: "Arquitetura Residencial e Comercial",
    description: "Projetos únicos que refletem sua personalidade e necessidades"
  },
  {
    icon: Wrench,
    title: "Reformas Inteligentes",
    description: "Transformamos espaços existentes em ambientes extraordinários"
  },
  {
    icon: FileText,
    title: "Projetos Executivos",
    description: "Documentação técnica completa para execução perfeita"
  },
  {
    icon: Home,
    title: "Obras e Gerenciamento",
    description: "Acompanhamento total do projeto até a entrega final"
  },
  {
    icon: Users,
    title: "Consultoria Técnica",
    description: "Orientação especializada para suas decisões arquitetônicas"
  }
]

const backgroundImages = [image1, image4, image6, image8]

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProj: '',
    orcamento: '',
    prazo: '',
    descricao: ''
  })
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui você pode adicionar a lógica para enviar o formulário
  }

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Hero Section com Background Dinâmico */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Images com Transição */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80" />
        </div>

        {/* Particles Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 text-lg font-semibold">
              Couplarq Arquitetura e Construção
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Vamos construir
              </span>
              <br />
              <span className="text-white">
                o espaço da sua vida?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformamos sonhos em realidade através de projetos arquitetônicos únicos, 
              funcionais e personalizados que refletem sua essência e estilo de vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Começar meu briefing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Nossos Serviços
            </Button>
          </motion.div>

          {/* Diferenciais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: CheckCircle, text: "Abordagem 100% Personalizada" },
              { icon: Star, text: "Integração Arquitetura + Construção" },
              { icon: Building2, text: "Projetos Únicos e Funcionais" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <item.icon className="h-6 w-6 text-amber-400" />
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Nossos <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em arquitetura e construção, 
              desde o conceito inicial até a entrega final do seu projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-500 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <CardTitle className="text-white text-xl font-bold group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Conte-nos sobre seu <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Projeto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Preencha o briefing abaixo e nossa equipe entrará em contato para 
              transformar sua visão em realidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-white">
                  Formulário de Briefing
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Etapa {currentStep + 1} de 3
                </CardDescription>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          step <= currentStep 
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500' 
                            : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Informações Pessoais</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Nome Completo *</label>
                            <Input
                              name="nome"
                              value={formData.nome}
                              onChange={handleInputChange}
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500/20"
                              placeholder="Seu nome completo"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white font-medium mb-2">E-mail *</label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500/20"
                              placeholder="seu@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2">Telefone *</label>
                          <Input
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500/20"
                            placeholder="(11) 99999-9999"
                            required
                          />
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 1 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Detalhes do Projeto</h3>
                        <div>
                          <label className="block text-white font-medium mb-2">Tipo de Projeto *</label>
                          <select
                            name="tipoProj"
                            value={formData.tipoProj}
                            onChange={handleInputChange}
                            className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500/20"
                            required
                          >
                            <option value="">Selecione o tipo de projeto</option>
                            <option value="residencial">Arquitetura Residencial</option>
                            <option value="comercial">Arquitetura Comercial</option>
                            <option value="reforma">Reforma Inteligente</option>
                            <option value="executivo">Projeto Executivo</option>
                            <option value="consultoria">Consultoria Técnica</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Orçamento Estimado</label>
                            <select
                              name="orcamento"
                              value={formData.orcamento}
                              onChange={handleInputChange}
                              className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500/20"
                            >
                              <option value="">Selecione a faixa</option>
                              <option value="ate-100k">Até R$ 100.000</option>
                              <option value="100k-300k">R$ 100.000 - R$ 300.000</option>
                              <option value="300k-500k">R$ 300.000 - R$ 500.000</option>
                              <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                              <option value="acima-1m">Acima de R$ 1.000.000</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-white font-medium mb-2">Prazo Desejado</label>
                            <select
                              name="prazo"
                              value={formData.prazo}
                              onChange={handleInputChange}
                              className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500/20"
                            >
                              <option value="">Selecione o prazo</option>
                              <option value="ate-3m">Até 3 meses</option>
                              <option value="3m-6m">3 a 6 meses</option>
                              <option value="6m-12m">6 meses a 1 ano</option>
                              <option value="acima-12m">Acima de 1 ano</option>
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Conte-nos Mais</h3>
                        <div>
                          <label className="block text-white font-medium mb-2">Descrição do Projeto *</label>
                          <Textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500/20 min-h-[120px]"
                            placeholder="Descreva sua visão, necessidades, estilo preferido, número de ambientes, características especiais..."
                            required
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between pt-6">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        Voltar
                      </Button>
                    )}
                    <div className="ml-auto">
                      {currentStep < 2 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                        >
                          Próximo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8"
                        >
                          Enviar Briefing
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Pronto para começar seu projeto?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>contato@couplarq.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App

