import { ArrowRightToLine } from 'lucide-react';
import { Button } from '../ui/button';

type CollapsedContentSidebarProps = {
  handleClick: () => void;
};
export const CollapsedContentSidebar = ({
  handleClick,
}: CollapsedContentSidebarProps) => {
  return (
    <section className="px-2 py-6">
      <header className="flex items-center justify-center mb-6">
        <Button
          variant="icon"
          onClick={handleClick}
          className="hidden md:inline-flex p-2 hover:bg-gray-700 focus:outline-none focus:ring-2
            focus:ring-accent-500 rounded-lg transition-colors
            "
          title="Expandir sidebar"
          aria-label="Expandir sidebar"
        >
          <ArrowRightToLine className="w-5 h-5 text-gray-100" />
        </Button>
      </header>
    </section>
  );
};
