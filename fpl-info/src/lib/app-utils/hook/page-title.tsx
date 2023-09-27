import { useDocumentTitle } from '@uidotdev/usehooks';

const usePageTitle = (title: string) => {
  useDocumentTitle(`${title} - Fantasy Premier League`);
};

export { usePageTitle };
