import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import ProductsItem from '../ProductsItem/ProductsItem'
import { StaticQuery } from 'gatsby'

import { PureProducts as Products } from '../Products'

configure({ adapter: new Adapter() })

describe('<Products/>', () => {
  const data = {
    section: {
      title: 'Dbałość o każdy szczegół.',
      name: 'Oferta',
      info:
        'Produkujemy bramy i ogrodzenia stalowe od podstaw, dzięki czemu mamy kontrole nad jakością od projektu do montażu, jesteśmy rzemieślnikami spawu i z pasją podchodzimy do każdego projektu. Proponowane produkty możemy wykonać w dowolnym kolorze i wymiarze.',
    },
    items: {
      nodes: [
        {
          title: 'Balkony',
          slug: 'balkony',
          features: [
            'Dowolny wymiar',
            'Solidne zabezpieczenie',
            'Dowolny kolor',
            'Bardzo wytrzymałe',
            'Bezpieczeństwo',
          ],
          photo: {
            fluid: {
              src:
                '//images.ctfassets.net/krgc6xrk8y54/Q5sjANEz9MCo7lFO9KEAH/5c8b333d9d78cf08ed9e422b17db435c/20200617_113853.jpg?w=800&q=50',
            },
          },
        },
        {
          title: 'Balkony',
          slug: 'balkony',
          features: [
            'Dowolny wymiar',
            'Solidne zabezpieczenie',
            'Dowolny kolor',
            'Bardzo wytrzymałe',
            'Bezpieczeństwo',
          ],
          photo: {
            fluid: {
              src:
                '//images.ctfassets.net/krgc6xrk8y54/Q5sjANEz9MCo7lFO9KEAH/5c8b333d9d78cf08ed9e422b17db435c/20200617_113853.jpg?w=800&q=50',
            },
          },
        },
        {
          title: 'Balkony',
          slug: 'balkony',
          features: [
            'Dowolny wymiar',
            'Solidne zabezpieczenie',
            'Dowolny kolor',
            'Bardzo wytrzymałe',
            'Bezpieczeństwo',
          ],
          photo: {
            fluid: {
              src:
                '//images.ctfassets.net/krgc6xrk8y54/Q5sjANEz9MCo7lFO9KEAH/5c8b333d9d78cf08ed9e422b17db435c/20200617_113853.jpg?w=800&q=50',
            },
          },
        },
        {
          title: 'Balkony',
          slug: 'balkony',
          features: [
            'Dowolny wymiar',
            'Solidne zabezpieczenie',
            'Dowolny kolor',
            'Bardzo wytrzymałe',
            'Bezpieczeństwo',
          ],
          photo: {
            fluid: {
              src:
                '//images.ctfassets.net/krgc6xrk8y54/Q5sjANEz9MCo7lFO9KEAH/5c8b333d9d78cf08ed9e422b17db435c/20200617_113853.jpg?w=800&q=50',
            },
          },
        },
      ],
    },
  }

  it('check if quantity of printed elements is correct', () => {
    const wrapper = shallow(<Products type={''} data={data} />)
    expect(wrapper.find(ProductsItem)).toHaveLength(4)
  })
})
