
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Music, FileText, Play, ExternalLink, Guitar, Palette, Code, PenTool, GraduationCap, Lightbulb, Mail, MessageCircle, Phone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioPage = () => {
  const compositions = [
    {
      title: "Pahla Pyar",
      embedUrl: "https://www.youtube.com/embed/XLgJ4EYof3M",
      description: "A melodious composition about first love"
    },
    {
      title: "Raghuwar Ram Aa Gaye",
      embedUrl: "https://www.youtube.com/embed/153sNf2Z3Qc",
      description: "A devotional composition"
    },
    {
      title: "Pyar Nahi Hai Khel Dear",
      embedUrl: "https://www.youtube.com/embed/rgFtlUeXRqI",
      description: "A heartfelt song about love"
    },
    {
      title: "Koi Pukare Shankar",
      embedUrl: "https://www.youtube.com/embed/5jXH_7V3IUU",
      description: "A spiritual composition"
    },
    {
      title: "Jaatikaar",
      embedUrl: "https://www.youtube.com/embed/NEjGJ8A2wMI",
      description: "An original composition"
    }
  ];

  const services = [
    {
      title: "AI-Generated Logos & Designs",
      description: "Tailored, creative logos and digital brand visuals using AI tools — crafted to match each client's vision and story.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Songs for Special Occasions",
      description: "AI-assisted songs personalized for birthdays, weddings, proposals, and life moments — complete with user-submitted details.",
      icon: <Music className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Music Composition & Songwriting",
      description: "Original tracks in various genres (romantic, emotional, commercial) + lyric writing for brands, creators, and personal use.",
      icon: <Guitar className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Poetry, Shayari & Diary Writing",
      description: "Emotional and artistic writing — perfect for gifting, performances, or personal moments. Each piece is uniquely written.",
      icon: <PenTool className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Guitar Music Classes",
      description: "Personalized 1-on-1 guitar lessons with structure, feedback, and creative exploration for music enthusiasts.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Website Development",
      description: "Creative, responsive websites for portfolios, blogs, and businesses — clean UI, mobile-first, fast loading.",
      icon: <Code className="h-6 w-6" />,
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Creative Classes & Workshops",
      description: "Learn songwriting, AI-assisted design, music creation, and digital creativity — step-by-step guidance, project-based learning.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Custom Digital Solutions",
      description: "Visual content, branding packages, creative edits, and more. Fully tailored to unique project needs.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const poetries = [
    {
      title: "मेरी peace",
      content: "मुझे लोग दस बीस नही चाहिए ..तुझसे दूरी हरगिज नहीं चाहिए ..तेरी बाहों में आके मिलती है जो मुझे ..हां हां मुझे पीस वही चाहिए ...."
    },
    {
      title: "प्यार के बारे में",
      content: "मेरे पास वक्त कितना है , नहीं जानता हूं  ।।\nतुम्हारे साथ जीना है मुझे, बस यही जानता हूं ।।\nऔर तुमने प्यार में सिखाया है जो भी आजतक ।\nप्यार के बारे में मैं बस वही जानता हूं ।।"
    },
    {
      title: "उसके आने के बाद",
      content: "मुझे कुछ नहीं पाना है उसे पाने के बाद ।\nतुम्हे भी कुछ सुनाऊंगा उसके लिए गाने के बाद ।।\n\nये पहाड़ , बर्फ नदियां खूबसूरत तो लगते हैं मुझे\nशर्त बस इतनी है उसके आने के बाद .."
    },
    {
      title: "वजहें ग़म",
      content: "कुछ पल ठहरने को ठिकाने ढूंढ रहा हूं\nगुजर गए जो वो जमाने ढूंढ रहा हूं ।।\nमारने को मुझे आमदा हैं वजहे गम मेरे ।\nये तो मैं हूं जो जीने के बहाने ढूंढ रहा हूं ।।"
    },
    {
      title: "जो तू है",
      content: "हर महफिल कमाल सी लगती है ,जो तू है |\nये दुनिया खयाल सी लगती है ,जो तू है ।।\nजो तू नहीं ,तो लगता है मुझे सब खाक सा ।\nऔर खाक भी गुलाल सी लगती है , जो तू है ।।"
    },
    {
      title: "मरना होगा",
      content: "जुल्फो में अपने वो पुरवाई लेकर चलती है ।\nहोंठो पर लफ्जो की शहनाई लेकर चलती है ।।\nमरना होगा तो देखूंगा जी भर उसकी आंखो में ।।\nआंखो में वो सागर सी गहराई लेकर चलती है"
    },
    {
      title: "मुझसे प्यार मत करना",
      content: "मेरी मासूम बातो पर , एतबार मत करना ।\nगर कभी कर भी लो ,तो बार बार मत करना ।।\nगुरुर चढ़ जाता है मुझे, जरा से इश्क का भी ।\nमैं पसंद आ भी जाऊं कही, तो इजहार मत करना ।।\nअगर कर दू इजहारे दिल मैं ही कभी तुमसे ।\nतो आसानी से मुझसे प्यार मत करना ।\nफिर कूदना हो अगर इश्क दरिया में मेरे साथ ।\nहाथ छुड़ा कर अकेले पार मत करना ।।\nऔर मर ना सको मेरे इश्क में अगर तुम ।\nमुझसे भूल कर भी प्यार मत करना ।।\nमेरी मासूम बातो पर , एतबार मत करना"
    },
    {
      title: "लूट",
      content: "उसको देखा तो बैट वैट सब हाथ से मेरे छूट गया ।।दिल छलका और प्यार व्यार से बांध सब्र का टूट गया ।।मैंने छुपा के रखा था ना दा दिल को हां गुल्लक में ।।उसका हुनर था ऐसा की बस आंखो से लूट गया ।।"
    },
    {
      title: "मां का कहा",
      content: "जो जो नहीं करना था वही किया हूं।\nगलत करके लगता था सही किया हूं ।\nएक ही मलाल है मेरी जिंदगी का फकत ।\nमा का कहा नहीं किया हूं ।।"
    },
    {
      title: "मजाक के बाद",
      content: "करते हो जताते हो सब खाक करते हो ।\nमजाक के बाद फिर मजाक करते हो ।"
    },
    {
      title: "खुद ही",
      content: "खुद ही अपने हार पर लिखने लगा हूं ।\nभूल के खुद को संसार पर लिखने लगा हूं ।।\nउसने पढ़ाया है कुछ तो अपनी आंखों से ।\nदुबारा मैं प्यार पर लिखने लगा हूं ।।"
    },
    {
      title: "कुंभ",
      content: "40 तक हम घूम घूम के रोज कीहिंन सब पाप ।\nकुंभ में मारिन ती ने डुबकी कई दीहीन सब साफ"
    },
    {
      title: "हक नहीं चाहिए",
      content: "हक नहीं चाहिए , सड़क नही चाहिए ।\nप्यार नही चाहिए , संसार नही चाहिए ।।\nचाहिए नही किताब मुझे , कुछ बनने के ख्वाब मुझे ।\nईमान पर मेरे शक नही चाहिए , हक नही चाहिए ।।\nइंसाफ नहीं चाहिए , नाला साफ नही चाहिए ।।\nचाहिए नही रोजगार मुझे , टोकने वाले लोग वो चार मुझे ।।\nकान में नेताओ की बक बक नही चाहिए ।।\nहक नही चाहिए ।।"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/47dfee5e-0dc4-495e-b003-53a83aca36ad.png" 
              alt="dKloud Logo" 
              className="h-16 w-auto mr-4"
            />
            <h1 className="text-4xl font-bold">My Portfolio</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Explore my creative journey - music, poetry, services, and personal story
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Meet the Founder
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              What I Offer
            </TabsTrigger>
            <TabsTrigger value="compositions" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              Original Compositions
            </TabsTrigger>
            <TabsTrigger value="poetry" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Penned Down
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
                  <img 
                    src="/lovable-uploads/60f33ce6-efaa-4f60-a11c-09517021a6ff.png" 
                    alt="Dileep Yadav - Founder" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400";
                    }}
                  />
                </div>
                <CardTitle className="text-3xl">Dileep Yadav</CardTitle>
                <CardDescription className="text-lg">Founder & Creative Director</CardDescription>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge className="bg-primary/10 text-primary">🎹 Pianist</Badge>
                  <Badge className="bg-green-500/10 text-green-600">🎸 Guitarist</Badge>
                  <Badge className="bg-blue-500/10 text-blue-600">✍️ Writer</Badge>
                  <Badge className="bg-purple-500/10 text-purple-600">🧠 AI Creator</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Welcome to dKloud — where creativity meets technology</h3>
                  <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                    <p>
                      I'm the founder: a passionate music composer, lyricist, and AI-powered digital creator. 
                      I've had the privilege of working with established music director <strong>Arya Sharma</strong>, 
                      and have released multiple original compositions in Hindi and other regional languages, 
                      collaborating with renowned singers.
                    </p>
                    <p>
                      Rooted in traditional musicianship — as a guitarist, pianist, and writer — my journey has 
                      evolved into a creative fusion of emotional expression and cutting-edge AI tools. This combination 
                      allows me to offer a unique range of services that deliver both heartfelt artistry and innovative digital design.
                    </p>
                    <p>
                      With years of experience in crafting songs, shayari, poetry, and compositions, I've expanded my 
                      creative vision into digital spaces — designing AI-generated logos, custom music for any occasion, 
                      and personalized visual storytelling.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-xl font-bold mb-3">Mission Statement</h4>
                  <blockquote className="text-lg italic">
                    "To blend human emotion with AI-powered tools and create art that resonates, educates, and inspires. 
                    Driven by the belief that art should be accessible, emotive, and modern, I aim to exceed expectations 
                    with everything I deliver."
                  </blockquote>
                </div>

                <div className="text-center bg-gradient-to-r from-primary/5 to-blue-500/5 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    You're not just hiring a service — you're gaining a creative partner dedicated to making your vision real, personal, and extraordinary.
                  </p>
                  <p className="text-xl font-semibold text-primary mb-6">
                    Let's build something unforgettable. With trust, creativity, and collaboration — your idea becomes a masterpiece.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600">
                      Start Your Project
                    </Button>
                    <Button variant="outline" size="lg">
                      Explore My Services
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From AI-powered designs to heartfelt music compositions, I offer a unique blend of traditional artistry and modern technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-col gap-2 pt-4 border-t">
                      <Button size="sm" className="w-full">
                        Get Started
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href="mailto:contact@dkloud.in">
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-primary/5 to-blue-500/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Let's bring your ideas to life</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether it's music, design, or storytelling. I'm ready when you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compositions" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🎼 YouTube Compositions</h2>
              <p className="text-lg text-muted-foreground">
                Original musical compositions and covers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {compositions.map((composition, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-primary" />
                      {composition.title}
                    </CardTitle>
                    <CardDescription>{composition.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={composition.embedUrl}
                        title={composition.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={composition.embedUrl.replace('/embed/', '/watch?v=')} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch on YouTube
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="poetry" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">✍️ Penned Down</h2>
              <p className="text-lg text-muted-foreground">
                Poetry and Shayari - thoughts penned from the heart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {poetries.map((poetry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {poetry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="whitespace-pre-line leading-relaxed">
                        {poetry.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioPage;
