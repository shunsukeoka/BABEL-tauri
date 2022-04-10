import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('components/common/button/Button', () => {
    const { container } = render(<Button label="Button" primary />)

    test('exist component', () => {
        expect(container).toBeInTheDocument()
    })
})
