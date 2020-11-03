import React from 'react'
import { render, screen } from '@testing-library/react'
import NavItems from '../NavItems'

describe('<NavItems/>', () => {
  it('Should render 6 pcs of Li tags', () => {
    render(<NavItems />)
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })
})
