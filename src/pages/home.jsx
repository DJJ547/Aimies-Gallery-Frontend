import React from 'react';
import TextArea from '../components/TextArea';
import Slider from "../components/Slider"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className='overflow-y-scroll'>
          <TextArea />
          <Slider />
          <Footer />
        </div>
    );
}
