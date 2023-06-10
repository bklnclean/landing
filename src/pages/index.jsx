import React from 'react'
import IndexBanner from '../components/IndexBanner'
import { Link } from 'react-router-dom'
import WhyUs from '../components/WhyUs'
import WeInNumbers from '../components/WeInNumbers'
import RoomElements from '../components/RoomElements'
import Pricing from '../components/Pricing'
import TryIt from '../components/TryIt'

function Index() {
  return (
    <>
      <IndexBanner/>
      <WhyUs/>
      <WeInNumbers/>
      <RoomElements/>
      <Pricing/>
      <TryIt/>
    </>
  )
}

export default Index