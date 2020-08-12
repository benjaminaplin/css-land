import React from 'react'

const MockContentDiv = ({number}) => {
  return (
    <div>
      <div className="mock-div-number">{number}</div>
      <div className="mock-div-text">
        Master cleanse chambray shaman lumbersexual art party, kitsch man bun
        you probably haven't heard of them kale chips affogato asymmetrical
        tousled aesthetic street art. Polaroid craft beer meggings synth, health
        goth microdosing pork belly activated charcoal ennui portland.
        Humblebrag migas tilde, edison bulb DIY man braid vice brooklyn. Occupy
        shaman adaptogen vexillologist offal post-ironic synth biodiesel blog
        truffaut irony intelligentsia ugh iPhone leggings. Kitsch meh salvia
        portland pabst actually. Paleo skateboard biodiesel, disrupt hella pug
        VHS blog trust fund. Meditation freegan franzen green juice, vape you
        probably haven't heard of them sriracha gluten-free thundercats
        lumbersexual post-ironic taiyaki artisan williamsburg offal.
      </div>
      <div className="mock-div-img-container">
        <img
          alt="science lesson image"
          className="mock-image"
          src="https://gdurl.com/jmGe"
        />
      </div>
    </div>
  )
}
export default MockContentDiv;