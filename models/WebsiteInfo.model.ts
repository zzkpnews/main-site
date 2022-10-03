type WebsiteInfo = {
  /**
   * 网站机构的联系地址
   */
  address?: string;
  /**
   * 网站的官方邮箱地址
   */
  email?: string;
  /**
   * 网站的ICP编码
   */
  icp?: string;
  /**
   * 网站的所属机构
   */
  institution?: string;
  /**
   * 网站的联系电话组
   */
  phone?: string[];
  /**
   * 网站的技术支持单位
   */
  technologySupport?: string;
  /**
   * 网站的主标题，用于首页等展示性页面
   */
  title: string;
  /**
   * 网站的官方微信地址
   */
  wechat?: string;
};

export type { WebsiteInfo };
