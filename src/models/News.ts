interface News {
  id: number;
  title: string;
  subtitle: string;
  editable: boolean;
  content: string;
  datetime: string;
  categoryId: number;
}

export default News;
