export interface GetContentPageRequestInterface {
  block_id: string;
}

interface RichTextInterface {
  type: string;
  text: {
    content: string;
    link: string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string;
}

interface ResultInterface {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  type: string;
  paragraph: {
    rich_text: RichTextInterface[];
    color: string;
  }
}
export interface GetContentPageResponseInterface {
  object: string;
  results: ResultInterface[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  block: any;
}