import { render, screen } from '@/lib/test-utils';

describe('Example', () => {
  it('should render', () => {
    render(<div>Example</div>);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
