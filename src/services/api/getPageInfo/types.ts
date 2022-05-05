export interface GetPageInfoRequestInterface {
  page_id: string;
}

interface RichTextInterface {
  type: string;
    text: {
      content: string;
      link: string;
    };
    annotations: {
      bold: boolean,
      italic: boolean,
      strikethrough: boolean,
      underline: boolean,
      code: boolean,
      color: string;
    };
    plain_text: string;
    href: string;
}

interface MultiSelectInterface {
  id: string;
  name: string;
  color: string;
}

export interface GetPageInfoResponseInterface {
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
  cover: any;
  icon: any;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    image: {
      id: string;
      type: string;
      url: string;
    },
    title: {
      id: string;
      type: string;
      rich_text: RichTextInterface[];
    };
    show: {
      id: string;
      type: string;
      checkbox: boolean;
    };
    tags: {
      id: string;
      type: string;
      multi_select: MultiSelectInterface[];
    };
    description: {
      id: string;
      type: string;
      rich_text: RichTextInterface[];
    };
    category: {
      id: string;
      type: string;
      rich_text: RichTextInterface[];
    };
    time: {
      id: string;
      type: string;
      created_time: string;
    },
    article: {
      id: string;
      type: string;
      title: RichTextInterface[];
    }
  };
  url: string;
}