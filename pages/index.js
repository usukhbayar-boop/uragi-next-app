import Layout from '@/components/layout/Layout';
import AboutOne from '@/components/sections/homepage/AboutOne';
import AppOne from '@/components/sections/homepage/AppOne';
import BenefitsOne from '@/components/sections/homepage/BenefitsOne';
import ClientOne from '@/components/sections/homepage/ClientOne';
import CounterOne from '@/components/sections/homepage/CounterOne';
import CtaOne from '@/components/sections/homepage/CtaOne';
import FaqOne from '@/components/sections/homepage/FaqOne';
import FeatureOne from '@/components/sections/homepage/FeatureOne';
import HeroOne from '@/components/sections/homepage/HeroOne';
import PricingOne from '@/components/sections/homepage/PricingOne';
import SuccessOne from '@/components/sections/homepage/SuccessOne';
import TestimonialOne from '@/components/sections/homepage/TestimonialOne';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDCtyjYuX-eAXflhsONv8FXotcNuQwuPLs",
    authDomain: "uriga-fa7c3.firebaseapp.com",
    projectId: "uriga-fa7c3",
    storageBucket: "uriga-fa7c3.appspot.com",
    messagingSenderId: "639459325444",
    appId: "1:639459325444:web:7ff9b938f6c453c333e751",
    measurementId: "G-Z2RJTKPVQY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default function Home1() {
    return (
        <>
            <Layout
                headerLayout={1}
                footerLayout={1}
                logo="logo" // logo, logo-flat, logo-5
                verticalLine // if vertical line true, show vertical line show
            >
                <HeroOne bgPath="home-1/masthead" />
                <ClientOne />
                <AboutOne />
                <BenefitsOne />
                <SuccessOne />
                <FeatureOne />
                <TestimonialOne />
                <CounterOne />
                <AppOne />
                <PricingOne />
                <FaqOne />
                <CtaOne />
            </Layout>
        </>
    )
}
