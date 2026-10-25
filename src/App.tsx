import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "./components/layout/SiteLayout"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { FaqPage } from "./pages/FaqPage"
import { HomePage } from "./pages/HomePage"
import { ImageGalleryPage } from "./pages/ImageGalleryPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { PricesPage } from "./pages/PricesPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { ServiceDetailsPage } from "./pages/ServiceDetailsPage"
import { ServicesPage } from "./pages/ServicesPage"
import { VideoGalleryPage } from "./pages/VideoGalleryPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="preturi" element={<PricesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="gallery" element={<ImageGalleryPage />} />
          <Route path="videos" element={<VideoGalleryPage />} />
          <Route path="faqs" element={<FaqPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
