import { screen } from '@testing-library/dom'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

describe('test App component', () => {

  it('should render main page and change text after click on "Click me"', async () => {
    await act(async () => {
      render(<App />)
    })
    expect(screen.getByText(/WOW!!! It works!/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/Click me/i))
    expect(await screen.findByText(/LOL!!! It works!/i)).toBeInTheDocument()
  })
})