import { SidebarContent } from '@/components/sidebar/sidebar-content';
import { render, screen } from '@/lib/test-utils';
import userEvent from '@testing-library/user-event';
const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

const makeSut = () => {
  return render(<SidebarContent />);
};
describe('SidebarContent', () => {
  const user = userEvent.setup();
  it('should render a new prompt button', () => {
    makeSut();

    const asideElement = screen.getByRole('complementary');
    expect(asideElement).toBeVisible();

    const newPromptButton = screen.getByRole('button', { name: 'Novo Prompt' });
    expect(newPromptButton).toBeVisible();
  });

  describe('Collapse / Expand sidebar', () => {
    it('should be init expanded and have a button to collapse', () => {
      makeSut();
      const asideElement = screen.getByRole('complementary');
      expect(asideElement).toBeVisible();

      const collapseButton = screen.getByRole('button', {
        name: /minimizar sidebar/i,
      });
      expect(collapseButton).toBeVisible();

      const expandButton = screen.queryByRole('button', {
        name: /expandir sidebar/i,
      });
      expect(expandButton).not.toBeInTheDocument();
    });
    it('should collapse adn show expand button', async () => {
      makeSut();
      const collapseButton = screen.getByRole('button', {
        name: /minimizar sidebar/i,
      });

      await user.click(collapseButton);

      const expandButton = screen.getByRole('button', {
        name: /expandir sidebar/i,
      });
      expect(expandButton).toBeInTheDocument();
      expect(collapseButton).not.toBeInTheDocument();
    });
  });
  describe('New prompt', () => {
    it('should navigate user for page of new prompt', async () => {
      makeSut();

      const newPromptButton = screen.getByRole('button', {
        name: 'Novo Prompt',
      });
      await user.click(newPromptButton);

      expect(pushMock).toHaveBeenCalledWith('/new');
    });
  });
});
