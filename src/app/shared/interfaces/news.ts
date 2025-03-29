export interface INews {
  id: string;
  ua: {
    title: string;
    description: string;
    content: string;
  };
  en: {
    title: string;
    description: string;
    content: string;
  };
  img_url: string;
  ref: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}
