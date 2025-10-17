use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Star, Zap } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/7519003/pexels-photo-7519003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two business professionals engaging in conversation in a stylish bar interior, highlighting modern work culture."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Person using a laptop with an online communication platform, showcasing modern work tech."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/7525183/pexels-photo-7525183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young woman vlogs in a modern kitchen, using a smartphone and ring lamp."},
  {"id":"feature-image-3","url":"https://images.pexels.com/photos/4541996/pexels-photo-4541996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman exploring Adobe Lightroom tutorials online for learning and photo editing."},
  {"id":"product-image-1","url":"https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Serious female teacher wearing old fashioned dress and eyeglasses standing with book while pointing at chalkboard with schemes and looking at camera"},
  {"id":"product-image-2","url":"https://images.pexels.com/photos/5940837/pexels-photo-5940837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A group of multiethnic college students collaborating on a project in a modern library setting."},
  {"id":"product-image-3","url":"https://images.pexels.com/photos/5649518/pexels-photo-5649518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman engaged in an online English course session in a modern educational setting."},
  {"id":"testimonial-image-1","url":"https://images.pexels.com/photos/8204392/pexels-photo-8204392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful call center agent with a headset gives a high five to a colleague in an office."},
  {"id":"testimonial-image-2","url":"https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cheerful ethnic female cafeteria owner in apron demonstrating cardboard signboard while standing near blue shabby door and windows after starting own business and looking at camera"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline 
            navItems={[{ name: "Courses", id: "courses" }, { name: "About", id: "about" }, { name: "Testimonials", id: "testimonials" }, { name: "Contact", id: "contact" }]} 
            brandName="Tate Courses" 
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard 
            title="Transform Your Life with Tate's Courses" 
            description="Explore strategies that elevate your success and well-being."
            imageSrc={(assetMap.find(({ id }) => id === 'hero-image')?.url) || "/public/images/placeholder.webp"}
            buttons={[
              { text: "Explore Courses", href: "courses" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout 
            title="About Andrew Tate" 
            description={[
              "Andrew Tate offers a variety of courses aimed at personal empowerment and business success.",
              "Learn from experts who have been there and know what it takes."
            ]}
            buttons={[
              { text: "Discover More", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo 
            features={[
              { title: "Comprehensive Learning", description: "Engage with in-depth modules tailored to your growth.", icon: Zap },
              { title: "Expert Guidance", description: "Learn directly from Andrew Tate on key principles for success.", icon: Star },
              { title: "Flexible Access", description: "Study at your own pace, anytime and anywhere.", icon: Calendar }
            ]}
            title="Our Featured Courses"
            description="Unlock Your Potential with the Following Key Features"
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Business Mastery", price: "$399", imageSrc: (assetMap.find(({ id }) => id === 'product-image-1')?.url) || "/public/images/placeholder.webp", onProductClick: () => alert('Business Mastery clicked') },
              { id: "2", name: "Success Principles", price: "$299", imageSrc: (assetMap.find(({ id }) => id === 'product-image-2')?.url) || "/public/images/placeholder.webp", onProductClick: () => alert('Success Principles clicked') },
              { id: "3", name: "Self Improvement", price: "$199", imageSrc: (assetMap.find(({ id }) => id === 'product-image-3')?.url) || "/public/images/placeholder.webp", onProductClick: () => alert('Self Improvement clicked') }
            ]}
            title="Exclusive Courses Available"
            description="Select from a range of expert-curated courses."
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            testimonials={[
              { id: "1", name: "John Doe", role: "Entrepreneur", company: "Startup Inc.", rating: 5, imageSrc: (assetMap.find(({ id }) => id === 'testimonial-image-1')?.url) || "/public/images/placeholder.webp", imageAlt: "John Doe portrait" },
              { id: "2", name: "Jane Smith", role: "CEO", company: "Tech Corp.", rating: 4, imageSrc: (assetMap.find(({ id }) => id === 'testimonial-image-2')?.url) || "/public/images/placeholder.webp", imageAlt: "Jane Smith portrait" }
            ]}
            title="Testimonials"
            description="Discover what our students are saying about their journey."
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Get the Latest Updates"
            description="Join our mailing list to stay informed about new courses and offers."
            imageSrc={(assetMap.find(({ id }) => id === 'hero-image')?.url) || "/public/images/placeholder.webp"}
            onSubmit={(email) => console.log('Newsletter signup:', email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase 
            columns={[
              {
                title: "Courses",
                items: [
                  { label: "Business Mastery", href: "courses#business" },
                  { label: "Success Principles", href: "courses#success" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Privacy Policy", href: "terms" }
                ]
              }
            ]}
            copyrightText="© 2025 Andrew Tate Courses"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
