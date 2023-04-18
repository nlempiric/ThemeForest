import React from 'react'
import Layout from '../layout/Layout'
import Navbar from '../layout/header/Navbar'
import Footer from '../layout/footer/Footer'
import ArticleList from '../ArticlesList/ArticleList'
import PromoTwo from '../promo/PromoTwo'

const ArticlePageComponent = (props) => {
  return (
    <>
      <Layout>
      <Navbar  darkBg/>
      <ArticleList articleAraay={props.articleAraay}/>
      
      {/* <PromoTwo /> */}
      {/* <AboutApp />
      <FeatureImg ImgSource="assets/img/image-10.png" />
      <VideoPromoTwo />
      <Price />
      <TestimonialTwo />
      <Screenshot hasBg />
      <AccordionWithImg />
      <LatestNewsOne light bgColor="gray-light-bg" />
      <TeamTwo />
      <Contact bgColor="gray-light-bg" />
      <BrandCarousel />
      <Subsribe />  */}
      <Footer  />
    </Layout>
    </>
  )
}

export default ArticlePageComponent