import Header from './Components/Header';
import Banner from './Components/Banner';
import Card from './Components/Card';
import Article from './Components/Article';
import ProfileInfo from './Components/ProfileInfo';
import Footer from './Components/Footer';
import '../src/assets/css/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Carditems = [
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></svg>,
    title: "Fully Responsive",
    ptext : "This theme will look great on any device, no matter the size!"
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16"><path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/><path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/></svg>,
    title: "Bootstrap 5 Ready",
    ptext : "Featuring the latest build of the new Bootstrap 5 framework!"
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/></svg>,
    title: "Easy to Use", 
    ptext : "Ready to use with your own content, or customize the source files!"
  }
] 

const ArticleContent = [
  {
    articleTitle : "Fully Responsive Design",
    className : "flex-row",
    articleText: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
  },
  {
    articleTitle : "Updated For Bootstrap 5",
    className : "flex-row-reverse",
    articleText: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
  },
  {
    articleTitle : "Easy to Use & Customize",
    className : "flex-row",
    articleText: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
  }
]

const ProInfo = [
  {
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    proName: "Margaret E.",
    proDesc: "This is fantastic! Thanks so much guys!"
  },
  {
    src : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    proName: "Fred S.",
    proDesc: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    proName: "Sarah W.",
    proDesc: "Thanks so much for making these free resources available to us!"  
  }
]


function App() {

  return (
    <>
      <Header />  
      <Banner bannerText={"Generate more leads with a professional landing page!"} />
      <Card data={Carditems} />     
      <Article data={ArticleContent} />,
      <ProfileInfo data={ProInfo} />
      <Banner bannerText={"Ready to get started? Sign up now!"} /> 
      <Footer />
    </>
  )
}

export default App
