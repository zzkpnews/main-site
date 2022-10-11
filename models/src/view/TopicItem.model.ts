type TopicItem = {
  /**
   * 话题描述
   */
  topic_describe: string;
  /**
   * 话题logo图片外链
   */
  logo_url: string;
  /**
   * 话题标题
   */
  title: string;
  /**
   * 话题id
   */
  topic_id: string;
  /** 
   * 话题的绝对顺序
   */
  topic_order:number;
  /** 
   * 话题的背景图片
   */
  bgimg:string;
};

export type { TopicItem };
